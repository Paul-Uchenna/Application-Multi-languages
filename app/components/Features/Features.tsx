import { useI18n } from "@/locales/client";
import { Feature } from "@/src/Types/types";
import React from "react";
import CardItem from "./CardItem";

export default function Features() {
  const t = useI18n();
  const features: Feature[] = [
    {
      src: "https://images.unsplash.com/photo-1559000357-f6b52ddfbe37",
      title: t("features.expert.title"),
      description: t("features.expert.description"),
    },
    {
      src: "https://images.unsplash.com/photo-1517840901100-8179e982acb7",
      title: t("features.quality.title"),
      description: t("features.quality.description"),
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: t("features.support.title"),
      description: t("features.support.description"),
    },
  ];
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black/80 mb-10">
          {t("features.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <CardItem
              key={index}
              src={feature.src}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
