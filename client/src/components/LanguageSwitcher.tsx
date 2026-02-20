"use client";

import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { cn } from "../lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const LOCALE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "de", label: "Deutsch" },
  { value: "fr", label: "Français" },
] as const;

export function LanguageSwitcher() {
  const router = useRouter();
  const currentLocale = useLocale();

  const currentLabel = LOCALE_OPTIONS.find((o) => o.value === currentLocale)?.label ?? "English";

  function handleLocaleChange(locale: string) {
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        unstyled
        className={cn(
          "inline-flex items-center gap-1.5 text-sm transition-colors",
          "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white",
          "focus:outline-none"
        )}
      >
        <Globe className="w-4 h-4" />
        <span>{currentLabel}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {LOCALE_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleLocaleChange(option.value)}
            className={cn(
              currentLocale === option.value && "bg-neutral-100 dark:bg-neutral-800"
            )}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
