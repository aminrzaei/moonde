import '../styles/globals.css';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import ProgressBar from '@badrap/bar-of-progress';

import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { AuthProvider } from '../contexts/AuthContext';
import { SpotlightProvider } from '@mantine/spotlight';

import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';

import { getCookie, setCookies } from 'cookies-next';
import rtlPlugin from 'stylis-plugin-rtl';

import {
  HomeIcon,
  FileIcon,
  TableIcon,
  SearchIcon,
} from '@primer/octicons-react';

const progress = new ProgressBar({
  size: 2,
  color: '#38bdf8',
  className: 'bar-of-progress',
  delay: 100,
});

const spotlightAction = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <HomeIcon size={18} />,
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
    icon: <TableIcon size={18} />,
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <FileIcon size={18} />,
  },
];

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start();
  progress.finish();
}

Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.finish());
Router.events.on('routeChangeError', () => progress.finish());

const App = (props) => {
  const { auth } = useAuth();
  const refresh = useRefreshToken();
  const [isLoading, setIsLoading] = useState(false);
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState(props.colorScheme);

  const toggleColorScheme = (value) => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookies('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   let isMounted = true;

  //   const verifyRefreshToken = async () => {
  //     try {
  //       await refresh();
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       isMounted && setIsLoading(false);
  //     }
  //   };
  //   !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  //   return () => (isMounted = false);
  // }, []);

  return isLoading ? null : (
    <>
      <Head>
        <title>خانه</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <AuthProvider>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            emotionOptions={{ key: 'rtl', stylisPlugins: [rtlPlugin] }}
            theme={{
              colorScheme,
              dir: 'rtl',
              fontFamily:
                'kalameh ,Segoe UI ,Tahoma ,Geneva ,Verdana ,sans-serif',
            }}
          >
            <NotificationsProvider position="top-left" autoClose={5000}>
              <ModalsProvider>
                <SpotlightProvider
                  actions={spotlightAction}
                  searchIcon={<SearchIcon size={18} />}
                  searchPlaceholder="رویداد مد نظر را جستجو کنید ..."
                  shortcut="ctrl + k"
                  nothingFoundMessage="چیزی یافت نشد ..."
                  onQueryChange={(query) => console.log(query)}
                >
                  <Component {...pageProps} />
                </SpotlightProvider>
              </ModalsProvider>
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </AuthProvider>
    </>
  );
};

App.getInitialProps = ({ ctx }) => ({
  // get color scheme from cookie
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

export default App;
