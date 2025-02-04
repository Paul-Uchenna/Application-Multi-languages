"use client";

import Footer from "@/app/components/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Destinations from "../components/Destinations/Destinations";
import blogs from "../components/blogs/blogs";
import CallToAction from "../components/CTA_Section/CallToAction";
import Galleries from "../components/Galleries/Galleries";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Destinations />
      <blogs />
      <CallToAction />
      <Galleries />
    </div>
  );
}
