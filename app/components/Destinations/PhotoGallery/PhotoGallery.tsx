import { Country } from "@/src/Types/types";
import Image from "next/image";
import React from "react";

type Photo = {
  id: string;
  url: string;
  alt: string;
  description: string;
  location: string;
};

interface PhotoGalleryProps {
  photoGallery: Photo[];
  countryData: Country;
}

export default function PhotoGallery({
  photoGallery,
  countryData,
}: PhotoGalleryProps) {
  if (!photoGallery || photoGallery.length === 0) {
    return (
      <div className="text-white text-center py-10">
        <p>No photos available for {countryData.name.common}.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container bg-white mx-auto p-5">
        <h2 className="text-2xl font-semibold mb-5">
          Photos of places to visit in
          <span className="text-yellow-500"> {countryData.name.common}</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photoGallery.map((photo) => (
            <div key={photo.id} className="relative group">
              <div className="relative w-full h-60">
                <Image
                  src={photo.url}
                  alt={photo.alt || `Photo de ${countryData.name.common}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  width={640}
                  height={480}
                  quality={80}
                />
                {photo.description && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white text-center p-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-semibold ">{photo.location}</p>
                    <p className="text-xs">{photo.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
