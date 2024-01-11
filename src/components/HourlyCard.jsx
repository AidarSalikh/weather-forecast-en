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

export default function HourlyCard({ index, el }) {
  const HOUR_FORMATTER = new Intl.DateTimeFormat("en-US", { hour: "numeric" });
  const hours = el.time_epoch * 1000;
  const currentIcon = ICON_MAP.get(el.condition.code);

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
    <div key={index} className="card">
      <div className="cardElements">
        <p>{index === 0 ? "NOW" : HOUR_FORMATTER.format(hours)}</p>
        <p>{Math.round(el.temp_c)}&deg;</p>
        <img src={iconsObj[currentIcon]} alt="#" />
      </div>
    </div>
  );
}
