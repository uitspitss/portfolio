import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';

import theme from '@/config/theme';
import store from '@/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>uitspitss&apos;s portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
