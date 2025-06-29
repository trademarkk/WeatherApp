import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "./api";
import { Today } from "./Today";
import { Tomorrow } from "./Tomorrow";
import { TwoWeekForecast } from "./TwoWeekForecast";
import { useScale } from "./ScaleContext";

export const MainWeatherCardView = ({ forecastDays, debouncedSearch }) => {
  const { scale } = useScale();
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["weather", debouncedSearch, forecastDays],
    queryFn: ({ queryKey }) => {
      const [_key, searchValue, days] = queryKey;
      return fetchWeather({ days, searchValue });
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!debouncedSearch.trim(),
    retry: 0,
  });

  if (error || isError) {
    console.log(`Ошибка поиска ${error}`);
  }

  if (forecastDays === "1")
    return (
      <Today
        isLoading={isLoading}
        data={data}
        isError={isError}
        scale={scale}
      />
    );

  if (forecastDays === "2")
    return (
      <Tomorrow
        isLoading={isLoading}
        data={data}
        isError={isError}
        scale={scale}
      />
    );

  if (forecastDays === "14")
    return (
      <TwoWeekForecast
        isLoading={isLoading}
        data={data}
        isError={isError}
        scale={scale}
      />
    );
};
