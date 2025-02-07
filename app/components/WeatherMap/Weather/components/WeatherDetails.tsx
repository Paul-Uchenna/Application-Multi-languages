"use client";

import { Cloud, Droplets, Gauge, Thermometer, Wind } from "lucide-react";
import { WeatherMetric } from "./WeatherMetric";
import type { WeatherData } from "@/src/Types/types";
import { aqiDescription } from "../aqiDescription";
import { aqiLevelColor } from "../aqiLevelColor";
import { useScopedI18n } from "@/locales/client";

interface WeatherDetailsProps {
  data: WeatherData;
}

export default function WeatherDetails({ data }: WeatherDetailsProps) {
  const t = useScopedI18n("destinations.countryId.weather");

  const metrics = [
    {
      icon: Thermometer,
      label: t("feelsLike"),
      value: `${data.feelsLike}°C`,
      iconColor: "text-orange-400",
    },
    {
      icon: Cloud,
      label: t("airQuality"),
      value: data.airQuality?.aqi
        ? `${aqiDescription(data.airQuality.aqi)}`
        : "Data not available",
      iconColor: data.airQuality?.aqi
        ? aqiLevelColor(data.airQuality.aqi)
        : "text-gray-400",
    },
    {
      icon: Droplets,
      label: t("humidity"),
      value: `${data.humidity}%`,
      iconColor: "text-blue-400",
    },
    {
      icon: Wind,
      label: t("windSpeed"),
      value: `${data.windSpeed} km/h`,
      iconColor: "text-green-400",
    },
    {
      icon: Gauge,
      label: t("pressure"),
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
