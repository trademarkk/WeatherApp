import { parse, format } from "date-fns";
import React from "react";

export const CurrentDate = ({ localTime }) => {
  const rawDate = localTime;

  const parsedDate = parse(rawDate, "yyyy-MM-dd HH:mm", new Date());

  const formattedTime = format(parsedDate, "MMMM d, EEE");
  return (
    <div className=" font-medium text-[20px] mb-24 underline">
      {formattedTime}
    </div>
  );
};
