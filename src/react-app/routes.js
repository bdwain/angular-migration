import React from 'react';
import { Route } from 'react-router';
import Page2 from './page2/page2.js';

export default (
  <Route path="/">
    <Route path="page2" component={ Page2 } />
    <Route path="*" />
  </Route>
);
