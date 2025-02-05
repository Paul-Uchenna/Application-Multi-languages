import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const countryName = searchParams.get("query");

  if (!countryName) {
    return NextResponse.json(
      { error: "The 'countryId' parameter is required." },
      { status: 400 }
    );
  }

  try {
    const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

    if (!UNSPLASH_ACCESS_KEY) {
      console.error("Missing Unsplash key.");
      return NextResponse.json(
        { error: "UNSPLASH_ACCESS_KEY not configured in .env.local." },
        { status: 500 }
      );
    }

    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: `${countryName} tourist attractions`,
        per_page: 8, //! Nombre de photos à récupérer
        client_id: UNSPLASH_ACCESS_KEY,
      },
    });
    if (response.status !== 200) {
      console.error("Unsplash API response error:", response.statusText);
      return NextResponse.json(
        { error: "Failed to retrieve photos." },
        { status: 500 }
      );
    }

    const photos = response.data.results.map((photo: any) => ({
      id: photo.id,
      url: photo.urls.regular,
      alt: photo.alt_description || `Photo of ${countryName}`,
      description:
        photo.description || photo.alt_description || "Place to visit",
      location: photo.location?.name || "",
    }));
    console.log("phote", response.data.results);

    return NextResponse.json(photos);
  } catch (error: any) {
    console.error("Erreur lors de l'appel à l'API Unsplash:", error.message);
    return NextResponse.json(
      { error: "Error when calling the Unsplash API." },
      { status: 500 }
    );
  }
}
