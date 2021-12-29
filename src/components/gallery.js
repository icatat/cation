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

export default function Gallery() {
  const { docs } = useFirestore('artwork');

  const useStyles = makeStyles(() => ({
    gallery: {
      display: 'flex',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.gallery}>
      <Grid container spacing={2}>
        {docs &&
          docs.map((doc) => (
            <Grid key={doc.id} item xs={9} md={3} lg={3}>
              <Card>
                <CardContent>
                  <CardMedia component='img' src={doc.url}></CardMedia>
                  <Typography variant='h5' component='div'>
                    {doc.name}
                  </Typography>
                  <Typography>{doc.technique}</Typography>
                  <Typography>{doc.year}</Typography>
                  <Typography>{doc.details}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
