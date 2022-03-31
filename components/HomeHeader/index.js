import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  TextInput,
  Divider,
  Space,
} from '@mantine/core';
import SearchInput from '../SearchInput';
import HeaderMenu from '../HeaderMenu';
import CardsContainer from '../CardsContainer';
import NavLink from '../NavLink';
import { HeartIcon, HomeIcon } from '@primer/octicons-react';
import NavSetting from '../NavSetting';
import NavTime from '../NavTime';

const HomeHeader = () => {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideoffsetbreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 180, lg: 230 }}
        >
          <Navbar.Section grow mt="md">
            <NavLink
              icon={<HomeIcon size={18} />}
              label="همه‌ی رویداد ها"
              isActive={true}
              url="/home"
            />
            <NavLink
              icon={<HeartIcon size={18} />}
              label="رویداد های من"
              isActive={false}
              url="/home"
            />
          </Navbar.Section>
          <Navbar.Section>
            <NavTime />
          </Navbar.Section>
          <Navbar.Section>
            <NavSetting />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header
          height={50}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '7px 15px 7px 10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="md"
              />
            </MediaQuery>
            <Text mr="lg" mt={5}>
              مونده
            </Text>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <SearchInput inputWidth="500px" />
            </MediaQuery>
          </div>
          <HeaderMenu />
        </Header>
      }
    >
      <Space h={10} />
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <SearchInput inputWidth="100%" />
      </MediaQuery>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Divider
          mt={25}
          mb={20}
          label="رویداد ها"
          labelPosition="center"
          variant="dashed"
        />
      </MediaQuery>
      <CardsContainer />
    </AppShell>
  );
};

export default HomeHeader;
