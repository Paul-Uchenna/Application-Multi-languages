"use client";

import { Cloud, Droplets, Gauge, Thermometer, Wind } from "lucide-react";
import { WeatherMetric } from "./WeatherMetric";
import type { WeatherData } from "@/src/Types/types";
import { aqiDescription } from "../aqiDescription";
import { aqiLevelColor } from "../aqiLevelColor";

interface WeatherDetailsProps {
  data: WeatherData;
}

export default function WeatherDetails({ data }: WeatherDetailsProps) {
  const metrics = [
    {
      icon: Thermometer,
      label: "Feels Like",
      value: `${data.feelsLike}°C`,
      iconColor: "text-orange-400",
    },
    {
      icon: Cloud,
      label: "Air Quality",
      value: data.airQuality?.aqi
        ? `${aqiDescription(data.airQuality.aqi)}`
        : "Data not available",
      iconColor: data.airQuality?.aqi
        ? aqiLevelColor(data.airQuality.aqi)
        : "text-gray-400",
    },
    {
      icon: Droplets,
      label: "Humidity",
      value: `${data.humidity}%`,
      iconColor: "text-blue-400",
    },
    {
      icon: Wind,
      label: "Wind Speed",
      value: `${data.windSpeed} km/h`,
      iconColor: "text-green-400",
    },
    {
      icon: Gauge,
      label: "Pressure",
      value: `${data.pressure} hPa`,
      iconColor: "text-purple-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {metrics.map((metric, index) => (
        <WeatherMetric key={index} {...metric} />
      ))}
    </div>
  );
}
