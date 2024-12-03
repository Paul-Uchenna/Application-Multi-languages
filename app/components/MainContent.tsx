"use client";

import React from "react";
import Image from "next/image";

import { useI18n } from "@/locales/client";

import Destinations from "./Destinations/Destinations";
import Features from "./Features/Features";
import Galleries from "./Galleries/Galleries";

export default function MainContent() {
  const t = useI18n();

  return (
    <div>
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
            <div className="container mx-auto px-4 pt-4 flex gap-1 text-2xl font-extrabold">
              <h1 className=" text-emerald-500">LOG</h1>
              <span>HORIZON</span>
            </div>
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-6xl font-bold mb-6 animate-fade-in">
                  {t("hero.title")}
                </h1>
                <p className="text-2xl mb-10 animation-fade-in">
                  {t("hero.subtitle")}
                </p>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg text-md transform hover:scale-105 transition-all animate-fade-in-delay-2">
                  {t("hero.cta")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Destinations />
      <Features />

      <section className="py-20 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-xl mb-8">{t("cta.subtitle")}</p>
          <button className="bg-white text-emerald-500 px-8 py-3 rounded-lg text-lg hover:bg-gray-100">
            {t("cta.button")}
          </button>
        </div>
      </section>

      <Galleries />
    </div>
  );
}
