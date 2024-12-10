"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface WeatherBackgroundProps {
  condition: string;
}

export default function WeatherBackground({
  condition,
}: WeatherBackgroundProps) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const getWeatherImage = () => {
      switch (condition.toLowerCase()) {
        case "clear":
          return "https://images.unsplash.com/photo-1598717123623-994ab270a08e?auto=format&fit=crop&w=1920&q=80";
        case "snow":
          return "https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&w=1920&q=80";
        case "rain":
          return "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=80";
        case "clouds":
          return "https://images.unsplash.com/photo-1499956827185-0d63ee78a910?auto=format&fit=crop&w=1920&q=80";
        case "thunderstorm":
          return "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1920&q=80";
        case "fog":
          return "https://images.unsplash.com/photo-1487621167305-5d248087c724?auto=format&fit=crop&w=1920&q=80";
        // case "haze":
        //   return "https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?auto=format&fit=crop&w=1920&q=80";
        case "mist":
          return "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?auto=format&fit=crop&w=1920&q=80";
        case "sand":
          return "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1920&q=80";

        case "dust":
          return "https://unsplash.com/fr/photos/personne-prenant-une-photo-dun-feu-de-foret--TfZaT6gw8M";
        case "ash":
          return "https://unsplash.com/fr/photos/une-photo-en-noir-et-blanc-dun-tas-de-bois-9olGg6iAlis";

        default:
          return "https://images.unsplash.com/photo-1598717123623-994ab270a08e?auto=format&fit=crop&w=1920&q=80";
      }
    };

    setBackgroundImage(getWeatherImage());
  }, [condition]);

  return (
    <div className="absolute inset-0 z-0">
      <div
        className="w-full h-full bg-cover bg-center rounded-lg transition-all duration-500"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-lg" />
      </div>
    </div>
  );
}
