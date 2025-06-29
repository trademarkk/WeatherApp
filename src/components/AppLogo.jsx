import { useTime } from "./useTime";
import logo from "../assets/logo.svg";

export const Logo = () => {
  const time = useTime();
  return (
    <h1 className="text-white text-[69px] pl-16 relative pt-10 max-w-[461px] pointer-events-none">
      <img src={logo} alt="" className="absolute left-0 top-[20px]" />
      WeatherMe
      <span className="time absolute right-5 bottom-[-5px] font-semibold text-[19px]">
        {time}
      </span>
    </h1>
  );
};
