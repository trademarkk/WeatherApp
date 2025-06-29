export function getTime(gap) {
  const now = Date.now();
  const timeGapInMiliSeconds = gap * 1000 * 60 * 60;

  const newDate = new Date(now + timeGapInMiliSeconds)
    .getHours()
    .toString()
    .padStart(2, "0");

  return `${newDate}:00`;
}
