import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import StickyFooter from '../components/footer';
import cation_theme from '../theme.js';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import HorizontalNavigator from '../components/navigation.js';

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

export default function CommonBase(props) {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
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
        {props.children}
      </Box>
      <StickyFooter />
    </div>
  );
}
