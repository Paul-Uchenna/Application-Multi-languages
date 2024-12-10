import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/components/WeatherMap/Map/Map"), {
  ssr: false,
});

const Weather = dynamic(
  () => import("@/app/components/WeatherMap/Weather/Weather"),
  {
    ssr: false,
  }
);

const Loader = dynamic(() => import("@/app/components/Loader"), {
  ssr: false,
});

export default function WeatherMap({
  weatherData,
  airQualityData,
}: {
  weatherData: any | null;
  airQualityData: any | null;
}) {
  return (
    <section className="bg-white flex flex-col gap-5 border rounded-md p-5">
      <div>
        <h2 className="text-3xl md:text-3xl font-bold mb-5">
          Geographic location
        </h2>
        <Map coordinates={weatherData?.coord} />
      </div>

      <div>
        {!weatherData ? (
          <div className="flex flex-col items-center justify-center h-full p-2 border rounded-md">
            <Loader />
            <p className="text-red-500 font-semibold mt-4 text-lg">
              Unable to load weather data. Please try again later.
            </p>
          </div>
        ) : (
          <Weather
            temperature={weatherData.main.temp}
            humidity={weatherData.main.humidity}
            pressure={weatherData.main.pressure}
            windSpeed={weatherData.wind.speed}
            airQuality={airQualityData}
            feelsLike={weatherData.main.feels_like}
            condition={weatherData.weather[0].main}
          />
        )}
      </div>
    </section>
  );
}
