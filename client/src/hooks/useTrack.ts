import { useEffect } from "react";
import { authClient } from "@/lib/auth";
import { useStripeSubscription } from "../lib/subscription/useStripeSubscription";

export function useTrack() {
  const { data: subscription, isLoading } = useStripeSubscription();
  const user = authClient.useSession();
  useEffect(() => {
    if (typeof window !== "undefined" && user.data?.user?.id && window.rybbit && !isLoading) {
      window.rybbit?.identify(user.data?.user?.id, {
        email: user.data?.user?.email,
        name: user.data?.user?.name,
        plan: subscription?.planName,
      });
    }
  }, [user.data?.user?.id, window.rybbit, subscription?.planName, isLoading]);
}
