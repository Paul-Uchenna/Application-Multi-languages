"use client";

import React from "react";
import { useI18n } from "@/locales/client";

import Destinations from "./Destinations/Destinations";
import Features from "./Features/Features";
import Galleries from "./Galleries/Galleries";
import Hero from "./Hero/Hero";
import CallToAction from "./CTA_Section/CallToAction";
import Navbar from "./Navbar/Navbar";

export default function MainContent() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Features />
      <CallToAction />
      <Galleries />
    </div>
  );
}
