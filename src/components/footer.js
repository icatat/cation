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
// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.text.secondary,
//   },
// }));
export default function StickyFooter() {
  const classes = () => ({
    footer: {
      backgroundColor: cation_theme.palette.primary.main,
      color: cation_theme.palette.text.secondary,
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Box
        className={classes.footer}
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
    </Box>
  );
}
