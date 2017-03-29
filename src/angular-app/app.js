import angular from 'angular';
import 'angular-route';
import Page1Module from './page1/page1-module.js';

let App = angular
  .module('app', ['ngRoute', Page1Module.name])
  .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/page1', {
        template: '<page1></page1>',
      })
      .otherwise({redirectTo: '/page1'});

    $locationProvider.html5Mode({enabled: true, requireBase: false});
  }]);

export default App;
