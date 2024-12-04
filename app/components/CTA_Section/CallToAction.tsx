import React from "react";
import { useI18n } from "@/locales/client";

export default function CallToAction() {
  const t = useI18n();
  return (
    <section className="py-20 bg-yellow-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{t("home.cta.title")}</h2>
        <p className="text-xl mb-8">{t("home.cta.subtitle")}</p>
        <button className="bg-white text-yellow-500 px-8 py-3 rounded-lg text-lg hover:bg-gray-100">
          {t("home.cta.button")}
        </button>
      </div>
    </section>
  );
}
