import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import cation_theme from '../theme.js';
import { makeStyles } from '@material-ui/core/styles';

var navigation = {
  color: cation_theme.palette.secondary.main,
};
export default function HorizontalNavigator(props) {
  return (
    <Box>
      <ButtonGroup
        style={navigation}
        variant='text'
        aria-label='text button group'
      >
        <Button href='/'>Main</Button>
        <Button href='/about'>About</Button>
        <Button href='/portfolio'>Portfolio</Button>
        <Button href='/contact'>Contact</Button>
      </ButtonGroup>
    </Box>
  );
}
