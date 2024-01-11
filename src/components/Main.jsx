import React from "react";
import { CurrentWeatherTop } from "../components/CurrentWeatherTop";
import { TodayHourlyWeather } from "../components/TodayHourlyWeather";
import { WeeklyWeatherTable } from "../components/WeeklyWeatherTable";
import { SearchCity } from "../components/SearchCity";
import rainy from "../assets/images/rainy.jpeg";
import thunder from "../assets/images/thunder.jpeg";
import unknown1 from "../assets/images/Unknown-1.jpeg";
import unknown2 from "../assets/images/Unknown-2.jpeg";
import unknown3 from "../assets/images/Unknown-3.jpeg";
import unknown4 from "../assets/images/Unknown-4.jpeg";
import unknown5 from "../assets/images/Unknown-5.jpeg";

export default function Main() {
  const backgroundStyle = {
    backgroundImage: `url(${rainy})`,
  };

  return (
    <main style={backgroundStyle}>
      <SearchCity />
      <CurrentWeatherTop />
      <TodayHourlyWeather />
      <WeeklyWeatherTable />
    </main>
  );
}
