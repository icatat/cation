import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { makeStyles } from '@material-ui/core/styles';
import cation_theme from '../theme.js';

function Copyright() {
  return (
    <Typography>
      {'Designed By  '}
      <Link color='inherit' href='https://cation.me/'>
        cation ©
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
var footer = {
  color: cation_theme.palette.text.secondary,
  backgroundColor: cation_theme.palette.primary.main,
};
export default function StickyFooter() {
  return (
    <div>
      <CssBaseline />
      <Box
        style={footer}
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container maxWidth='sm'>
          <Typography>All work is my own.</Typography>
          <Copyright />
        </Container>
      </Box>
    </div>
  );
}
