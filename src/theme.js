import { createTheme } from '@mui/material/styles';

const cation_theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#d50000',
    },
    background: {
      default: '#f7eded',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#b71c1c',
    },
    info: {
      main: '#e0e0e0',
    },
    success: {
      main: '#ffebee',
    },
    text: {
      secondary: '#ffebee',
    },
  },
  typography: {
    fontFamily: 'Josefin Slab',
    body1: {
      fontFamily: 'Josefin Slab',
    },
    caption: {
      fontFamily: 'Josefin Slab',
    },
    h1: {
      fontFamily: 'Gwendolyn',
      fontWeight: 500,
    },
    h3: {
      fontFamily: 'Gwendolyn',
      fontWeight: 500,
    },
    h2: {
      fontFamily: 'Gwendolyn',
      fontWeight: 500,
    },
    fontWeightLight: 400,
    subtitle1: {
      fontFamily: 'Gwendolyn',
      fontWeight: 500,
    },
    h4: {
      fontFamily: 'Gwendolyn',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Gwendolyn',
      fontWeight: 500,
    },
  },
});

export default cation_theme;
