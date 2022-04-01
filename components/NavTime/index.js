import { Divider, Text } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import Clock from '../Clock';
import calendar from '../../utils/calendar';
import timeFormatter from '../../utils/timeFormater';

const NavTime = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const dayMonthFormat = { month: 'long', day: 'numeric' };
  const persianDayMonth = calendar('persian', 'fa', dayMonthFormat);
  const islamicDayMonth = calendar('islamic', 'fa', dayMonthFormat);
  const isoDayMonth = calendar('iso8601', 'fa', dayMonthFormat);

  const persianFullTime = timeFormatter('persian', 'fa', "yyyy'/'MM'/'dd");
  const islamicFullTime = timeFormatter('islamic', 'fa', "yyyy'/'MM'/'dd");
  const isoFullTime = timeFormatter('iso8601', 'en', "yyyy'-'MM'-'dd");

  const persianDay = timeFormatter('persian', 'fa', 'cccc');

  return (
    <>
      <Divider mb="sm" variant="dashed" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 0 15px 0',
          fontWeight: 600,
          fontSize: '17px',
        }}
      >
        <span>امروز ({persianDay})</span>
        <Clock />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '5px 0',
          color: dark ? 'orange' : '#1F3F98',
        }}
      >
        <span style={{ fontWeight: 600, fontSize: '17px' }}>
          {persianDayMonth}
        </span>
        <span style={{ fontWeight: 600 }}>{persianFullTime}</span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '5px 0',
          color: '#1F9894',
        }}
      >
        <span> {isoDayMonth}</span>
        <span>{isoFullTime}</span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '5px 0',
          color: '#6B6B6B',
        }}
      >
        <span> {islamicDayMonth}</span>
        <span>{islamicFullTime}</span>
      </div>
    </>
  );
};
export default NavTime;
