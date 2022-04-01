const { DateTime } = require('luxon');

const calendar = (calendar, local, dateFormat) => {
  let minusTime = {};
  if (calendar === 'islamic') {
    minusTime = { days: 1 };
  }
  return DateTime.now()
    .reconfigure({ outputCalendar: calendar })
    .setLocale(local)
    .minus(minusTime)
    .toLocaleString(dateFormat);
};
export default calendar;
