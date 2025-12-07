import { useQuery } from "@tanstack/react-query";
import { fetchFunnels, SavedFunnel } from "../standalone";

// Re-export types from standalone
export type { SavedFunnel, FunnelStep } from "../standalone";

export function useGetFunnels(siteId?: string | number) {
  return useQuery<SavedFunnel[]>({
    queryKey: ["funnels", siteId],
    queryFn: async () => {
      if (!siteId) {
        return [];
      }
      return fetchFunnels(siteId);
    },
    enabled: !!siteId,
  });
}
