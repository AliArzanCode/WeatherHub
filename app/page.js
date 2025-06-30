"use client";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherFooter from "@/components/WeatherFooter";

// Utility to get background image based on condition
const getBackgroundForCondition = (condition) => {
  switch (condition?.toLowerCase()) {
    case "clear":
      return "/wp4555549.jpg";
    case "clouds":
      return "/cloudy.jpg";
    case "rain":
      return "/raining.jpg";
    case "snow":
      return "/snowy.jpg";
    case "thunderstorm":
      return "/storm.jpg";
    case "mist":
    case "fog":
    case "haze":
      return "/foggy.jpg";
    default:
      return "/overcast.jpg";
  }
};

export default function Home() {
  const [weather, setWeather] = useState(null);

  const backgroundImage = getBackgroundForCondition(
    weather?.weather?.[0]?.main
  );

  return (
    <div
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
       
      }}
   className="min-h-screen w-screen overflow-x-hidden relative"

    >
      <WeatherFooter weather={weather} />
      <SearchBar setWeather={setWeather} weather={weather} />
    </div>
  );
}
