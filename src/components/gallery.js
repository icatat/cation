import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { makeStyles } from '@material-ui/core/styles';
import cation_theme from '../theme.js';
import useFirestore from '../hooks/useFirestore';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import YearGrid from './yeargrid';

const useStyles = makeStyles(() => ({
  gallery: {
    display: 'flex',
  },
}));

var gallery = {
  display: 'flex',
};

var yearStyle = {
  height: '50px',
  justify: 'center',
  display: 'flex',
  padding: '0px',
  margin: '0px',
};
export default function Gallery() {
  const { docs } = useFirestore('artwork');
  const docsKeys = Object.keys(docs);
  const classes = useStyles();

  return docsKeys.map((year) => (
    <Container>
      <Typography component='div' style={yearStyle} variant='h5'>
        {year}
      </Typography>
      <div>
        <YearGrid artwork={docs[year]}></YearGrid>
      </div>
    </Container>
  ));
}
