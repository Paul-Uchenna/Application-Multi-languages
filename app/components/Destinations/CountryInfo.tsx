import Image from "next/image";
import { Country } from "@/src/Types/types";
import { formatNumber } from "@/src/formatNumber";
import { useScopedI18n } from "@/locales/client";

export default function CountryInfo({ countryData }: { countryData: Country }) {
  const t = useScopedI18n("destinations.countryId");

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
        <h2 className="text-2xl font-bold mb-3">{t("titleOne")} </h2>
        <div className="font-medium text-md">
          <div className="pb-4 space-y-2 border-b">
            {[
              {
                label: t("countryInfo.capital"),
                value: countryData.capital.join(", "),
              },
              { label: t("countryInfo.region"), value: countryData.region },
              {
                label: t("countryInfo.subregion"),
                value: countryData.subregion,
              },
              {
                label: t("countryInfo.population"),
                value: formatNumber(countryData.population),
              },
              {
                label: t("countryInfo.area"),
                value: `${formatNumber(countryData.area)} km²`,
              },
              {
                label: t("countryInfo.timezones"),
                value: countryData.timezones.join(", "),
              },
            ].map((item, index) => (
              <div key={index} className="flex">
                <p className="w-1/2 font-semibold">{item.label}</p>
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          <div className="py-5 border-b border-gray-300">
            <p className="font-bold mb-3">{t("countryInfo.languages")} </p>
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
            <p className="font-bold mb-3">{t("countryInfo.currencies")}</p>
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
