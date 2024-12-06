"use client";

import Footer from "@/app/components/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Destinations from "../components/Destinations/Destinations";
import Features from "../components/Features/Features";
import CallToAction from "../components/CTA_Section/CallToAction";
import Galleries from "../components/Galleries/Galleries";

export default function Home() {
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
