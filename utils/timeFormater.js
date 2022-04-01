const { DateTime } = require('luxon');

const timeFormatter = (calendar, local, dateFormat) => {
  let minusTime = {};
  if (calendar === 'islamic') {
    minusTime = { days: 1 };
  }
  return DateTime.now()
    .reconfigure({ outputCalendar: calendar })
    .minus(minusTime)
    .setLocale(local)
    .toFormat(dateFormat);
};
export default timeFormatter;
