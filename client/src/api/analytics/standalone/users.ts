import { authedFetch } from "../../utils";
import { CommonApiParams, PaginationParams, SortParams, toQueryParams } from "./types";

// Re-export types from hooks
export type { UsersResponse } from "../useGetUsers";
export type { UserInfo, LinkedDevice } from "../userGetInfo";
export type { UserSessionCountResponse } from "../useGetUserSessions";

import type { UsersResponse } from "../useGetUsers";
import type { UserInfo } from "../userGetInfo";
import type { GetSessionsResponse, UserSessionCountResponse } from "../useGetUserSessions";

export interface UsersParams extends CommonApiParams, PaginationParams, SortParams {
  pageSize?: number;
  identifiedOnly?: boolean;
}

export interface UserSessionsParams extends CommonApiParams {
  userId: string;
}

export interface UserSessionCountParams {
  userId: string;
  timeZone: string;
}

export interface UsersListResponse {
  data: UsersResponse[];
  totalCount: number;
  page: number;
  pageSize: number;
}

/**
 * Fetch users list with pagination
 * GET /api/users/:site
 */
export async function fetchUsers(
  site: string | number,
  params: UsersParams
): Promise<UsersListResponse> {
  const queryParams = {
    ...toQueryParams(params),
    page: params.page,
    page_size: params.pageSize ?? params.limit,
    sort_by: params.sortBy,
    sort_order: params.sortOrder,
    identified_only: params.identifiedOnly,
  };

  const response = await authedFetch<UsersListResponse>(
    `/users/${site}`,
    queryParams
  );
  return response;
}

/**
 * Fetch sessions for a specific user
 * GET /api/users/:userId/sessions/:site
 */
export async function fetchUserSessions(
  site: string | number,
  params: UserSessionsParams
): Promise<{ data: GetSessionsResponse }> {
  const response = await authedFetch<{ data: GetSessionsResponse }>(
    `/users/${params.userId}/sessions/${site}`,
    toQueryParams(params)
  );
  return response;
}

/**
 * Fetch session count per day for a user
 * GET /api/users/session-count/:site
 */
export async function fetchUserSessionCount(
  site: string | number,
  params: UserSessionCountParams
): Promise<{ data: UserSessionCountResponse[] }> {
  const response = await authedFetch<{ data: UserSessionCountResponse[] }>(
    `/users/session-count/${site}`,
    {
      user_id: params.userId,
      time_zone: params.timeZone,
    }
  );
  return response;
}

/**
 * Fetch detailed user information
 * GET /api/users/:userId/:site
 */
export async function fetchUserInfo(
  site: string | number,
  userId: string
): Promise<UserInfo> {
  const response = await authedFetch<{ data: UserInfo }>(
    `/users/${userId}/${site}`
  );
  return response.data;
}
