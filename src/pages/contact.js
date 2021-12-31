import * as React from 'react';
import Base from './base.js';
import Container from '@mui/material/Container';
import HorizontalNavigator from '../components/navigation.js';
import StickyFooter from '../components/footer';
import Box from '@mui/material/Box';
var titleNavContainer = {
  display: 'flex',
  margin: '0px',
  padding: '0px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50px',
};
export default function Contact() {
  return (
    <Base>
      <Box style={titleNavContainer}>
        <HorizontalNavigator />
      </Box>
    </Base>
  );
}
