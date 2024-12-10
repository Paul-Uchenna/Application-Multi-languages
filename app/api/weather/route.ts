import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const lat = url.searchParams.get("lat");
  const lng = url.searchParams.get("lng");

  if (!lat || !lng) {
    return NextResponse.json(
      { error: "Latitude and longitude are required" },
      { status: 400 }
    );
  }
  // console.log("Fetching weather data for lat:", lat, "lng:", lng);

  try {
    const weatherRes = await axios.get(
      `${process.env.OPENWEATHER_WEATHER_URL}&lat=${lat}&lon=${lng}`
    );
    return NextResponse.json(weatherRes.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 }
    );
  }
}
