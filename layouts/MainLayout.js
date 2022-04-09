import { useState } from 'react';

import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
} from '@mantine/core';

import { HeartIcon, HomeIcon } from '@primer/octicons-react';

import SearchInput from '../components/SearchInput';
import HeaderMenu from '../components/HeaderMenu';
import NavLink from '../components/NavLink';
import NavSetting from '../components/NavSetting';
import NavTime from '../components/NavTime';

const HEADER_HEIGHT = 50;

const MainLayout = ({ children }) => {
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
          height={`calc(100% - ${HEADER_HEIGHT}px)`}
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
          height={HEADER_HEIGHT}
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
      {children}
    </AppShell>
  );
};

export default MainLayout;
