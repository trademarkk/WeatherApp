import React, { memo } from "react";
import { Navigation } from "swiper/modules";
import { HourForecast } from "./HourForecast";
import { useQuery } from "@tanstack/react-query";
import { fetchForecast } from "./api";
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "..//assets/leftArrow.svg";
import rightArrow from "..//assets/rightArrow.svg";
import "swiper/css";
import { ForecastLoader } from "./ForecastLoader";
import { useScale } from "./ScaleContext";

export const DailyForecastView = memo(({ forecastDays, search }) => {
  const { scale } = useScale();
  const { data, isLoading } = useQuery({
    queryKey: ["forecast", search, forecastDays],
    queryFn: ({ queryKey }) => {
      const [_key, searchValue, days] = queryKey;
      return fetchForecast({ days, searchValue });
    },
    staleTime: 1000 * 60 * 5,
    retry: 0,
  });
  console.log(forecastDays);

  if (isLoading) {
    return (
      <div className="flex justify-between gap-2 h-[150px] place-items-center">
        {Array.from({ length: 10 }).map((_, index) => (
          <ForecastLoader key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={25}
        slidesPerView={8}
        className="mb-10"
      >
        {forecastDays === "1"
          ? data?.forecast?.forecastday[0].hour?.map((hour) => (
              <SwiperSlide key={hour?.time}>
                <HourForecast data={hour} isLoading={isLoading} scale={scale} />
              </SwiperSlide>
            ))
          : data?.forecast?.forecastday[1].hour.map((hour) => (
              <SwiperSlide key={hour.time}>
                <HourForecast data={hour} isLoading={isLoading} scale={scale} />
              </SwiperSlide>
            ))}
      </Swiper>

      <button className="swiper-button-prev absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer ">
        <img src={leftArrow} alt="swipe left" />
      </button>
      <button className="swiper-button-next absolute right-[-50px] top-1/2 z-10 transform -translate-y-1/2 cursor-pointer">
        <img src={rightArrow} alt="swipe right" />
      </button>
    </div>
  );
});
