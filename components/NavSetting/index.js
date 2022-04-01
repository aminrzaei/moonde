import { Button, Divider, Group, Text } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { MoonIcon, SunIcon } from '@primer/octicons-react';

const NavSetting = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <div>
      <Divider my="sm" variant="dashed" />
      <Text>تنظیمات</Text>
      <Group mt="xs" style={{ justifyContent: 'space-between' }}>
        <Button
          style={{ padding: '0 8px' }}
          styles={{
            inner: {
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: '400',
            },
          }}
          fullWidth
          variant="subtle"
          rightIcon={dark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          color={dark ? 'green' : 'orange'}
          onClick={() => toggleColorScheme()}
        >
          <Text style={{ fontSize: '15px' }}>تم وب سایت</Text>
        </Button>
      </Group>
    </div>
  );
};

export default NavSetting;
