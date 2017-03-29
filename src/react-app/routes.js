import React from 'react';
import { Route } from 'react-router';
import Page1 from './page1/page1.js';
import Page2 from './page2/page2.js';

export default (
  <Route path="/">
    <Route path="page1" component={ Page1 } />
    <Route path="page2" component={ Page2 } />
    <Route path="*" component={Page1} />
  </Route>
);
