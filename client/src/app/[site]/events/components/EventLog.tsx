"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Event } from "../../../../api/analytics/endpoints";
import {
  useGetEventsCursor,
  useNewEventsPoll,
} from "../../../../api/analytics/hooks/events/useGetEvents";
import { NothingFound } from "../../../../components/NothingFound";
import { ErrorState } from "../../../../components/ErrorState";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { EventDetailsSheet } from "./EventDetailsSheet";
import { EventLogItemSkeleton } from "./EventLogItem";
import { EventRow } from "./EventRow";
import { getEventKey } from "./eventLogUtils";

const MAX_EVENTS = 10_000;
const PAGE_SIZE = 100;

export function EventLog() {
  const { site } = useParams();

  // --- Mode state ---
  const [isRealtime, setIsRealtime] = useState(true);

  // --- Prepended events from polling (realtime mode) ---
  const [prependedEvents, setPrependedEvents] = useState<Event[]>([]);
  const seenKeysRef = useRef(new Set<string>());
  const latestTimestampRef = useRef<string | null>(null);

  // --- Pause / buffer state ---
  const [isLive, setIsLive] = useState(true);
  const isLiveRef = useRef(true);
  isLiveRef.current = isLive;
  const isRealtimeRef = useRef(true);
  isRealtimeRef.current = isRealtime;
  const bufferedEventsRef = useRef<Event[]>([]);
  const [bufferedCount, setBufferedCount] = useState(0);

  // --- Scroll refs ---
  const [scrollElement, setScrollElement] = useState<HTMLDivElement | null>(
    null
  );
  const viewportRef = useRef<HTMLDivElement | null>(null);

  // --- Sheet state ---
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // --- Cursor query (both modes) ---
  const {
    data: cursorData,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetEventsCursor({ isRealtime, pageSize: PAGE_SIZE });

  // --- Derive cursor events from query data ---
  const cursorEvents = useMemo(
    () => cursorData?.pages.flatMap((p) => p.data) ?? [],
    [cursorData]
  );

  // --- Combined event list ---
  const allEvents = useMemo(() => {
    if (prependedEvents.length === 0) return cursorEvents;
    return [...prependedEvents, ...cursorEvents].slice(0, MAX_EVENTS);
  }, [prependedEvents, cursorEvents]);

  // --- Rebuild seenKeys + set latestTimestamp when cursor data changes ---
  useEffect(() => {
    seenKeysRef.current = new Set(cursorEvents.map(getEventKey));
    for (const ev of prependedEvents) {
      seenKeysRef.current.add(getEventKey(ev));
    }
    if (cursorEvents.length > 0 && !latestTimestampRef.current) {
      latestTimestampRef.current = cursorEvents[0].timestamp;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursorEvents]);

  // --- Poll query (realtime only) ---
  const getSinceTimestamp = useCallback(
    () => latestTimestampRef.current,
    []
  );
  const { data: pollData } = useNewEventsPoll({
    getSinceTimestamp,
    enabled: isRealtime,
  });

  // --- Handle poll results (realtime only) ---
  useEffect(() => {
    if (!isRealtime || !pollData?.data?.length) return;

    const incoming = pollData.data;
    const newEvents: Event[] = [];
    for (const ev of incoming) {
      const key = getEventKey(ev);
      if (!seenKeysRef.current.has(key)) {
        seenKeysRef.current.add(key);
        newEvents.push(ev);
      }
    }
    if (newEvents.length === 0) return;

    // Update latest timestamp
    const newestTs = newEvents[0].timestamp;
    if (
      !latestTimestampRef.current ||
      newestTs > latestTimestampRef.current
    ) {
      latestTimestampRef.current = newestTs;
    }

    if (isLiveRef.current) {
      setPrependedEvents((prev) => {
        const combined = [...newEvents, ...prev];
        if (combined.length + cursorEvents.length > MAX_EVENTS) {
          return combined.slice(
            0,
            MAX_EVENTS - cursorEvents.length
          );
        }
        return combined;
      });
    } else {
      bufferedEventsRef.current = [
        ...newEvents,
        ...bufferedEventsRef.current,
      ];
      setBufferedCount((c) => c + newEvents.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pollData]);

  // --- Reset on mode toggle ---
  useEffect(() => {
    setPrependedEvents([]);
    seenKeysRef.current.clear();
    latestTimestampRef.current = null;
    bufferedEventsRef.current = [];
    setBufferedCount(0);
    setIsLive(true);
  }, [isRealtime]);

  // --- Virtualizer ---
  const rowVirtualizer = useVirtualizer({
    count: allEvents.length,
    getScrollElement: () => scrollElement,
    estimateSize: () => 28,
    overscan: 12,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  // --- Infinite scroll trigger ---
  useEffect(() => {
    if (!virtualItems.length) return;
    const lastItem = virtualItems[virtualItems.length - 1];
    if (
      lastItem.index >= allEvents.length - 5 &&
      hasNextPage &&
      !isFetchingNextPage &&
      !isLoading
    ) {
      fetchNextPage();
    }
  }, [
    virtualItems,
    allEvents.length,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  ]);

  // --- Callback ref: capture viewport whenever ScrollArea mounts ---
  const scrollAreaCallbackRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        const viewport = node.querySelector<HTMLDivElement>(
          '[data-slot="scroll-area-viewport"]'
        );
        if (viewport) {
          viewportRef.current = viewport;
          setScrollElement(viewport);
        }
      } else {
        viewportRef.current = null;
        setScrollElement(null);
      }
    },
    []
  );

  // --- Scroll listener for auto-pause/resume ---
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleScroll = () => {
      if (!isRealtimeRef.current) return;
      const atTop = viewport.scrollTop < 50;
      if (atTop && !isLiveRef.current) {
        // Resume: flush buffer
        setIsLive(true);
        if (bufferedEventsRef.current.length > 0) {
          const buffered = bufferedEventsRef.current;
          bufferedEventsRef.current = [];
          setBufferedCount(0);
          setPrependedEvents((prev) => {
            const combined = [...buffered, ...prev];
            return combined;
          });
        }
      } else if (!atTop && isLiveRef.current) {
        setIsLive(false);
      }
    };

    viewport.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      viewport.removeEventListener("scroll", handleScroll);
    };
  }, [scrollElement]);

  // --- Flush buffer + scroll to top ---
  const flushAndScrollToTop = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const buffered = bufferedEventsRef.current;
    bufferedEventsRef.current = [];
    setBufferedCount(0);
    setIsLive(true);

    if (buffered.length > 0) {
      setPrependedEvents((prev) => [...buffered, ...prev]);
    }

    viewport.scrollTop = 0;
  }, []);

  const handleToggleRealtime = useCallback(() => {
    setIsRealtime((prev) => !prev);
  }, []);

  // --- Render ---
  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 24 }).map((_, index) => (
          <EventLogItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorState
        title="Failed to load events"
        message="There was a problem fetching the events. Please try again later."
      />
    );
  }

  if (allEvents.length === 0) {
    return (
      <>
        <RealtimeToggle
          isRealtime={isRealtime}
          onToggle={handleToggleRealtime}
        />
        <NothingFound
          title={"No events found"}
          description={"Try a different date range or filter"}
        />
      </>
    );
  }

  return (
    <>
      <RealtimeToggle
        isRealtime={isRealtime}
        onToggle={handleToggleRealtime}
      />

      <div className="relative">
        {/* New events indicator */}
        {isRealtime && !isLive && bufferedCount > 0 && (
          <button
            onClick={flushAndScrollToTop}
            className="absolute top-12 left-1/2 -translate-x-1/2 z-30 px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-medium shadow-lg hover:bg-accent-600 transition-colors cursor-pointer"
          >
            ↑ {bufferedCount} new event{bufferedCount !== 1 ? "s" : ""}
          </button>
        )}

        <ScrollArea
          className="h-[80vh] border border-neutral-100 dark:border-neutral-800 rounded-lg"
          ref={scrollAreaCallbackRef}
        >
          <div className="relative h-full pr-2 font-mono text-[11px] leading-4">
            <div className="sticky top-0 z-20 bg-neutral-50/95 dark:bg-neutral-850/95 backdrop-blur border-b border-neutral-100 dark:border-neutral-800">
              <div className="grid grid-cols-[140px_220px_160px_160px_minmax(240px,1fr)] px-2 py-1.5 uppercase tracking-wide text-[10px] text-neutral-500 dark:text-neutral-400">
                <div>Timestamp</div>
                <div>User</div>
                <div>Event Type</div>
                <div>Device Info</div>
                <div>Main Data</div>
              </div>
            </div>

            <div className="relative">
              <div
                style={{
                  height: rowVirtualizer.getTotalSize(),
                  position: "relative",
                }}
              >
                {virtualItems.map((virtualRow) => {
                  const event = allEvents[virtualRow.index];
                  if (!event) return null;

                  return (
                    <div
                      key={`${event.timestamp}-${virtualRow.index}`}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                    >
                      <EventRow
                        event={event}
                        site={site as string}
                        onClick={(selected) => {
                          setSelectedEvent(selected);
                          setSheetOpen(true);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {isFetchingNextPage && (
              <div className="py-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <EventLogItemSkeleton key={`next-page-${index}`} />
                ))}
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      <EventDetailsSheet
        open={sheetOpen}
        onOpenChange={(open) => {
          setSheetOpen(open);
          if (!open) setSelectedEvent(null);
        }}
        event={selectedEvent}
        site={site as string}
      />
    </>
  );
}

function RealtimeToggle({
  isRealtime,
  onToggle,
}: {
  isRealtime: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
          isRealtime
            ? "bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/25"
            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-700"
        }`}
      >
        {isRealtime && (
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
        )}
        Realtime
      </button>
    </div>
  );
}
