const getMonthBreakPoints = (date) => {
  const [year, month] = date
    .split("-")
    .map((el, idx) => (idx === 1 ? Number(el) - 1 : Number(el)));
  const prev = new Date(Date.UTC(year, month, 1, 0, 0, 0, -1));
  const next = new Date(Date.UTC(year, month + 1, 1, 0, 0, 0, 0));
  return { prev, next };
};

module.exports = getMonthBreakPoints;
