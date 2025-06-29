import React from "react";
import { Logo } from "./AppLogo";
import { WeatherRange } from "./WeatherRange";
import { ScaleSelector } from "./ScaleSelector";

export const Header = ({ activeBtn, setActiveBtn, setForecastDays }) => {
  return (
    <div className=" flex items-center gap-[200px] mb-[120px] relative ">
      <Logo />
      <WeatherRange
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
        setForecastDays={setForecastDays}
      />
      <ScaleSelector />
    </div>
  );
};
