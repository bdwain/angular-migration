import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.js';

import 'img/favicon.ico'; //until webpack has a better way to include it in the bundle

ReactDOM.render(
  <App />,
  document.getElementById('root')
);