"use client";

import React, { useEffect, useState } from "react";
import { Country } from "@/src/Types/types";

import axios from "axios";
import Loader from "@/app/components/Loader";
import CountryInfo from "@/app/components/Destinations/CountryInfo";
import WeatherMap from "@/app/components/WeatherMap/WeatherMap";
import PhotoGallery from "@/app/components/Destinations/PhotoGallery/PhotoGallery";

export default function CountryPage({
  params,
}: {
  params: Promise<{ countryId: string }>;
}) {
  const [isLoading, setILoading] = useState(false);
  const [countryData, setCountryData] = useState<Country | null>(null);
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [airQualityData, setAirQualityData] = useState<any | null>(null);
  const [photoGallery, setPhotoGallery] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setILoading(true);
      try {
        //! Fetch country data
        const { countryId } = await params;
        const res = await axios.get(`/api/${countryId}`);
        const data = res.data;
        setCountryData(data);

        //! Fetch weather and air quality data in parallel
        const [lat, lng] = data.latlng;
        const [weatherRes, airQualityRes] = await Promise.all([
          axios.get(`/api/weather?lat=${lat}&lng=${lng}`),
          axios.get(`/api/air_quality?lat=${lat}&lng=${lng}`),
        ]);
        setWeatherData(weatherRes.data);
        setAirQualityData(airQualityRes.data.list[0]?.main || null);

        //! Fetch photos from Unsplash API
        console.log("Country ID:", countryId);
        const resPhoto = await axios.get(`/api/unsplash`, {
          params: { query: countryId },
        });
        console.log("resPhoto", resPhoto);

        setPhotoGallery(resPhoto.data);
        console.log("resPhoto Data", resPhoto.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setILoading(false);
      }
    };
    fetchData();
  }, [params]);

  if (isLoading || !countryData) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black/95 text-white space-y-3">
        <Loader />
        <p className="text-lg font-medium animate-pulse">
          Loading data, please wait...
        </p>
      </div>
    );
  }

  return (
    <div className="relative pt-20 mb-6 bg-black/90">
      <div className="container px-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <CountryInfo countryData={countryData} />
        <WeatherMap weatherData={weatherData} airQualityData={airQualityData} />
      </div>
      <PhotoGallery photoGallery={photoGallery} countryData={countryData} />
    </div>
  );
}
