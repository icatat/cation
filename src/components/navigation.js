import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function HorizontalNavigator() {
  return (
    <Box>
      <ButtonGroup variant='text' aria-label='text button group'>
        <Button href='/'>Main</Button>
        <Button href='/about'>About</Button>
        <Button href='/portfolio'>Portfolio</Button>
        <Button href='/contact'>Contact</Button>
      </ButtonGroup>
    </Box>
  );
}
