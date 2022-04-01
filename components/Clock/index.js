import { useState, useEffect } from 'react';
const { DateTime } = require('luxon');

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <span>{DateTime.fromJSDate(time).toFormat("HH':'mm':'ss")}</span>
    </>
  );
};

export default Clock;
