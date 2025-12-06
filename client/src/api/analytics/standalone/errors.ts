import { TimeBucket } from "@rybbit/shared";
import { authedFetch } from "../../utils";
import { CommonApiParams, PaginationParams, toQueryParams } from "./types";

// Re-export types from hooks
export type {
  ErrorNameItem,
  ErrorNamesPaginatedResponse,
} from "../errors/useGetErrorNames";
export type {
  ErrorEvent,
  ErrorEventsPaginatedResponse,
} from "../errors/useGetErrorEvents";
export type { GetErrorBucketedResponse } from "../errors/useGetErrorBucketed";

import type { ErrorNamesPaginatedResponse } from "../errors/useGetErrorNames";
import type { ErrorEventsPaginatedResponse } from "../errors/useGetErrorEvents";
import type { GetErrorBucketedResponse } from "../errors/useGetErrorBucketed";

export interface ErrorNamesParams extends CommonApiParams, PaginationParams {}

export interface ErrorEventsParams extends CommonApiParams, PaginationParams {
  errorMessage: string;
}

export interface ErrorBucketedParams extends CommonApiParams {
  errorMessage: string;
  bucket: TimeBucket;
}

/**
 * Fetch error names with counts
 * GET /api/error-names/:site
 */
export async function fetchErrorNames(
  site: string | number,
  params: ErrorNamesParams
): Promise<ErrorNamesPaginatedResponse> {
  const queryParams = {
    ...toQueryParams(params),
    limit: params.limit,
    page: params.page,
  };

  const response = await authedFetch<{ data: ErrorNamesPaginatedResponse }>(
    `/error-names/${site}`,
    queryParams
  );
  return response.data;
}

/**
 * Fetch individual error events
 * GET /api/error-events/:site
 */
export async function fetchErrorEvents(
  site: string | number,
  params: ErrorEventsParams
): Promise<ErrorEventsPaginatedResponse> {
  const queryParams = {
    ...toQueryParams(params),
    errorMessage: params.errorMessage,
    limit: params.limit,
    page: params.page,
  };

  const response = await authedFetch<{ data: ErrorEventsPaginatedResponse }>(
    `/error-events/${site}`,
    queryParams
  );
  return response.data;
}

/**
 * Fetch error counts over time
 * GET /api/error-bucketed/:site
 */
export async function fetchErrorBucketed(
  site: string | number,
  params: ErrorBucketedParams
): Promise<GetErrorBucketedResponse> {
  const queryParams = {
    ...toQueryParams(params),
    errorMessage: params.errorMessage,
    bucket: params.bucket,
  };

  const response = await authedFetch<{ data: GetErrorBucketedResponse }>(
    `/error-bucketed/${site}`,
    queryParams
  );
  return response.data;
}
