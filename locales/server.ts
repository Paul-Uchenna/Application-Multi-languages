// locales/server.ts
import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import("./messages/en"),
  fr: () => import("./messages/fr"),
  es: () => import("./messages/es"),
  de: () => import("./messages/de"),
  jp: () => import("./messages/jp"),
});
