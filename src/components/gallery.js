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
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import StepButton from '@mui/material/StepButton';

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
  var docsKeys = [];
  Object.assign(docsKeys, Object.keys(docs));
  docsKeys.reverse();
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step) => {
    setActiveStep(step);
  };

  return (
    <Container>
      <Stepper nonLinear activeStep={activeStep} orientation='vertical'>
        {docsKeys.map((year, index) => (
          <Step key={year}>
            <StepButton
              icon={<Typography variant='h5'>{year}</Typography>}
              color='inherit'
              onClick={() => handleStep(index)}
            ></StepButton>
            <StepContent>
              <YearGrid artwork={docs[year]}></YearGrid>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
}
