import React, { useEffect } from "react";
import { useI18n } from "@/locales/client";
import { Destination } from "@/src/Types/types";
import { gsap } from "gsap";

import CardDestination from "./CardDestination";

export default function Destinations() {
  const t = useI18n();

  const destinations: Destination[] = [
    {
      src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("destinations.paris.title"),
      description: t("destinations.paris.description"),
      link: t("destinations.paris.link"),
    },
    {
      src: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("destinations.tokyo.title"),
      description: t("destinations.tokyo.description"),
      link: t("destinations.tokyo.link"),
    },
    {
      src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("destinations.nyc.title"),
      description: t("destinations.nyc.description"),
      link: t("destinations.nyc.link"),
    },
    {
      src: "https://images.unsplash.com/photo-1473726867722-6b8a5e529d76?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("destinations.mexico.title"),
      description: t("destinations.mexico.description"),
      link: t("destinations.mexico.link"),
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1694475482575-fcf2e5e64655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("destinations.london.title"),
      description: t("destinations.london.description"),
      link: t("destinations.london.link"),
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661963139522-22525f644234?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("destinations.prague.title"),
      description: t("destinations.prague.description"),
      link: t("destinations.prague.link"),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".destination-card");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black/80 mb-10">
          {t("destinations.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="destination-card opacity-0 transform translate-y-12 transition-all"
            >
              <CardDestination
                src={destination.src}
                title={destination.title}
                description={destination.description}
                link={destination.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
