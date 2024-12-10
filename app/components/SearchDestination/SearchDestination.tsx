"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { searchCountries } from "@/app/api/seachCountries";
import Image from "next/image";

interface CountryOption {
  value: string;
  label: React.ReactNode;
  data: any;
}

export default function SearchDestination() {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  const fetchCountries = async (query: string) => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await searchCountries(query);
      const formattedCountries = response.map((country: any) => ({
        value: country.name.common || "",
        label: (
          <div className="flex items-center">
            <Image
              src={country.flags.png || ""}
              alt={country.name.common || ""}
              className="w-6 h-4 mr-2"
            />
            {country.name.common}
          </div>
        ),
        data: country,
      }));
      setCountries(formattedCountries);
    } catch (error) {
      console.error("Error searching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption);

    if (selectedOption) {
      route.push(`/destinations/${selectedOption.value}`);
    }
  };

  return (
    <div>
      <section className="w-2/4 mx-auto absolute top-full left-0 right-0 bg-black/95 transform -translate-y-1/2 border p-5 rounded-md">
        <div className="flex items-center space-x-5 justify-center p-5">
          <button
            type="button"
            className="transform transition-all hover:scale-105 hover:-translate-y-1 duration-500"
          >
            <FontAwesomeIcon icon={faSearchLocation} size="2x" color="yellow" />
          </button>

          <Select
            options={countries}
            onInputChange={(value) => {
              if (typeof value === "string") fetchCountries(value.trim());
            }}
            isLoading={loading}
            onChange={handleChange}
            placeholder="Where do you want to go?"
            className="w-full text-black"
            styles={{
              control: (base) => ({
                ...base,
                padding: "5px",
                borderRadius: "8px",
                borderColor: "yellow",
                "&:hover": {
                  borderColor: "yellow",
                },
              }),
            }}
          />
        </div>
      </section>
    </div>
  );
}
