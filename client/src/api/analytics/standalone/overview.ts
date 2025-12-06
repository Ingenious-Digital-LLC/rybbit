import { authedFetch } from "../../utils";
import {
  CommonApiParams,
  BucketedParams,
  MetricParams,
  toQueryParams,
  toBucketedQueryParams,
  toMetricQueryParams,
} from "./types";

// Re-export types from hooks for convenience
export type { GetOverviewResponse } from "../useGetOverview";
export type { GetOverviewBucketedResponse } from "../useGetOverviewBucketed";
export type { MetricResponse } from "../useGetMetric";
export type { LiveUserCountResponse } from "../useGetLiveUserCount";

import type { GetOverviewResponse } from "../useGetOverview";
import type { GetOverviewBucketedResponse } from "../useGetOverviewBucketed";
import type { MetricResponse } from "../useGetMetric";
import type { LiveUserCountResponse } from "../useGetLiveUserCount";

/**
 * Fetch overview metrics for a site
 * GET /api/overview/:site
 */
export async function fetchOverview(
  site: string | number,
  params: CommonApiParams
): Promise<GetOverviewResponse> {
  const response = await authedFetch<{ data: GetOverviewResponse }>(
    `/overview/${site}`,
    toQueryParams(params)
  );
  return response.data;
}

/**
 * Fetch time-series overview data
 * GET /api/overview-bucketed/:site
 */
export async function fetchOverviewBucketed(
  site: string | number,
  params: BucketedParams
): Promise<GetOverviewBucketedResponse> {
  const response = await authedFetch<{ data: GetOverviewBucketedResponse }>(
    `/overview-bucketed/${site}`,
    toBucketedQueryParams(params)
  );
  return response.data;
}

/**
 * Fetch dimensional metric data
 * GET /api/metric/:site
 */
export async function fetchMetric(
  site: string | number,
  params: MetricParams
): Promise<{ data: MetricResponse[]; totalCount: number }> {
  const response = await authedFetch<{
    data: { data: MetricResponse[]; totalCount: number };
  }>(`/metric/${site}`, toMetricQueryParams(params));
  return response.data;
}

/**
 * Fetch live user count
 * GET /api/live-user-count/:site
 */
export async function fetchLiveUserCount(
  site: string | number,
  minutes: number = 5
): Promise<LiveUserCountResponse> {
  const response = await authedFetch<LiveUserCountResponse>(
    `/live-user-count/${site}`,
    { minutes }
  );
  return response;
}
