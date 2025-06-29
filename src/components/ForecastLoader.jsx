import React from "react";
import "./ForecastLoader.css";
export const ForecastLoader = () => {
  return (
    <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  );
};

export function getWeatherImgage(text) {
  switch (text) {
    case `Partly Cloudy`:
      return "forecast/clouds.png";
    case `Moderate rain`:
      return "forecast/rain.png";
    case `Clear`:
      return "forecast/cloudsAndSun.png";
    case `Patchy rain nearby`:
      return "forecast/lightningAndRain.png";
    case `Light rain shower`:
      return "forecast/lightning.png";
    default:
      return "forecast/clouds.png";
  }
}
