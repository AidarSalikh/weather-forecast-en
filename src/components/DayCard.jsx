import React from "react";
import { ICON_MAP } from "../utils/iconMap";
import cloudBolt from "../assets/icons/cloud-bolt.png";
import cloudShowersHeavy from "../assets/icons/cloud-showers-heavy.png";
import cloudSun from "../assets/icons/cloud-sun.png";
import cloud from "../assets/icons/cloud.png";
import lightRain from "../assets/icons/light-rain.png";
import smog from "../assets/icons/smog.png";
import snow from "../assets/icons/snow.png";
import sun from "../assets/icons/sun.png";

export default function DayCard({ index, dayInfo }) {
  const DAY_FORMATTER = new Intl.DateTimeFormat("en-US", { weekday: "short" });

  const dayDate = dayInfo.date_epoch * 1000;
  const day = dayInfo.day;
  const conditionIcon = ICON_MAP.get(day.condition.code);

  const iconsObj = {
    cloudBolt,
    cloudShowersHeavy,
    cloud,
    cloudSun,
    lightRain,
    smog,
    sun,
    snow,
  };

  return (
    <article key={index} className="dayForecast">
      <p>{index === 0 ? "Today" : DAY_FORMATTER.format(dayDate)}</p>
      <img src={iconsObj[conditionIcon]} alt="#" />
      <p>{Math.round(day.mintemp_c)}</p>
      <p>{Math.round(day.maxtemp_c)}</p>
    </article>
  );
}
