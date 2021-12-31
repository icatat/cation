import * as React from 'react';
import CommonBase from './commonbase.js';
import Container from '@mui/material/Container';
import HorizontalNavigator from '../components/navigation.js';
import StickyFooter from '../components/footer';
import Box from '@mui/material/Box';
import cation_theme from '../theme.js';
import Typography from '@mui/material/Typography';
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
export default function Contact() {
  return (
    <CommonBase>
      <Paper>
        <IconButton
          onClick={(e) => {
            openLink(
              e,
              'https://www.linkedin.com/in/catalina-ionescu-848618113/'
            );
          }}
          color='secondary'
          fontSize='large'
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          onClick={(e) => {
            openLink(e, 'https://github.com/icatat');
          }}
          color='secondary'
          fontSize='large'
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          onClick={(e) => {
            openLink(e, 'https://www.instagram.com/cation.art/?hl=en');
          }}
          color='secondary'
          fontSize='large'
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          onClick={(e) => {
            openLink(e, 'mailto:icatateo@gmail.com');
          }}
          color='secondary'
          fontSize='large'
        >
          <AlternateEmailIcon />
        </IconButton>
      </Paper>
    </CommonBase>
  );
}
