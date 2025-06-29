import { Loader } from "./Loader";
import { CurrentDate } from "./currentDate";
import thermometerIcon from "../assets/termometer.svg";
import locationIcon from "../assets/location.svg";
import clouds from "../assets/clouds.svg";
import { memo } from "react";

export const Today = memo(({ isLoading, data, isError, scale }) => {
  const noData = !data?.location?.name;

  const temp = scale === "C" ? data?.current.temp_c : data?.current.temp_f;

  const unit = scale === "C" ? "°C" : "°F";
  console.log(temp);
  return (
    <div
      className="rounded-4xl min-w-[817px] min-h-[425px] justify-self-center p-7 text-white mb-16  relative"
      style={{
        boxShadow:
          "0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 4px 4px 0 rgba(255, 250, 250, 0.25), 0 4px 4px 0 rgba(253, 245, 245, 0.25)",
        background: "linear-gradient(147deg, #ad36cb 26.56%, #333 68.75%)",
      }}
    >
      {isError ? (
        <div className="flex flex-col justify-center items-center h-full text-center gap-6">
          <h2 className="text-3xl font-semibold text-white">
            Что-то пошло не так
          </h2>
          <p className="text-lg text-white/80">
            Не удалось получить данные о погоде. Проверьте название города или
            попробуйте позже.
          </p>
          <button
            className="mt-4 bg-white text-[#ad36cb] px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition"
            onClick={() => window.location.reload()}
          >
            Попробовать снова
          </button>
        </div>
      ) : isLoading || noData ? (
        <Loader />
      ) : (
        <div className="">
          <span className="font-light text-3xl text-white flex items-center mb-16">
            {data?.location?.name || "--"}
            <img src={locationIcon} alt="location-icon" />
          </span>

          <div className="flex items-center gap-3 mb-2.5 justify-self-center">
            <img src={thermometerIcon} alt="termometer-icon" />
            <span className="font-light text-7xl">
              {!isNaN(temp) ? Math.floor(temp) : "--"}
              {unit}
            </span>
            <img src={clouds} alt="clouds icon" />
          </div>

          <CurrentDate
            localTime={data?.location?.localtime ?? "2025-01-01 00:00"}
          />

          <div className="">
            <ul className="uppercase font-medium text-[20px] flex items-center justify-around">
              <li className="">
                <p className="flex flex-col items-center">
                  <span className="">humidity</span>
                  <span className="lowercase">
                    {data?.current?.humidity ?? "--"}%
                  </span>
                </p>
              </li>
              <li className="">
                <p className="flex flex-col items-center">
                  <span className="">visibility</span>
                  <span className="lowercase">
                    {data?.current?.vis_km ?? "--"}km
                  </span>
                </p>
              </li>
              <li className="">
                <p className="flex flex-col items-center">
                  <span className="">air pressure</span>
                  <span className="lowercase">
                    {data?.current?.pressure_mb ?? "--"}hPa
                  </span>
                </p>
              </li>
              <li className="">
                <p className="flex flex-col items-center">
                  <span className="">wind</span>
                  <span className="lowercase">
                    {data?.current?.wind_mph ?? "--"}mph
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
});
