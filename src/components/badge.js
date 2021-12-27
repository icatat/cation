import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { makeStyles } from '@material-ui/core/styles';
import cation_theme from '../theme.js';

const useStyles = makeStyles((cation_theme) => ({
  footer: {
    backgroundColor: cation_theme.palette.primary.main,
    color: cation_theme.palette.text.secondary,
  },
}));

export default function Badge(props) {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Box
        className={classes.footer}
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container className={classes.footer} maxWidth='sm'>
          <Typography variant='body1'>All work is my own.</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
