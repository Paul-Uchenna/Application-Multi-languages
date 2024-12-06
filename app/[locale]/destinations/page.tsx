"use client";

import React, { useEffect, useRef, useState } from "react";
import { dataCarrousel } from "@/app/components/Destinations/DataCarrousel";

import Carousel from "@/app/components/Destinations/CardCarrousel";
import SearchDestination from "@/app/components/SearchDestination/SearchDestination";

export default function DestinationsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataCarrousel().length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataCarrousel().length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative h-screen">
        <Carousel
          imgCarrousel={dataCarrousel()}
          currentIndex={currentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>

      <SearchDestination />

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">Destinations</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <h1 className="text-xl font-semibold">Destination 1</h1>
            <h1 className="text-xl font-semibold">Destination 2</h1>
            <h1 className="text-xl font-semibold">Destination 3</h1>
            <h1 className="text-xl font-semibold">Destination 4</h1>
            <h1 className="text-xl font-semibold">Destination 5</h1>
            <h1 className="text-xl font-semibold">Destination 6</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
