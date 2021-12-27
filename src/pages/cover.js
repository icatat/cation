import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Base from './base.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import HorizontalNavigator from '../components/navigation.js';
import StickyFooter from '../components/footer';
import cation_theme from '../theme.js';
import { Route, Link, BrowserRouter } from 'react-router-dom';

export default function Cover() {
  return (
    <MuiThemeProvider theme={cation_theme}>
      <CssBaseline />
      <BrowserRouter>
        <HorizontalNavigator />
      </BrowserRouter>
      <StickyFooter />
    </MuiThemeProvider>
  );
}
