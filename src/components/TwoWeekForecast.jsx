import { TwoWeekForecastDayCard } from "./TwoWeekForecastDayCard";
import { ForecastLoader } from "./ForecastLoader";
import { useScale } from "./ScaleContext";

export const TwoWeekForecast = ({ data, isLoading, isError }) => {
  console.log(data);
  const { scale } = useScale();
  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-10 place-items-center">
        {Array.from({ length: 14 }).map((_, index) => (
          <ForecastLoader key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
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
    );
  }
  return (
    <div className="grid grid-cols-4 gap-10 ">
      {data?.forecast?.forecastday?.map((day) => (
        <TwoWeekForecastDayCard
          data={day}
          key={day.date}
          isLoading={isLoading}
          scale={scale}
        />
      ))}
    </div>
  );
};
