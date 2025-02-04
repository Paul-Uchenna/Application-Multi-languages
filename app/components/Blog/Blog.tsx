import { useI18n } from "@/locales/client";
import { BlogTypes } from "@/src/Types/types";
import { gsap } from "gsap";

import React, { useEffect } from "react";
import CardItem from "./CardItem";

export default function Blog() {
  const t = useI18n();
  const blogs: BlogTypes[] = [
    {
      src: "https://images.unsplash.com/photo-1559000357-f6b52ddfbe37",
      title: t("home.blogs.expert.title"),
      description: t("home.blogs.expert.description"),
    },
    {
      src: "https://images.unsplash.com/photo-1517840901100-8179e982acb7",
      title: t("home.blogs.quality.title"),
      description: t("home.blogs.quality.description"),
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: t("home.blogs.support.title"),
      description: t("home.blogs.support.description"),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".feature-card");
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          gsap.to(element, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.3,
          });
        }
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black/80 mb-10">
          {t("home.blogs.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((feature, index) => (
            <div
              key={index}
              className="feature-card opacity-0 transform translate-x-12 transition-all"
            >
              <CardItem
                src={feature.src}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
