import '../styles/globals.css';
import Head from 'next/head';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
import { MantineProvider } from '@mantine/core';

const progress = new ProgressBar({
  size: 2,
  color: '#38bdf8',
  className: 'bar-of-progress',
  delay: 100,
});

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start();
  progress.finish();
}

Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.finish());
Router.events.on('routeChangeError', () => progress.finish());

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>خانه</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Kalameh ,Segoe UI ,Tahoma ,Geneva ,Verdana ,sans-serif',
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
