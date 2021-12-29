import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from '../reportWebVitals';
import cation_theme from '../theme.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Cover from './cover.js';
import About from './about.js';
import Head from 'next/head';

export default class extends Component {
  render() {
    return <Cover />;
  }
}
