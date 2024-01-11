import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContextProvider";

export const CurrentWeatherTop = () => {
  const { currentMaxTemp, currentMinTemp, currentTemp, condition, city } =
    useContext(WeatherContext);
  console.log("currentWeather", currentTemp);
  return (
    <section className="weatherTop">
      <h3>{city}</h3>
      <h1>{Math.round(currentTemp)}</h1>
      <h5>{condition.text}</h5>
      <div className="minMaxTemp">
        <h5>H: {Math.round(currentMaxTemp)}&deg;</h5>
        <h5>L: {Math.round(currentMinTemp)}&deg;</h5>
      </div>
    </section>
  );
};
