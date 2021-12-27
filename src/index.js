import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import cation_theme from './theme.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Cover from './pages/cover.js';
import About from './pages/about.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBRgl941vZtcCqIafszEPmFRFb9xKAOSDA',
  authDomain: 'cation-page.firebaseapp.com',
  databaseURL: 'https://cation-page-default-rtdb.firebaseio.com',
  projectId: 'cation-page',
  storageBucket: 'cation-page.appspot.com',
  messagingSenderId: '17626151667',
  appId: '1:17626151667:web:31559cc3809a0e75a29586',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={cation_theme}>
      <CssBaseline />
      <About />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
