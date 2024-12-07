"use client";

import React, { useEffect, useState } from "react";
import { Country } from "@/src/Types/types";

import axios from "axios";
import Loader from "@/app/components/Loader";
import CountryInfo from "@/app/components/Destinations/CountryInfo";
import WeatherSection from "@/app/components/WeatherSection/WeatherSection";
import PhotoGallery from "@/app/components/Destinations/PhotoGallery";

export default function CountryPage({
  params,
}: {
  params: Promise<{ countryId: string }>;
}) {
  const [isLoading, setILoading] = useState(false);
  const [countryData, setCountryData] = useState<Country | null>(null);
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [airQualityData, setAirQualityData] = useState<any | null>(null);

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
      <div className="h-screen flex items-center justify-center bg-black/95">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative py-28 mb-6 bg-black/90">
      <div className="container px-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <CountryInfo countryData={countryData} />
        <WeatherSection
          weatherData={weatherData}
          airQualityData={airQualityData}
        />
      </div>
      <PhotoGallery />
    </div>
  );
}
