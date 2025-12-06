import { TimeBucket } from "@rybbit/shared";
import { authedFetch } from "../../utils";
import { CommonApiParams, PaginationParams, SortParams, toQueryParams } from "./types";

// Re-export types from hooks
export type { GetPerformanceOverviewResponse } from "../performance/useGetPerformanceOverview";
export type { GetPerformanceTimeSeriesResponse } from "../performance/useGetPerformanceTimeSeries";
export type { PerformanceByDimensionItem } from "../performance/useGetPerformanceByDimension";

import type { GetPerformanceOverviewResponse } from "../performance/useGetPerformanceOverview";
import type { GetPerformanceTimeSeriesResponse } from "../performance/useGetPerformanceTimeSeries";
import type { PerformanceByDimensionItem } from "../performance/useGetPerformanceByDimension";

export interface PerformanceOverviewParams extends CommonApiParams {
  percentile?: number;
}

export interface PerformanceTimeSeriesParams extends CommonApiParams {
  bucket: TimeBucket;
}

export interface PerformanceByDimensionParams
  extends CommonApiParams,
    PaginationParams,
    SortParams {
  dimension: string;
  percentile?: number;
}

export interface PaginatedPerformanceResponse {
  data: PerformanceByDimensionItem[];
  totalCount: number;
}

/**
 * Fetch performance overview (Core Web Vitals)
 * GET /api/performance/overview/:site
 */
export async function fetchPerformanceOverview(
  site: string | number,
  params: PerformanceOverviewParams
): Promise<GetPerformanceOverviewResponse> {
  const queryParams = {
    ...toQueryParams(params),
    percentile: params.percentile,
  };

  const response = await authedFetch<{ data: GetPerformanceOverviewResponse }>(
    `/performance/overview/${site}`,
    queryParams
  );
  return response.data;
}

/**
 * Fetch performance time series data
 * GET /api/performance/time-series/:site
 */
export async function fetchPerformanceTimeSeries(
  site: string | number,
  params: PerformanceTimeSeriesParams
): Promise<GetPerformanceTimeSeriesResponse> {
  const queryParams = {
    ...toQueryParams(params),
    bucket: params.bucket,
  };

  const response = await authedFetch<{ data: GetPerformanceTimeSeriesResponse }>(
    `/performance/time-series/${site}`,
    queryParams
  );
  return response.data;
}

/**
 * Fetch performance broken down by dimension
 * GET /api/performance/by-dimension/:site
 */
export async function fetchPerformanceByDimension(
  site: string | number,
  params: PerformanceByDimensionParams
): Promise<PaginatedPerformanceResponse> {
  const queryParams = {
    ...toQueryParams(params),
    dimension: params.dimension,
    limit: params.limit,
    page: params.page,
    sort_by: params.sortBy,
    sort_order: params.sortOrder,
    percentile: params.percentile,
  };

  const response = await authedFetch<{ data: PaginatedPerformanceResponse }>(
    `/performance/by-dimension/${site}`,
    queryParams
  );
  return response.data;
}
