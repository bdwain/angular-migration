import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './components/app/store.js';
import App from './components/app/app.js';

import 'img/favicon.ico'; //until webpack has a better way to include it in the bundle

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);