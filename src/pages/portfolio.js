import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Base from './base.js';
import { ThemeProvider } from '@mui/material/styles';
import HorizontalNavigator from '../components/navigation.js';
import StickyFooter from '../components/footer';
import cation_theme from '../theme.js';
import Gallery from '../components/gallery';

export default function Portfolio() {
  return (
    <Base>
      <HorizontalNavigator />
      <Gallery></Gallery>
    </Base>
  );
}
