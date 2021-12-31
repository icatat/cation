import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CommonBase from './commonbase.js';
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
import Paper from '@mui/material/Paper';

var cardStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0px',
  padding: '0px',
};

var cardStyleMedia = {
  // display: 'flex',
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

var main = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

var text = {
  fontSize: '16px',
};

var bottomtext = {
  justifyContent: 'center',
  fontSize: '18px',
  color: cation_theme.palette.secondary.main,
  fontWeight: '900',
  alignItems: 'center',
  display: 'flex',
};

var paper = {};

export default function About() {
  return (
    <CommonBase>
      <Container>
        <Card style={main}>
          <CardContent style={cardStyleMedia}>
            <Grid container style={cardStyle}>
              <Grid item xs={12} md={5} lg={5}>
                <Paper elevation={0} style={paper}>
                  <Container>
                    <Typography style={text}>
                      I was born and raised in Oradea, Romania, in a normal
                      family. I discovered my passion for Art when I was about 4
                      years old and my mom used to draw for me. At the age of 8,
                      I started drawing myself, mostly Christian Orthodox glass
                      painting (not very religious myself though). I further
                      discovered oils, graphics, acrylics and water colors.
                      Gaining a varied portfolio, I opened my first personal
                      exhibition called Fear of being Brave in 2011, at the age
                      of 14, dreaming of pursuing a career in Arts. I was
                      powerfully dreamy and confident. I attended a Computer
                      Science & Mathematics high-school, where things turned 180
                      degrees. Due to a series of external factors, I decided to
                      study in the United States. I was lucky enough to be
                      awarded enough financial aid to open a door to a new
                      future. I came to United States for college in 2015.
                      However, not being privileged enough, switched my career
                      pursuits to something more “realistic”. I discovered
                      creativity in Software Engineering, which made it a
                      “realistic” path that fit me. I interned in Silicon Valley
                      and I am currently a Software Engineer in New York City.
                      My dreams are still as big as ever, and I am trying to
                      make my Art “come-back”.
                    </Typography>
                  </Container>
                </Paper>
              </Grid>
              <Grid item xs={12} md={7} lg={7}>
                <CardMedia
                  component='img'
                  src='https://firebasestorage.googleapis.com/v0/b/cation-page.appspot.com/o/Test_Two.jpg?alt=media&token=8803e14b-077f-459c-87a8-b9fed3e2f1e4'
                ></CardMedia>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Container>
          <Typography style={bottomtext}>
            Wanna know more? Stick around.
          </Typography>
        </Container>
      </Container>
    </CommonBase>
  );
}
