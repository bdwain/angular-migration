import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import Page from './page/page.js';

const App = function(){
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ Page } />
    </Router>
  );
};

export default App;