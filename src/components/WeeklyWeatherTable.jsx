import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContextProvider";
import DayCard from "./DayCard";

export const WeeklyWeatherTable = () => {
  const { forecastDays } = useContext(WeatherContext);

  return (
    <div className="weeklyContainer">
      <div className="weeklyTable">
        <h4>10-DAY FORECAST</h4>
        {forecastDays.map((dayInfo, index) => {
          return <DayCard key={index} dayInfo={dayInfo} index={index} />;
        })}
      </div>
    </div>
  );
};
