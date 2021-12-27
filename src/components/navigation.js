import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { makeStyles } from '@material-ui/core/styles';
import cation_theme from '../theme.js';
import '../routes.js';
import {
  useNavigate,
  useHistory,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

const useStyles = makeStyles((cation_theme) => ({
  footer: {
    backgroundColor: cation_theme.palette.primary.main,
    color: cation_theme.palette.text.secondary,
  },
}));

export default function HorizontalNavigator(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box>
      <CssBaseline />
      <ButtonGroup variant='text' aria-label='text button group'>
        <Button onClick={() => navigate('/about')}>About</Button>
        <Button onClick={() => navigate('/portfolio')}>Portfolio</Button>
        <Button onClick={() => navigate('/contact')}>Contact</Button>
      </ButtonGroup>
    </Box>
  );
}
