export const DayButton = ({ text, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={
        isActive
          ? " cursor-pointer relative font-bold text-3xl text-white min-w-[184px] text-wrap whitespace-nowrap  before:absolute before:bottom-0 before:left-0 before:bg-[#695d5d] before:h-[3px] before:w-full"
          : " cursor-pointer font-light text-3xl text-white min-w-[184px] text-wrap"
      }
    >
      {text}
    </button>
  );
};
