import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import StickyFooter from '../components/footer';
import cation_theme from '../theme.js';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

export default function Base(props) {
  return (
    <Container>
      <CssBaseline />
      {props.children}
      <StickyFooter />
    </Container>
  );
}
