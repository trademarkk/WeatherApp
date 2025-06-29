import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { ForecastLoader, getWeatherImgage } from "./ForecastLoader";

export const TwoWeekForecastDayCard = ({ data, scale }) => {
  const date = new Date(data?.date);

  const avgTemp = scale === "C" ? data?.day?.avgtemp_c : data?.day?.avgtemp_f;
  const maxTemp = scale === "C" ? data?.day?.maxtemp_c : data?.day?.maxtemp_f;

  const unit = scale === "C" ? "°C" : "°F";

  const formattedDate = format(date, "d MMMM yyyy", { locale: enUS });

  const weatherImage = getWeatherImgage(data?.day?.condition?.text);
  return (
    <div
      className="weather-card relative w-full h-[200px] rounded-3xl pt-4 pl-6 pr-4 flex flex-col items-center  before:absolute before:w-full before:h-[175px] before:left-0 before:bottom-[-22px] before:z-[2] before:rounded-3xl "
      style={{
        background:
          "linear-gradient(180deg, #b32dd4 0%, rgba(217, 217, 217, 0) 100%)",
      }}
    >
      <span className="text-white font-medium text-[21px]">
        {formattedDate}
      </span>
      <img src={weatherImage} className=" w-32 h-20 z-[3]" alt="rain" />
      <span className="font-light z-[3] text-white text-[21px]">
        {!isNaN(avgTemp) ? `Avg.temp: ${Math.floor(avgTemp)} ${unit}` : "--"}
      </span>
      <span className="font-light z-[3] text-white text-[21px]">
        {!isNaN(maxTemp) ? `Max.temp: ${Math.floor(maxTemp)} ${unit}` : "--"}
      </span>
      <span className="font-light z-[3] text-white text-[21px]">
        {!isNaN(data?.day?.daily_chance_of_rain)
          ? `Chance of rain: ${Math.floor(data?.day?.daily_chance_of_rain)} %`
          : "--"}
      </span>
    </div>
  );
};
