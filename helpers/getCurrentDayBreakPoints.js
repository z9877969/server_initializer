const getCurrentDayBreakPoints = (hoursDiff) => {
  const serverDate = new Date();
  serverDate.setUTCHours(serverDate.getUTCHours() + hoursDiff);
  const [year, month, day] = serverDate.toISOString().split("T")[0].split("-");

  const beforeCurrentDate = new Date(
    Date.UTC(year, Number(month) - 1, Number(day), 0, 0, 0, -1)
  );
  const afterCurrentDate = new Date(
    Date.UTC(year, Number(month) - 1, Number(day) + 1, 0, 0, 0, 0)
  );

  return {
    dayBefore: beforeCurrentDate,
    dayAfter: afterCurrentDate,
  };
};

module.exports = getCurrentDayBreakPoints;
