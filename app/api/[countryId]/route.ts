import { NextResponse } from "next/server";
import axios from "axios";
import { Country } from "@/src/Types/types";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ countryId: string }> }
) {
  const { countryId } = await params;

  try {
    //! Appel à l'API externe avec le code du pays (countryId)
    const res = await axios.get(
      `https://restcountries.com/v3.1/name/${countryId}?fullText=true`
    );
    if (!res.data || res.data.length === 0) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }

    const country = res.data[0];

    //! Formatage des données pour Leaflet
    const formattedCountry: Country = {
      name: {
        common: country.name.common,
        official: country.name.official,
      },
      flag: country.flags.png,
      capital: country.capital || [],
      region: country.region,
      subregion: country.subregion,
      population: country.population,
      area: country.area,
      currencies: country.currencies,
      languages: country.languages,
      latlng: country.latlng || [], //! Coordonnées principales
      capitalInfo: {
        latlng: country.capitalInfo?.latlng || [], //! Coordonnées de la capitale
      },
      maps: {
        googleMaps: country.maps?.googleMaps || "",
        openStreetMaps: country.maps?.openStreetMaps || "",
      },
      borders: country.borders || [],
      independent: country.independent,
      unMember: country.unMember,
      timezones: country.timezones || [],
    };

    // console.log(formattedCountry);

    return NextResponse.json(formattedCountry);
  } catch (error: any) {
    console.error("Error fetching country data:", error);

    return NextResponse.json(
      { error: error.message || "Failed to fetch country data" },
      { status: 500 }
    );
  }
}
