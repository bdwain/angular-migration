import 'babel-polyfill';

import angular from 'angular';
import AppModule from './angular-app/app.js';

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(document, [AppModule.name]);
  });


import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './react-app/routes.js';
import {store} from './react-app/store.js';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('reactRoot')
);
