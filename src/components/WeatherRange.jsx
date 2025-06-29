import { DayButton } from "./DayButton";

export const WeatherRange = ({ activeBtn, setActiveBtn, setForecastDays }) => {
  const handleActiveDay = (text) => {
    setActiveBtn(text);
    setForecastDays(text);
  };

  return (
    <ul className="flex items-center gap-4">
      <li>
        <DayButton
          isActive={activeBtn === "Today"}
          text="Today"
          onClick={() => {
            handleActiveDay("Today");
            setForecastDays("1");
          }}
        />
      </li>
      <li>
        {" "}
        <DayButton
          isActive={activeBtn === "Tomorrow"}
          text="Tomorrow"
          onClick={() => {
            handleActiveDay("Tomorrow");
            setForecastDays("2");
          }}
        />
      </li>
      <li>
        <DayButton
          isActive={activeBtn === "Two Week Forecast"}
          text="14 days Forecast"
          onClick={() => {
            handleActiveDay("Two Week Forecast");
            setForecastDays("14");
          }}
        />
      </li>
    </ul>
  );
};
