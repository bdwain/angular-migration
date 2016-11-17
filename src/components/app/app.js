import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store.js';

import Page from '../page/page.js';

const store = configureStore();

/* istanbul ignore next */
const App = function(){
  return (
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path="/" component={ Page } />
        <Route path="*" />
      </Router>
    </Provider>
  );
};

export default App;