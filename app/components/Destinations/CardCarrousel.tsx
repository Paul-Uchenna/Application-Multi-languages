"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

interface CardCarrouselProps {
  imgCarrousel: { src: string; title: string; description: string }[];
  currentIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
}

export default function CardCarrousel({
  imgCarrousel,
  currentIndex,
  handleNext,
  handlePrev,
}: CardCarrouselProps) {
  const { src, title, description } = imgCarrousel[currentIndex];

  useEffect(() => {
    gsap.fromTo(
      ".animate-fade-in",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);
  return (
    <div>
      <div className="fixed w-full h-full -z-10">
        <Image src={src} alt={title} fill className="object-cover" priority />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40 text-center md:text-left md:pl-20">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in">{title}</h1>
            <p className="text-2xl mb-10 text-white/70 animate-fade-in">
              {description}
            </p>

            <div className="hidden">
              <button
                onClick={handlePrev}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md flex items-center"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                Prev
              </button>
              <button
                onClick={handleNext}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md flex items-center"
              >
                Next
                <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
