"use client";

import React from "react";
import { WeatherData } from "@/src/Types/types";
import { WeatherCard } from "./components/WeatherCard";

import WeatherBackground from "./components/WeatherBackground";
import WeatherDetails from "./components/WeatherDetails";

export default function Weather({
  temperature,
  humidity,
  pressure,
  windSpeed,
  airQuality,
  condition,
  feelsLike,
}: WeatherData) {
  const mockWeatherData = {
    temperature: temperature,
    feelsLike: feelsLike,
    humidity: humidity,
    windSpeed: windSpeed,
    pressure: pressure,
    airQuality: airQuality,
    condition: condition,
  };

  return (
    <WeatherCard className="w-full max-w-4xl mx-auto overflow-hidden relative min-h-[300px]">
      <WeatherBackground condition={mockWeatherData.condition} />

      <div className="relative z-10 p-6">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-white mb-2">
            {mockWeatherData.temperature}°C
          </h1>
          <p className="text-xl text-white/80 capitalize">
            {mockWeatherData.condition}
          </p>
        </div>

        <WeatherDetails data={mockWeatherData} />
      </div>
    </WeatherCard>
  );
}
