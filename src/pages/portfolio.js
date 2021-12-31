import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CommonBase from './commonbase.js';
import { ThemeProvider } from '@mui/material/styles';
import HorizontalNavigator from '../components/navigation.js';
import StickyFooter from '../components/footer';
import cation_theme from '../theme.js';
import Gallery from '../components/gallery';
import Typography from '@mui/material/Typography';

export default function Portfolio() {
  return (
    <CommonBase>
      <Gallery></Gallery>
    </CommonBase>
  );
}
