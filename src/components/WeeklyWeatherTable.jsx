import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContextProvider";
import DayCard from "./DayCard";

export const WeeklyWeatherTable = () => {
  const { forecastDays } = useContext(WeatherContext);

  return (
    <section className="weeklyContainer">
      <div className="weeklyTable">
        <h4>3-DAY FORECAST</h4>
        {forecastDays.map((dayInfo, index) => {
          return <DayCard key={index} dayInfo={dayInfo} index={index} />;
        })}
      </div>
    </section>
  );
};
