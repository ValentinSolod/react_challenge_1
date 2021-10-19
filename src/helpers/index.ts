type TimeObjectType = { [time: string]: number };

export const getTimeRemaining = (
  endtime: string,
  includeMonths: boolean
): TimeObjectType => {
  const today = Date.parse(String(new Date()));
  const deadline = Date.parse(endtime);
  const timediff = deadline - today;

  const seconds = Math.floor((timediff / 1000) % 60);
  const minutes = Math.floor((timediff / 1000 / 60) % 60);
  const hours = Math.floor((timediff / (1000 * 60 * 60)) % 24);
  const days = Math.abs(Math.round(timediff / 1000 / (3600 * 24)));
  const daysWithMonths = Math.floor(timediff / 1000 / (1000 * 60 * 60 * 24));
  const months = Math.abs(Math.round(timediff / 1000 / (60 * 60 * 24 * 7 * 4)));

  return {
    months,
    days: includeMonths ? daysWithMonths : days,
    hours,
    minutes,
    seconds,
  };
};
