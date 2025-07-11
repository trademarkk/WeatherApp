import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { MainWeatherCardView } from "./components/MainWeatherCardView";
import { DailyForecastView } from "./components/DailyForecastView";

import { useDebounce } from "use-debounce";
export const API_KEY = import.meta.env.VITE_API_KEY;

export const App = () => {
  const [activeDay, setActiveDay] = useState("Today");
  const [inputValue, setInputValue] = useState("");
  const [debouncedSearch] = useDebounce(inputValue, 500);
  const [forecastDays, setForecastDays] = useState("1");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${
              import.meta.env.VITE_OPENCAGE_API_KEY
            }`
          );
          const data = await response.json();

          const components = data.results[0]?.components;

          const city =
            components?.city ||
            components?.town ||
            components?.village ||
            components?.county;

          if (city) {
            setInputValue(city);
          } else {
            console.warn("Город не найден, вот что пришло:", data);
          }
        } catch (error) {
          console.error("Ошибка при геокодировании:", error);
        }
      },
      (error) => {
        console.error("Ошибка получения геолокации:", error);
      }
    );
  }, []);

  return (
    <div className="container max-w-[1440px] px-4 mx-auto py-5 pb-20 flex-col items-center">
      <Header
        activeBtn={activeDay}
        setActiveBtn={setActiveDay}
        setForecastDays={setForecastDays}
      />
      <SearchBar setSearch={setInputValue} search={inputValue} />
      <MainWeatherCardView
        activeDay={activeDay}
        forecastDays={forecastDays}
        debouncedSearch={debouncedSearch}
      />

      {["1", "2"].includes(forecastDays) && (
        <DailyForecastView
          forecastDays={forecastDays}
          search={debouncedSearch}
        />
      )}
    </div>
  );
};
