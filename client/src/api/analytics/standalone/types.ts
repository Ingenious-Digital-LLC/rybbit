import { Filter, FilterParameter, TimeBucket } from "@rybbit/shared";

/**
 * Common parameters shared across most analytics API endpoints
 */
export interface CommonApiParams {
  startDate: string; // YYYY-MM-DD format
  endDate: string; // YYYY-MM-DD format
  timeZone: string; // IANA timezone string
  filters?: Filter[];
}

/**
 * Parameters for bucketed/time-series endpoints
 */
export interface BucketedParams extends CommonApiParams {
  bucket: TimeBucket;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
}

/**
 * Parameters for the metric endpoint
 */
export interface MetricParams extends CommonApiParams, PaginationParams {
  parameter: FilterParameter;
}

/**
 * Sort parameters for paginated endpoints
 */
export interface SortParams {
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

/**
 * Convert CommonApiParams to query params format expected by the API
 */
export function toQueryParams(params: CommonApiParams): Record<string, any> {
  return {
    start_date: params.startDate,
    end_date: params.endDate,
    time_zone: params.timeZone,
    filters: params.filters?.length ? params.filters : undefined,
  };
}

/**
 * Convert BucketedParams to query params format
 */
export function toBucketedQueryParams(
  params: BucketedParams
): Record<string, any> {
  return {
    ...toQueryParams(params),
    bucket: params.bucket,
  };
}

/**
 * Convert MetricParams to query params format
 */
export function toMetricQueryParams(params: MetricParams): Record<string, any> {
  return {
    ...toQueryParams(params),
    parameter: params.parameter,
    limit: params.limit,
    page: params.page,
  };
}
