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
import Grid from '@mui/material/Grid';

var cardStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0px',
  padding: '0px',
};

var cardStyleMedia = {
  width: '80vw',
  display: 'flex',
};

var titleNavContainer = {
  display: 'flex',
  margin: '0px',
  padding: '0px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50px',
};

export default function About() {
  return (
    <Base>
      <Box style={titleNavContainer}>
        <HorizontalNavigator />
      </Box>
      <Grid style={cardStyle}>
        <Grid item xs={12}>
          <Card>
            <CardContent style={cardStyleMedia}>
              <Typography>
                I was born and raised in Oradea, Romania, in a normal family. I
                discovered my passion for Art when I was about 4 years old and
                my mom used to draw for me. At the age of 8, I started drawing
                myself, mostly Christian Orthodox glass painting (not very
                religious myself though). I further discovered oils, graphics,
                acrylics and water colors. Gaining a varied portfolio, I opened
                my first personal exhibition called Fear of being Brave in 2011,
                at the age of 14, dreaming of pursuing a career in Arts. I was
                powerfully dreamy and confident. I attended a Computer Science &
                Mathematics high-school, where things turned 180 degrees. Due to
                a series of external factors, I decided to study in the United
                States. I was lucky enough to be awarded enough financial aid to
                open a door to a new future. I came to United States for college
                in 2015. However, not being privileged enough, switched my
                career pursuits to something more “realistic”. I discovered
                creativity in Software Engineering, which made it a “realistic”
                path that fit me. I interned in Silicon Valley and I am
                currently a Software Engineer in New York City. My dreams are
                still as big as ever, and I am trying to make my Art
                “come-back”. Wanna know more? Good. Stick around.
              </Typography>
              <CardMedia component='img' image='Test_Two.jpg'></CardMedia>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Base>
  );
}
