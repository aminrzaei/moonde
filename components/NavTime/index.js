import { Divider, Text } from '@mantine/core';
import Clock from '../Clock';

const NavTime = () => {
  return (
    <div>
      <Divider mb="sm" variant="dashed" />
      <Text>Time</Text>
      <Clock />
    </div>
  );
};
export default NavTime;
