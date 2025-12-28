import { authedFetch } from "../../utils";
import { updateSiteConfig } from "./sites";

export interface ExcludedIPsResponse {
  success: boolean;
  excludedIPs: string[];
  error?: string;
}

export interface UpdateExcludedIPsRequest {
  siteId: number;
  excludedIPs: string[];
}

export interface UpdateExcludedIPsResponse {
  success: boolean;
  message: string;
  excludedIPs: string[];
  error?: string;
  details?: string[];
}

// Fetch excluded IPs for a site
export const fetchExcludedIPs = async (siteId: string): Promise<ExcludedIPsResponse> => {
  return await authedFetch<ExcludedIPsResponse>(`/sites/${siteId}/excluded-ips`);
};

// Update excluded IPs for a site using the consolidated endpoint
export const updateExcludedIPs = async (siteId: number, excludedIPs: string[]): Promise<UpdateExcludedIPsResponse> => {
  await updateSiteConfig(siteId, { excludedIPs });
  // Map the response to match the expected interface
  return {
    success: true,
    message: "Excluded IPs updated successfully",
    excludedIPs: excludedIPs,
  };
};
