import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const countryName = searchParams.get("query");

  if (!countryName) {
    return NextResponse.json(
      { error: "Le paramètre 'countryId' est requis." },
      { status: 400 }
    );
  }

  try {
    const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

    if (!UNSPLASH_ACCESS_KEY) {
      console.error("Clé Unsplash manquante.");
      return NextResponse.json(
        { error: "Clé UNSPLASH_ACCESS_KEY non configurée dans .env.local." },
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
      console.error("Erreur de réponse API Unsplash:", response.statusText);
      return NextResponse.json(
        { error: "Échec lors de la récupération des photos." },
        { status: 500 }
      );
    }

    const photos = response.data.results.map((photo: any) => ({
      id: photo.id,
      url: photo.urls.regular,
      alt: photo.alt_description || `Photo de ${countryName}`,
      description:
        photo.description || photo.alt_description || "Place to visit",
      location: photo.location?.name || "",
    }));
    console.log("phote", response.data.results);

    return NextResponse.json(photos);
  } catch (error: any) {
    console.error("Erreur lors de l'appel à l'API Unsplash:", error.message);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des photos." },
      { status: 500 }
    );
  }
}
