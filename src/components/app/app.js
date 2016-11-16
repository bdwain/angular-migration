import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import Page from '../page/page.js';

/* istanbul ignore next */
const App = function(){
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ Page } />
      <Route path="*">{/*shows nothing*/}</Route>
    </Router>
  );
};

export default App;