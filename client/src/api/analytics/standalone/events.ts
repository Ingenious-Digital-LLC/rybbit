import { authedFetch } from "../../utils";
import { CommonApiParams, PaginationParams, toQueryParams } from "./types";

// Re-export types from hooks
export type { Event, EventsResponse } from "../events/useGetEvents";
export type { EventName } from "../events/useGetEventNames";
export type { EventProperty } from "../events/useGetEventProperties";
export type { OutboundLink } from "../events/useGetOutboundLinks";

import type { EventsResponse } from "../events/useGetEvents";
import type { EventName } from "../events/useGetEventNames";
import type { EventProperty } from "../events/useGetEventProperties";
import type { OutboundLink } from "../events/useGetOutboundLinks";

export interface EventsParams extends CommonApiParams, PaginationParams {
  pageSize?: number;
}

export interface EventPropertiesParams extends CommonApiParams {
  eventName: string;
}

/**
 * Fetch paginated events
 * GET /api/events/:site
 */
export async function fetchEvents(
  site: string | number,
  params: EventsParams
): Promise<EventsResponse> {
  const queryParams = {
    ...toQueryParams(params),
    page: params.page,
    page_size: params.pageSize ?? params.limit,
  };

  const response = await authedFetch<EventsResponse>(
    `/events/${site}`,
    queryParams
  );
  return response;
}

/**
 * Fetch event names
 * GET /api/events/names/:site
 */
export async function fetchEventNames(
  site: string | number,
  params: CommonApiParams
): Promise<EventName[]> {
  const response = await authedFetch<{ data: EventName[] }>(
    `/events/names/${site}`,
    toQueryParams(params)
  );
  return response.data;
}

/**
 * Fetch event properties for a specific event name
 * GET /api/events/properties/:site
 */
export async function fetchEventProperties(
  site: string | number,
  params: EventPropertiesParams
): Promise<EventProperty[]> {
  const queryParams = {
    ...toQueryParams(params),
    event_name: params.eventName,
  };

  const response = await authedFetch<{ data: EventProperty[] }>(
    `/events/properties/${site}`,
    queryParams
  );
  return response.data;
}

/**
 * Fetch outbound link clicks
 * GET /api/events/outbound/:site
 */
export async function fetchOutboundLinks(
  site: string | number,
  params: CommonApiParams
): Promise<OutboundLink[]> {
  const response = await authedFetch<{ data: OutboundLink[] }>(
    `/events/outbound/${site}`,
    toQueryParams(params)
  );
  return response.data;
}
