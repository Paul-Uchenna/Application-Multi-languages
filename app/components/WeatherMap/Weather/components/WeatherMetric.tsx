"use client";

import { LucideIcon } from "lucide-react";

interface WeatherMetricProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  iconColor: string;
}

export function WeatherMetric({
  icon: Icon,
  label,
  value,
  iconColor,
}: WeatherMetricProps) {
  return (
    <div className="p-4 bg-black/20 backdrop-blur-md rounded-lg">
      <div className="flex items-center gap-3">
        <Icon className={`h-8 w-8 ${iconColor}`} />
        <div>
          <p className="text-sm font-medium text-white/60">{label}</p>
          <p className="text-1xl font-bold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}
