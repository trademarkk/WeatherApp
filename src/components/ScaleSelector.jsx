import { useScale } from "./ScaleContext";
import "./scaleSelector.css";

export const ScaleSelector = () => {
  const { scale, setScale } = useScale();

  const handleToggle = () => {
    setScale(scale === "C" ? "F" : "C");
  };
  return (
    <div className="flex gap-1 items-center absolute bottom-[-60px]">
      <div className="font-light text-white text-3xl">°C</div>
      <input
        type="checkbox"
        id="switch"
        checked={scale === "F"}
        onChange={handleToggle}
      />
      <label for="switch">Toggle</label>
      <div className="font-light text-white text-3xl">°F</div>
    </div>
  );
};
