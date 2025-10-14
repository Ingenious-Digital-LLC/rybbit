import { round } from "lodash";
import { DateTime } from "luxon";
import mapboxgl from "mapbox-gl";
import { createElement, useEffect, useRef, useState } from "react";
// @ts-ignore - React 19 has built-in types
import { renderToStaticMarkup } from "react-dom/server";
import { Eye, MousePointerClick } from "lucide-react";
import { useTimelineSessions } from "../useTimelineSessions";
import { generateName } from "../../../../../components/Avatar";
import { formatShortDuration, hour12, userLocale } from "../../../../../lib/dateTimeUtils";
import type { GetSessionsResponse } from "../../../../../api/analytics/userSessions";
import { useTimelineStore } from "../../timelineStore";
import { extractDomain, getDisplayName } from "../../../../../components/Channel";
import {
  generateAvatarSVG,
  renderCountryFlag,
  renderDeviceIcon,
  renderChannelIcon,
  getBrowserIconPath,
  getOSIconPath,
} from "./timelineMarkerHelpers";
import { getUnclusteredFeatures, initializeClusterSource, setupClusterClickHandler } from "./timelineClusterUtils";
import {
  SOURCE_ID,
  CLUSTER_LAYER_ID,
  CLUSTER_COUNT_LAYER_ID,
  UNCLUSTERED_LAYER_ID,
  CLUSTER_MAX_ZOOM,
  CLUSTER_RADIUS,
  MIN_CLUSTER_SIZE,
  CLUSTERING_THRESHOLD,
} from "./timelineLayerConstants";

export function useTimelineLayer({
  map,
  mapLoaded,
  mapView,
}: {
  map: React.RefObject<mapboxgl.Map | null>;
  mapLoaded: boolean;
  mapView: string;
}) {
  const { activeSessions } = useTimelineSessions();
  const { currentTime } = useTimelineStore();
  const popupRef = useRef<mapboxgl.Popup | null>(null);
  const markersMapRef = useRef<Map<string, { marker: mapboxgl.Marker; element: HTMLDivElement; cleanup: () => void }>>(
    new Map()
  );
  const openTooltipSessionIdRef = useRef<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<GetSessionsResponse[number] | null>(null);

  // Close tooltip when timeline time changes
  useEffect(() => {
    if (popupRef.current && popupRef.current.isOpen()) {
      popupRef.current.remove();
      openTooltipSessionIdRef.current = null;
    }
  }, [currentTime]);

  // Initialize Mapbox source and layers for clustering
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    const mapInstance = map.current;

    // Initialize popup once
    if (!popupRef.current) {
      popupRef.current = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        className: "globe-tooltip",
        anchor: "top-left",
        offset: [-30, -30],
      });
    }

    // Add source if it doesn't exist
    if (!mapInstance.getSource(SOURCE_ID)) {
      initializeClusterSource(mapInstance, CLUSTER_MAX_ZOOM, CLUSTER_RADIUS);

      // Add cluster circle layer
      mapInstance.addLayer({
        id: CLUSTER_LAYER_ID,
        type: "circle",
        source: SOURCE_ID,
        filter: ["all", ["has", "point_count"], [">=", ["get", "point_count"], MIN_CLUSTER_SIZE]],
        paint: {
          "circle-color": ["step", ["get", "point_count"], "#3b82f6", 10, "#2563eb", 30, "#1d4ed8"],
          "circle-radius": ["step", ["get", "point_count"], 20, 10, 25, 30, 30],
        },
      });

      // Add cluster count layer
      mapInstance.addLayer({
        id: CLUSTER_COUNT_LAYER_ID,
        type: "symbol",
        source: SOURCE_ID,
        filter: ["all", ["has", "point_count"], [">=", ["get", "point_count"], MIN_CLUSTER_SIZE]],
        layout: {
          "text-field": ["get", "point_count_abbreviated"],
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 14,
          "text-allow-overlap": true,
          "text-ignore-placement": true,
        },
        paint: {
          "text-color": "#ffffff",
        },
      });

      // Add unclustered point layer (hidden, used for querying)
      mapInstance.addLayer({
        id: UNCLUSTERED_LAYER_ID,
        type: "circle",
        source: SOURCE_ID,
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-radius": 0,
          "circle-opacity": 0,
        },
      });

      // Disable transitions on cluster layers
      mapInstance.setPaintProperty(CLUSTER_LAYER_ID, "circle-opacity-transition", { duration: 0 });
      mapInstance.setPaintProperty(CLUSTER_LAYER_ID, "circle-radius-transition", { duration: 0 });
      mapInstance.setPaintProperty(CLUSTER_LAYER_ID, "circle-color-transition", { duration: 0 });
      mapInstance.setPaintProperty(CLUSTER_COUNT_LAYER_ID, "text-opacity-transition", { duration: 0 });
    }

    // Setup cluster click handler
    const cleanupClusterClick = setupClusterClickHandler(mapInstance, CLUSTER_LAYER_ID);

    // Change cursor on cluster hover
    const handleClusterMouseEnter = () => {
      mapInstance.getCanvas().style.cursor = "pointer";
    };

    const handleClusterMouseLeave = () => {
      mapInstance.getCanvas().style.cursor = "";
    };

    mapInstance.on("mouseenter", CLUSTER_LAYER_ID, handleClusterMouseEnter);
    mapInstance.on("mouseleave", CLUSTER_LAYER_ID, handleClusterMouseLeave);

    return () => {
      cleanupClusterClick();
      mapInstance.off("mouseenter", CLUSTER_LAYER_ID, handleClusterMouseEnter);
      mapInstance.off("mouseleave", CLUSTER_LAYER_ID, handleClusterMouseLeave);
    };
  }, [map, mapLoaded]);

  // Update GeoJSON data and HTML markers
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    const mapInstance = map.current;
    const markersMap = markersMapRef.current;

    // Hide layers and markers if not in timeline view
    if (mapView !== "timeline") {
      // Hide layers
      if (mapInstance.getLayer(CLUSTER_LAYER_ID)) {
        mapInstance.setLayoutProperty(CLUSTER_LAYER_ID, "visibility", "none");
      }
      if (mapInstance.getLayer(CLUSTER_COUNT_LAYER_ID)) {
        mapInstance.setLayoutProperty(CLUSTER_COUNT_LAYER_ID, "visibility", "none");
      }

      // Remove all markers
      markersMap.forEach(({ marker, cleanup }) => {
        cleanup();
        marker.remove();
      });
      markersMap.clear();

      return;
    }

    // Show/hide cluster layers based on number of sessions
    const shouldShowClusters = activeSessions.length > CLUSTERING_THRESHOLD;

    if (mapInstance.getLayer(CLUSTER_LAYER_ID)) {
      mapInstance.setLayoutProperty(CLUSTER_LAYER_ID, "visibility", shouldShowClusters ? "visible" : "none");
    }
    if (mapInstance.getLayer(CLUSTER_COUNT_LAYER_ID)) {
      mapInstance.setLayoutProperty(CLUSTER_COUNT_LAYER_ID, "visibility", shouldShowClusters ? "visible" : "none");
    }

    const source = mapInstance.getSource(SOURCE_ID) as mapboxgl.GeoJSONSource;
    if (!source) return;

    // Convert sessions to GeoJSON
    const geojson: GeoJSON.FeatureCollection = {
      type: "FeatureCollection",
      features: activeSessions
        .filter(s => s.lat && s.lon)
        .map(session => ({
          type: "Feature",
          properties: session,
          geometry: {
            type: "Point",
            coordinates: [round(session.lon, 4), round(session.lat, 4)],
          },
        })),
    };

    source.setData(geojson);

    // Function to update HTML markers for unclustered points
    const updateMarkers = async () => {
      if (!mapInstance) return;

      // Get unclustered features (including expanded small clusters)
      const unclusteredFeatures = await getUnclusteredFeatures(mapInstance, shouldShowClusters, activeSessions);

      // Build set of current session IDs
      const currentSessionIds = new Set(unclusteredFeatures.map(f => f.properties?.session_id).filter(Boolean));

      // Remove markers that are no longer unclustered
      const toRemove: string[] = [];
      markersMap.forEach(({ marker, cleanup }, sessionId) => {
        if (!currentSessionIds.has(sessionId)) {
          cleanup();
          marker.remove();
          toRemove.push(sessionId);
        }
      });
      toRemove.forEach(id => markersMap.delete(id));

      // Create or update markers for unclustered sessions
      unclusteredFeatures.forEach(feature => {
        if (!mapInstance) return;

        const session = feature.properties as GetSessionsResponse[number];
        if (!session?.session_id) return;

        const existing = markersMap.get(session.session_id);
        const [lng, lat] = (feature.geometry as any).coordinates;

        if (existing) {
          // Update position if needed
          const currentLngLat = existing.marker.getLngLat();
          if (currentLngLat.lng !== lng || currentLngLat.lat !== lat) {
            existing.marker.setLngLat([lng, lat]);
          }
        } else {
          // Create new marker
          const avatarContainer = document.createElement("div");
          avatarContainer.className = "timeline-avatar-marker";
          avatarContainer.style.cursor = "pointer";
          avatarContainer.style.borderRadius = "50%";
          avatarContainer.style.overflow = "hidden";
          avatarContainer.style.width = "32px";
          avatarContainer.style.height = "32px";
          avatarContainer.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";

          const avatarSVG = generateAvatarSVG(session.user_id, 32);
          avatarContainer.innerHTML = avatarSVG;

          const marker = new mapboxgl.Marker({
            element: avatarContainer,
            anchor: "center",
          })
            .setLngLat([lng, lat])
            .addTo(mapInstance);

          // Add click event for tooltip
          const toggleTooltip = (e: MouseEvent) => {
            e.stopPropagation();
            if (!map.current || !popupRef.current) return;

            // If clicking the same marker that has the tooltip open, close it
            if (popupRef.current.isOpen() && openTooltipSessionIdRef.current === session.session_id) {
              popupRef.current.remove();
              openTooltipSessionIdRef.current = null;
              return;
            }

            // If clicking a different marker (or no tooltip is open), show this one
            if (popupRef.current.isOpen()) {
              popupRef.current.remove();
            }

            const avatarSVG = generateAvatarSVG(session.user_id, 36);
            const countryCode = session.country?.length === 2 ? session.country : "";
            const flagSVG = renderCountryFlag(countryCode);
            const deviceIconSVG = renderDeviceIcon(session.device_type || "");
            const browserIconPath = getBrowserIconPath(session.browser || "");
            const osIconPath = getOSIconPath(session.operating_system || "");

            // Duration formatting
            const durationDisplay = formatShortDuration(session.session_duration || 0);

            // Start time formatting
            const startTime = DateTime.fromSQL(session.session_start, { zone: "utc" })
              .setLocale(userLocale)
              .toLocal()
              .toFormat(hour12 ? "MMM d, h:mm a" : "dd MMM, HH:mm");

            // Pageview and event icons
            const pageviewIconSVG = renderToStaticMarkup(
              createElement(Eye, { size: 14, className: "inline-block text-blue-400" })
            );
            const eventIconSVG = renderToStaticMarkup(
              createElement(MousePointerClick, { size: 14, className: "inline-block text-amber-400" })
            );

            // Referrer/Channel display
            const domain = extractDomain(session.referrer);
            let referrerIconSVG = "";
            let referrerText = "";

            if (domain) {
              referrerText = getDisplayName(domain);
              referrerIconSVG = renderChannelIcon(session.channel);
            } else {
              referrerText = session.channel;
              referrerIconSVG = renderChannelIcon(session.channel);
            }

            const name = generateName(session.user_id);

            const html = `
              <div class="flex flex-col gap-3 p-3 bg-neutral-850 border border-neutral-750 rounded-lg">
                <div class="flex items-start gap-2.5">
                  <div class="flex-shrink-0 w-9 h-9 rounded-full overflow-hidden">
                    ${avatarSVG}
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="text-sm font-semibold text-white truncate">${name}</h3>
                    <div class="flex items-center gap-1 text-xs text-neutral-300 mt-0.5">
                      ${flagSVG}
                      <span>${session.city || "Unknown"}, ${session.country || "Unknown"}</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-1.5">
                  ${browserIconPath ? `<img src="${browserIconPath}" alt="${session.browser}" title="${session.browser}" class="w-4 h-4" />` : ""}
                  ${osIconPath ? `<img src="${osIconPath}" alt="${session.operating_system}" title="${session.operating_system}" class="w-4 h-4" />` : ""}
                  <span class="flex items-center" title="${session.device_type}">${deviceIconSVG}</span>
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 text-xs">
                    ${pageviewIconSVG}
                    <span>${session.pageviews || 0}</span>
                  </span>
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 text-xs">
                    ${eventIconSVG}
                    <span>${session.events || 0}</span>
                  </span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 text-xs">
                    ${referrerIconSVG}
                    <span>${referrerText}</span>
                  </span>
                </div>
                <div class="flex items-center justify-between gap-2 text-xs text-neutral-400 pt-1.5 border-t border-neutral-700">
                  <span>${startTime}</span>
                  <span class="text-neutral-200">${durationDisplay}</span>
                </div>
                <button
                  class="view-session-btn w-full px-2 py-1 bg-accent-600 hover:bg-accent-700 text-white text-xs font-medium rounded transition-colors"
                  data-session-id="${session.session_id}"
                  tabindex="-1"
                >
                  View Details
                </button>
              </div>
            `;

            popupRef.current.setLngLat([lng, lat]).setHTML(html).addTo(map.current);
            openTooltipSessionIdRef.current = session.session_id;

            // Add click handler to the button
            const button = document.querySelector(`[data-session-id="${session.session_id}"]`);
            if (button) {
              button.addEventListener("click", e => {
                e.stopPropagation();
                setSelectedSession(session);
                popupRef.current?.remove();
                openTooltipSessionIdRef.current = null;
              });
            }
          };

          avatarContainer.addEventListener("click", toggleTooltip);

          // Create cleanup function to remove event listener
          const cleanup = () => {
            avatarContainer.removeEventListener("click", toggleTooltip);
          };

          // Store marker with cleanup function
          markersMap.set(session.session_id, { marker, element: avatarContainer, cleanup });
        }
      });
    };

    // Initial update
    updateMarkers();

    // Update markers on zoom and move
    mapInstance.on("zoom", updateMarkers);
    mapInstance.on("move", updateMarkers);
    mapInstance.on("sourcedata", updateMarkers);

    // Handle map click to close tooltip
    const handleMapClick = () => {
      if (popupRef.current && popupRef.current.isOpen()) {
        popupRef.current.remove();
        openTooltipSessionIdRef.current = null;
      }
    };

    mapInstance.on("click", handleMapClick);

    // Cleanup function
    return () => {
      markersMap.forEach(({ marker, cleanup }) => {
        cleanup();
        marker.remove();
      });
      markersMap.clear();

      mapInstance.off("zoom", updateMarkers);
      mapInstance.off("move", updateMarkers);
      mapInstance.off("sourcedata", updateMarkers);
      mapInstance.off("click", handleMapClick);
    };
  }, [activeSessions, mapLoaded, map, mapView]);

  return {
    selectedSession,
    setSelectedSession,
  };
}
