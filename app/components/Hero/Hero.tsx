import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useI18n } from "@/locales/client";

import Image from "next/image";

export default function Hero() {
  const t = useI18n();

  useEffect(() => {
    gsap.fromTo(
      ".animate-fade-in",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <section className="min-h-screen">
      <div className="relative h-screen">
        <div className="fixed w-full h-full -z-10">
          <Image
            src="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Travel background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-6xl font-bold mb-6 animate-fade-in">
                {t("home.hero.title")}
              </h1>
              <p className="text-2xl mb-10 animate-fade-in">
                {t("home.hero.subtitle")}
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md text-md font-semibold transform hover:scale-105 transition-all animate-fade-in">
                {t("home.hero.cta")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
