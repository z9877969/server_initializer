const getHoursDiff = (date) => {
  const clientDate = new Date(date);
  const serverDate = new Date();
  const clientUTCHours = clientDate.getUTCHours();
  const serverUTCHours = serverDate.getUTCHours();

  return Math.abs(clientUTCHours - serverUTCHours) < 12
    ? clientUTCHours - serverUTCHours
    : clientUTCHours - serverUTCHours > 0
    ? 24 - (clientUTCHours - serverUTCHours)
    : clientUTCHours - serverUTCHours < 0
    ? 24 + (clientUTCHours - serverUTCHours)
    : 0;
};

module.exports = getHoursDiff;
