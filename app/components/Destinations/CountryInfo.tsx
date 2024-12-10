import Image from "next/image";
import { Country } from "@/src/Types/types";
import { formatNumber } from "@/src/formatNumber";

export default function CountryInfo({ countryData }: { countryData: Country }) {
  return (
    <section className="border rounded-md p-5 shadow-md bg-white">
      <div className="flex gap-5 mb-4">
        <Image
          src={countryData.flag}
          alt={`${countryData.name.common} flag`}
          width={90}
          height={60}
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
        <div className="font-medium text-md">
          <div className="pb-4 space-y-2 border-b">
            {[
              { label: "Capital", value: countryData.capital.join(", ") },
              { label: "Region", value: countryData.region },
              { label: "Subregion", value: countryData.subregion },
              {
                label: "Population",
                value: formatNumber(countryData.population),
              },
              { label: "Area", value: `${formatNumber(countryData.area)} km²` },
              { label: "Timezones", value: countryData.timezones.join(", ") },
            ].map((item, index) => (
              <div key={index} className="flex">
                <p className="w-1/2 font-semibold">{item.label}</p>
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          <div className="py-5 border-b border-gray-300">
            <p className="font-bold mb-3">Languages</p>
            <div className="flex flex-wrap gap-2">
              {Object.values(countryData.languages).map((language, i) => (
                <span
                  key={i}
                  className="bg-gray-200 rounded-md px-3 py-1 text-sm font-medium"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4">
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
  );
}
