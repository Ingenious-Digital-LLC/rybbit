import { useQuery } from "@tanstack/react-query";
import {
  fetchSessionReplayEvents,
  SessionReplayEvent,
  SessionReplayMetadata,
  GetSessionReplayEventsResponse,
} from "../standalone";

// Re-export types from standalone
export type { SessionReplayEvent, SessionReplayMetadata, GetSessionReplayEventsResponse } from "../standalone";

export function useGetSessionReplayEvents(siteId: number, sessionId: string) {
  return useQuery({
    queryKey: ["session-replay-events", siteId, sessionId],
    queryFn: () => fetchSessionReplayEvents(siteId, sessionId),
    enabled: !!siteId && !!sessionId,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
