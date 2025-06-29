import { useMemo } from "react";
import { format, addDays, parseISO } from "date-fns";

export function useFormatDate(data) {
  const formattedTomorrow = useMemo(() => {
    try {
      return format(
        addDays(parseISO(data.location?.localtime ?? "2025-01-01 00:00"), 1),
        "yyyy-MM-dd HH:mm"
      );
    } catch (e) {
      console.warn("Date parse error:", e);
      return "";
    }
  }, [data]);

  return {
    formattedTomorrow,
  };
}
