"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import Image from "next/image";

const languages = {
  fr: {
    label: "Français",
    flag: "/france.svg",
  },
  en: {
    label: "English",
    flag: "/united-kingdom.svg",
  },
  es: {
    label: "Español",
    flag: "/spain.svg",
  },
  de: {
    label: "Deutsch",
    flag: "/germany.svg",
  },
  jp: {
    label: "日本語",
    flag: "/japan-svgrepo-com.svg",
  },
};

export default function LanguageSwitcher() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <section>
      <div className="relative group">
        <button className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg hover:bg-white transition-all">
          <Image
            src={
              languages[locale as keyof typeof languages]?.flag ||
              "/default-flag.svg"
            }
            width={16}
            height={16}
            alt="Flag"
          />
          <span className="font-medium text-gray-800 text-sm">
            {languages[locale as keyof typeof languages]?.label}
          </span>
        </button>

        <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top scale-95 group-hover:scale-100">
          {Object.entries(languages).map(([code, { label, flag }]) => (
            <button
              key={code}
              onClick={() =>
                changeLocale(code as "en" | "fr" | "es" | "de" | "jp")
              }
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                locale === code
                  ? "text-yellow-500/80 font-semibold"
                  : "text-gray-700"
              }`}
            >
              <Image src={flag as string} width={20} height={20} alt="flag" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
