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
          <Text>Application navbar</Text>
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
