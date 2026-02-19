"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useChangeLocale } from "../hooks/useChangeLocale";

const locales = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
] as const;

export function LocaleSwitcher() {
  const currentLocale = useLocale();
  const changeLocale = useChangeLocale();
  const t = useTranslations("locale");

  const nextLocale = currentLocale === "en" ? "de" : "en";
  const nextLabel = locales.find((l) => l.code === nextLocale)?.label ?? nextLocale;

  return (
    <button
      onClick={() => changeLocale(nextLocale)}
      className="bg-neutral-200 dark:bg-neutral-800 px-1.5 py-0.5 rounded-full flex items-center gap-1 transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-700 text-xs font-medium text-neutral-600 dark:text-neutral-300"
      aria-label={t("Language")}
      title={nextLabel}
    >
      <Globe className="w-3 h-3" />
      <span className="uppercase">{currentLocale}</span>
    </button>
  );
}
