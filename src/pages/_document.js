// /pages/_document_.js
import Document, { Head, Html, Main, NextScript } from 'next/document';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import cation_theme from '../theme.js';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <ThemeProvider theme={cation_theme}>
          <CssBaseline />
          <body>
            <Main />
            <NextScript />
          </body>
        </ThemeProvider>
      </Html>
    );
  }
}
