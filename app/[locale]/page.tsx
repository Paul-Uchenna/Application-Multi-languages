"use client";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Destinations from "../components/Destinations/Destinations";
import CallToAction from "../components/CTA_Section/CallToAction";
import Galleries from "../components/Galleries/Galleries";
import Blog from "../components/Blog/Blog";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Destinations />
      <Blog />
      <CallToAction />
      <Galleries />
    </div>
  );
}
