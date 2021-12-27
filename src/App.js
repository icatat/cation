import * as React from 'react';
import ReactDOM from 'react-dom';
import cation_theme from './theme.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Link, BrowserRouter } from 'react-router-dom';

import Cover from './pages/cover.js';
import About from './pages/aboutr.js';

function App() {
  return (
    <ThemeProvider theme={cation_theme}>
      <About />
    </ThemeProvider>
  );
}
