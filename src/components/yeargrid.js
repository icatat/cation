import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

var gallery = {
  display: 'flex',
};

export default function YearGrid(props) {
  var artworks = props.artwork;
  return (
    <Grid container spacing={2}>
      {artworks.map((doc) => (
        <Grid key={doc.id} item xs={12} md={6} lg={4}>
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
  );
}
