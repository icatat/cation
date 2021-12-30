import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Base from './base.js';
import { ThemeProvider } from '@mui/material/styles';
import HorizontalNavigator from '../components/navigation.js';
import StickyFooter from '../components/footer';
import cation_theme from '../theme.js';
import Gallery from '../components/gallery';
import Typography from '@mui/material/Typography';

var titleStyleRed = {
  width: 'auto',
  margin: '0px',
  padding: '0px',
  color: cation_theme.palette.secondary.main,
};
var titleContainer = {
  display: 'flex',
  margin: '0px',
  padding: '0px',
  justifyContent: 'center',
  alignItems: 'bottom',
  bottom: '0px',
};

var titleNavContainer = {
  display: 'flex',
  margin: '0px',
  padding: '0px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50px',
};
export default function Portfolio() {
  return (
    <Base>
      <Box>
        <Container style={titleContainer}>
          <Typography style={titleStyleRed} variant='h3'>
            Cation
          </Typography>
        </Container>
        <Container style={titleNavContainer}>
          <HorizontalNavigator />
        </Container>
      </Box>
      <Gallery></Gallery>
    </Base>
  );
}
