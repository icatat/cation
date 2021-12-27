import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import StickyFooter from '../components/footer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import cation_theme from '../theme.js';

export default function Base() {
  return (
    <MuiThemeProvider theme={cation_theme}>
      <CssBaseline />
      <StickyFooter />
    </MuiThemeProvider>
  );
}
