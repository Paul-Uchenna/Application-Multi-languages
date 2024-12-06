"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Country } from "@/src/Types/types";
import Loader from "@/app/components/Loader";
import dynamic from "next/dynamic";

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <p className="flex">
    <span className="w-1/2 font-bold">{label}:</span>
    {value}
  </p>
);

export default function CountryPage({
  params,
}: {
  params: Promise<{ countryId: string }>;
}) {
  const Map = dynamic(() => import("@/app/components/Map/Map"), { ssr: false });
  const [countryData, setCountryData] = useState<Country | null>(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const { countryId } = await params;
        const res = await axios.get(`/api/${countryId}`);
        const data = res.data;
        setCountryData(data);
        console.log("Fetched country data:", data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, [params]);

  if (!countryData) {
    return (
      <div className="h-screen flex items-center justify-center bg-black/95">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative py-28 mb-6 bg-black/90">
      <div className="container px-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <section className="border rounded-lg p-6 shadow-md bg-white">
          <div className="flex items-center gap-5 mb-4">
            <Image
              src={countryData.flag}
              alt={`${countryData.name.common} flag`}
              width={60}
              height={40}
              className="rounded-md shadow-sm"
              unoptimized
            />
            <div>
              <h1 className="text-3xl font-extrabold text-gray-800">
                {countryData.name.common}
              </h1>
              <p className="text-sm text-gray-500 italic">
                {countryData.name.official}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">General information</h2>
            <div className="font-semibold">
              <div className="pb-4 space-y-2 border-b borber-md">
                {[
                  { label: "Capital", value: countryData.capital.join(", ") },
                  { label: "Region", value: countryData.region },
                  { label: "Subregion", value: countryData.subregion },
                  {
                    label: "Population",
                    value: countryData.population.toLocaleString(),
                  },
                  {
                    label: "Area",
                    value: `${countryData.area.toLocaleString()} km²`,
                  },
                  {
                    label: "Timezones",
                    value: countryData.timezones.join(", "),
                  },
                ].map((item, index) => (
                  <div key={index} className="flex borber-b">
                    <p className="w-1/2">{item.label}</p>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="py-5 border-b borber-md">
                <p className="font-bold mb-3">Languages</p>
                <span className="bg-gray-200 rounded-md px-3 py-1">
                  {Object.values(countryData.languages).join(", ")}
                </span>
              </div>

              <div className="pt-4 pb-10">
                <p className="font-bold mb-3">Currencies</p>
                <span>
                  {Object.values(countryData.currencies)
                    .map((c) => `${c.name} (${c.symbol})`)
                    .join(", ")}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-white border rounded-md p-6">
          <div>
            <h2 className="text-3xl md:text-3xl font-bold mb-5">
              Geographic location
            </h2>
            <Map coordinates={countryData.latlng} />
          </div>
          <div>Metheo</div>
        </section>
      </div>

      <section className="px-5">
        <div className="container bg-white rounded-md mx-auto p-4">
          <h1 className="text-4xl font-bold mb-10">Photo Gallery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <h1 className="text-xl font-semibold">Destination 1</h1>
            <h1 className="text-xl font-semibold">Destination 2</h1>
            <h1 className="text-xl font-semibold">Destination 3</h1>
            <h1 className="text-xl font-semibold">Destination 4</h1>
            <h1 className="text-xl font-semibold">Destination 5</h1>
            <h1 className="text-xl font-semibold">Destination 6</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
