"use client";

interface WeatherCardProps {
  children: React.ReactNode;
  className?: string;
}

export function WeatherCard({ children, className = "" }: WeatherCardProps) {
  return (
    <div className={`rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
}