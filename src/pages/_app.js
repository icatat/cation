import '../index.css';
import React from 'react';
import cation_theme from '../theme.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Cover from './cover.js';
import About from './about.js';
import Head from 'next/head';
import App from 'next/app';

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta charset='utf-8' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />

        <link
          href='https://fonts.googleapis.com/css2?family=Gwendolyn&family=Josefin+Slab:wght@100&display=swap'
          rel='stylesheet'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ThemeProvider theme={cation_theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
