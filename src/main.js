import 'babel-polyfill';

import angular from 'angular';
import AppModule from './components/angular-app/app.js';

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(document, [AppModule.name]);
  });