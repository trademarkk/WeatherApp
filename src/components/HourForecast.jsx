import { getWeatherImgage } from "./ForecastLoader";
import { format } from "date-fns";

export const HourForecast = ({ data, scale }) => {
  const time = format(new Date(data.time), "HH:mm");
  console.log(scale);

  const temp = scale === "C" ? data?.temp_c : data?.temp_f;
  const unit = scale === "C" ? "°C" : "°F";

  const imageSrc = getWeatherImgage(data.condition.text);

  return (
    <div
      className="weather-card relative w-[121px] h-[118px] rounded-3xl pt-4 pl-6 pr-4 flex flex-col items-center gap-2 before:absolute before:w-full before:h-[72px] before:left-0 before:bottom-[-22px] before:z-[2] before:rounded-3xl "
      style={{
        background:
          "linear-gradient(180deg, #b32dd4 0%, rgba(217, 217, 217, 0) 100%)",
      }}
    >
      <span className="text-white font-medium text-[17px]">{time}</span>
      <img src={imageSrc} className=" w-16 h-16 z-[3]" alt="rain" />
      <span className="font-light z-[3] text-white text-[21px]">
        {Math.floor(temp)} {unit}
      </span>
    </div>
  );
};
