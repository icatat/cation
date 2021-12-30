import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Base from './base.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import HorizontalNavigator from '../components/navigation.js';
import StickyFooter from '../components/footer';
import cation_theme from '../theme.js';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

var cardStyle = {
  display: 'contents',
  height: '70vh',
  width: 'auto',
  alignItems: 'center',
  margin: '0px',
  padding: '0px',
  justifyContent: 'center',
};
var titleStyle = {
  width: 'auto',
  margin: '0px',
  padding: '0px',
  color: cation_theme.palette.primary.main,
};
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
  height: '100px',
  top: '50px',
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
var cardMediaStyle = {
  // height: '70vh',
  // width: 'auto',
  // padding: '0px',
};

var main = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '100vh',
  backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/cation-page.appspot.com/o/City_1.jpg?alt=media&token=1c3ba48e-f3e8-444f-82e5-b80577960a1f')`,
};

export default function Cover() {
  return (
    <Base>
      <Box style={main}>
        <Container style={titleContainer}>
          <Typography style={titleStyleRed} variant='h1'>
            Cat
          </Typography>
          <Typography style={titleStyle} variant='h1'>
            alina
          </Typography>
          <Typography style={titleStyleRed} variant='h1'>
            Ion
          </Typography>
          <Typography style={titleStyle} variant='h1'>
            escu
          </Typography>
        </Container>
        <Container style={titleNavContainer}>
          <HorizontalNavigator />
        </Container>
      </Box>
    </Base>
  );
}
