import React, { useContext } from "react";
import { CurrentWeatherTop } from "../components/CurrentWeatherTop";
import { TodayHourlyWeather } from "../components/TodayHourlyWeather";
import { WeeklyWeatherTable } from "../components/WeeklyWeatherTable";
import { SearchCity } from "../components/SearchCity";
import { BG_MAP } from "../utils/backgroundMap";
import { WeatherContext } from "../context/WeatherContextProvider";
import rainy from "../assets/images/rainy.jpeg";
import thunder from "../assets/images/thunder.jpeg";
import sun from "../assets/images/sun.jpeg";
import cloud from "../assets/images/cloud.jpeg";
import snow from "../assets/images/snow.jpg";
import cloudSun from "../assets/images/cloudSun.jpeg";

export default function Main() {
  const { condition } = useContext(WeatherContext);

  const imgObject = {
    rainy,
    thunder,
    sun,
    cloud,
    snow,
    cloudSun,
  };

  const currentIcon = BG_MAP.get(condition.code);

  const backgroundStyle = {
    backgroundImage: `url(${imgObject[currentIcon]})`,
  };
  console.log(condition);
  return (
    <main style={backgroundStyle}>
      <SearchCity />
      <CurrentWeatherTop />
      <TodayHourlyWeather />
      <WeeklyWeatherTable />
    </main>
  );
}
