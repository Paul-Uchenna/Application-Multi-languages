"use client";

import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import axios from "axios";
import { UnsplashPhotos } from "@/src/Types/types";
import { useScopedI18n } from "@/locales/client";

export default function GalleryPage() {
  const t = useScopedI18n("galleries");

  const [photos, setPhotos] = useState<UnsplashPhotos[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, startTransition] = useTransition();

  const breakpoints = {
    default: 4, // 4 columns for large screens
    1100: 3, // 3 columns for medium screens
    700: 2, // 2 columns for small screens
    500: 1, // 1 column for very small screens
  };

  const loadPhotos = async (pageNumber: number) => {
    try {
      const res = await axios.get(`/api/unsplashPhotos?page=${pageNumber}`);
      const data = res.data;

      if (pageNumber === 1) {
        setPhotos(data);
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    startTransition(() => {
      loadPhotos(page);
    });
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="w-full min-h-screen text-white bg-gray-600">
      <div className="max-w-[1000px] mx-auto px-4 md:px-0 py-20">
        <div className="w-full max-w-3xl mx-auto my-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-3">
            {t("title")}
          </h2>
          <p className="text-sm md:text-base text-gray-400">{t("subtitle")}</p>
        </div>

        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-3"
          columnClassName="masonry-column"
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative mb-4 rounded-md overflow-hidden"
            >
              <Image
                src={photo.url}
                alt={photo.description}
                width={5000}
                height={5000}
                priority
                objectFit="cover"
                className="w-full h-auto"
              />
              <span className="absolute left-2 bottom-2 bg-gray-300 bg-opacity-75 text-black text-xs px-2 rounded-md">
                {photo.location}
              </span>
            </div>
          ))}
        </Masonry>

        <div className="flex justify-start mt-8">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
          >
            {isLoading ? "Loading..." : t("loadMore")}
          </button>
        </div>
      </div>
    </section>
  );
}
