import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Base from './base.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import HorizontalNavigator from '../components/navigation.js';
import StickyFooter from '../components/footer';
import cation_theme from '../theme.js';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Route, Link, BrowserRouter } from 'react-router-dom';

export default function About() {
  return (
    <MuiThemeProvider theme={cation_theme}>
      <CssBaseline />
      <BrowserRouter>
        <HorizontalNavigator />
        <Card>
          <CardHeader>Hello</CardHeader>
          <CardMedia component='img' image='../assets/Test_Two.jpg'></CardMedia>
          <CardContent>
            <p>
              I was born and raised in Oradea, Romania, in a normal family. I
              discovered my passion for Art when I was about 4 years old and my
              mom used to draw for me. At the age of 8, I started drawing
              myself, mostly Christian Orthodox glass painting (not very
              religious myself though). I further discovered oils, graphics,
              acrylics and water colors. Gaining a varied portfolio, I opened my
              first personal exhibition called{' '}
              <b>
                <i>Fear of being Brave</i>
              </b>{' '}
              in 2011, at the age of 14, dreaming of pursuing a career in Arts.
            </p>

            <p>I was powerfully dreamy and confident.</p>

            <p>
              I attended a Computer Science &amp; Mathematics high-school, where
              things turned 180 degrees. Due to a series of external factors, I
              decided to study in the United States. I was lucky enough to be
              awarded enough financial aid to open a door to a new future. I
              came to United States for college in 2015. However, not being
              privileged enough, switched my career pursuits to something more
              “realistic”.
            </p>

            <p>
              I discovered creativity in Software Engineering, which made it a
              “realistic” path that fit me. I interned in Silicon Valley and I
              am currently a Software Engineer in New York City.
            </p>

            <p>
              My dreams are still as big as ever, and I am trying to make my Art
              “come-back”.
            </p>

            <h5 id='wanna-know-more-good-stick-around'>
              <b>Wanna know more? Good. Stick around.</b>
            </h5>
          </CardContent>
        </Card>
        <StickyFooter />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
