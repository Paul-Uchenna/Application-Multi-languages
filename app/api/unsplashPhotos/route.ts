import axios from "axios";
import { pages } from "next/dist/build/templates/app-page";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
    if (!UNSPLASH_ACCESS_KEY) {
      console.error("Clé Unsplash manquante.");
      return NextResponse.json(
        { error: "Clé UNSPLASH_ACCESS_KEY non configurée dans .env.local." },
        { status: 500 }
      );
    }

    const url = new URL(request.url);
    const page = url.searchParams.get("page") || "1";

    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: "vacation", per_page: 30, page },
      headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
    });

    if (response.status !== 200) {
      console.error("Unsplash API response error:", response.statusText);
      return NextResponse.json(
        { error: "Failed to retrieve photos." },
        { status: 500 }
      );
    }
    // console.log("Photos:", response.data.results);

    const photos = response.data.results
      .filter((photo: any) => photo.user.location)
      .map((photo: any) => ({
        id: photo.id,
        url: photo.urls.regular,
        description: photo.alt_description || "No description",
        location: photo.user.location,
      }));

    return NextResponse.json(photos);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Error fetching Phots" },
      { status: 500 }
    );
  }
}
