import { useEffect } from "react";
import { authClient } from "@/lib/auth";

export function useTrack() {
  const user = authClient.useSession();
  useEffect(() => {
    if (typeof window !== "undefined" && user.data?.user?.id && window.rybbit) {
      window.rybbit?.identify(user.data?.user?.id, {
        email: user.data?.user?.email,
        name: user.data?.user?.name,
      });
    }
  }, [user.data?.user?.id, window.rybbit]);
}
