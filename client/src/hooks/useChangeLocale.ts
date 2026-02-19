import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useChangeLocale() {
  const router = useRouter();

  const changeLocale = useCallback(
    (newLocale: string) => {
      document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
      router.refresh();
    },
    [router]
  );

  return changeLocale;
}
