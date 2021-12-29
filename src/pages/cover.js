import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Base from './base.js';
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

export default function Cover() {
  return (
    <Base>
      <Container height='500px'>
        <Typography variant='h2' component='div'>
          Catalina Ionescu
        </Typography>
      </Container>
      <HorizontalNavigator />
      <Card md={3}>
        <CardContent>
          <CardMedia
            component='img'
            src='https://firebasestorage.googleapis.com/v0/b/cation-page.appspot.com/o/City_1.jpg?alt=media&token=1c3ba48e-f3e8-444f-82e5-b80577960a1f'
          ></CardMedia>
        </CardContent>
      </Card>
    </Base>
  );
}
