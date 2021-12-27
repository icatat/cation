import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import Cover from './pages/cover.js';
import Contact from './pages/contact.js';
import Portfolio from './pages/portfolio.js';
import About from './pages/about.js';

import { Switch } from '@material-ui/core';
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  // const routes = useRoutes([
  //     { path: "/", element: <Cover /> },
  //     { path: "/main", element: <Cover /> },
  //     { path: "/portfolio", element: <Portfolio /> },
  //     { path: "/about", element: <About /> },
  //     { path: "/contact", element: <Contact /> },

  //   ]);
  // return routes;
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Cover} />
      <Route exact path='/main' component={Cover} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  </BrowserRouter>
);
