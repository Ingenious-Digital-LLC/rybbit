import { authedFetch } from "../../utils";
import { CommonApiParams, toQueryParams } from "./types";

// Re-export types from hooks
export type { ProcessedRetentionData, RetentionMode } from "../useGetRetention";
export type { Journey, JourneysResponse } from "../useGetJourneys";

import type { ProcessedRetentionData, RetentionMode } from "../useGetRetention";
import type { JourneysResponse } from "../useGetJourneys";

export interface RetentionParams {
  mode?: RetentionMode;
  range?: number;
}

export interface JourneysParams extends CommonApiParams {
  steps?: number;
  limit?: number;
  stepFilters?: Record<number, string>;
}

/**
 * Fetch retention cohort data
 * GET /api/retention/:site
 */
export async function fetchRetention(
  site: string | number,
  params: RetentionParams = {}
): Promise<ProcessedRetentionData> {
  const { mode = "week", range = 90 } = params;

  const response = await authedFetch<{ data: ProcessedRetentionData }>(
    `/retention/${site}`,
    { mode, range }
  );
  return response.data;
}

/**
 * Fetch user journey paths
 * GET /api/journeys/:site
 */
export async function fetchJourneys(
  site: string | number,
  params: JourneysParams
): Promise<JourneysResponse> {
  const queryParams = {
    ...toQueryParams(params),
    steps: params.steps ?? 3,
    limit: params.limit ?? 100,
    stepFilters:
      params.stepFilters && Object.keys(params.stepFilters).length > 0
        ? JSON.stringify(params.stepFilters)
        : undefined,
  };

  const response = await authedFetch<JourneysResponse>(
    `/journeys/${site}`,
    queryParams
  );
  return response;
}
