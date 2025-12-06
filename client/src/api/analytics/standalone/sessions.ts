import { authedFetch } from "../../utils";
import { CommonApiParams, PaginationParams, toQueryParams } from "./types";

// Re-export types from hooks
export type {
  GetSessionsResponse,
  SessionDetails,
  SessionEvent,
  SessionPageviewsAndEvents,
} from "../useGetUserSessions";
export type { LiveSessionLocation } from "../useGetSessionLocations";

import type { GetSessionsResponse, SessionPageviewsAndEvents } from "../useGetUserSessions";
import type { LiveSessionLocation } from "../useGetSessionLocations";

export interface SessionsParams extends CommonApiParams, PaginationParams {
  userId?: string;
  identifiedOnly?: boolean;
}

export interface SessionDetailsParams {
  sessionId: string;
  limit?: number;
  offset?: number;
  minutes?: number;
}

/**
 * Fetch sessions list
 * GET /api/sessions/:site
 */
export async function fetchSessions(
  site: string | number,
  params: SessionsParams
): Promise<{ data: GetSessionsResponse }> {
  const queryParams = {
    ...toQueryParams(params),
    page: params.page,
    limit: params.limit,
    user_id: params.userId,
    identified_only: params.identifiedOnly,
  };

  const response = await authedFetch<{ data: GetSessionsResponse }>(
    `/sessions/${site}`,
    queryParams
  );
  return response;
}

/**
 * Fetch details of a specific session
 * GET /api/sessions/:sessionId/:site
 */
export async function fetchSession(
  site: string | number,
  params: SessionDetailsParams
): Promise<{ data: SessionPageviewsAndEvents }> {
  const queryParams: Record<string, any> = {
    limit: params.limit,
    offset: params.offset,
  };

  if (params.minutes) {
    queryParams.minutes = params.minutes;
  }

  const response = await authedFetch<{ data: SessionPageviewsAndEvents }>(
    `/sessions/${params.sessionId}/${site}`,
    queryParams
  );
  return response;
}

/**
 * Fetch session locations for map visualization
 * GET /api/session-locations/:site
 */
export async function fetchSessionLocations(
  site: string | number,
  params: CommonApiParams
): Promise<LiveSessionLocation[]> {
  const response = await authedFetch<{ data: LiveSessionLocation[] }>(
    `/session-locations/${site}`,
    toQueryParams(params)
  );
  return response.data;
}
