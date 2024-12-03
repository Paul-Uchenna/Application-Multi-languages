// locales/client.ts
"use client";
import { createI18nClient } from "next-international/client";

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useCurrentLocale,
  useChangeLocale,
} = createI18nClient({
  en: () => import("./messages/en"),
  fr: () => import("./messages/fr"),
  es: () => import("./messages/es"),
  de: () => import("./messages/de"),
  jp: () => import("./messages/jp"),
});
