import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { makeStyles } from '@material-ui/core/styles';
import cation_theme from '../theme.js';
import Paper from '@mui/material/Paper';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import IconButton from '@mui/material/IconButton';

function openLink(e, link) {
  window.location = link;
  e.preventDefault();
}

function Copyright() {
  return (
    <Container style={footer}>
      <Typography>
        {'Designed By  '}
        <Link color='inherit' href='https://cation.me/'>
          cation ©
        </Link>{' '}
        {new Date().getFullYear()}
        {'. All work is my own.'}
      </Typography>
    </Container>
  );
}
var footer = {
  color: cation_theme.palette.text.secondary,
  backgroundColor: cation_theme.palette.primary.main,
  justify: 'center',
  justifyContent: 'center',
  justifyItems: 'center',
  display: 'flex',
  padding: '0px',
  margin: '0px',
  fontSize: '6px',
};
export default function StickyFooter() {
  return (
    <div>
      <CssBaseline />
      <Box
        style={footer}
        sx={{
          // py: 3,
          // px: 2,
          mt: 'auto',
        }}
      >
        <Container maxWidth='sm'>
          <Copyright />
          <Container style={footer}>
            <IconButton
              onClick={(e) => {
                openLink(
                  e,
                  'https://www.linkedin.com/in/catalina-ionescu-848618113/'
                );
              }}
              color='info'
              fontSize='small'
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {
                openLink(e, 'https://github.com/icatat');
              }}
              color='info'
              fontSize='small'
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {
                openLink(e, 'https://www.instagram.com/cation.art/?hl=en');
              }}
              color='info'
              fontSize='small'
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {
                openLink(e, 'mailto:icatateo@gmail.com');
              }}
              color='info'
              fontSize='small'
            >
              <AlternateEmailIcon />
            </IconButton>
          </Container>
        </Container>
      </Box>
    </div>
  );
}
