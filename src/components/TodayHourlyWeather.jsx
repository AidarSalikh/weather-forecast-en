import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WeatherContext } from "../context/WeatherContextProvider";
import HourlyCard from "./HourlyCard";

export const TodayHourlyWeather = () => {
  const { forecastHours, currentHour } = useContext(WeatherContext);

  let settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 10,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carouselContainer">
      <Slider {...settings}>
        {forecastHours
          .filter((el) => el.time_epoch >= currentHour)
          .map((el, index) => {
            return <HourlyCard key={index} el={el} index={index} />;
          })}
      </Slider>
    </div>
  );
};
