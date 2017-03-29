import angular from 'angular';
import 'angular-route';
import Page1Module from './page1/page1.js';
import Page2Module from './page2/page2.js';

let App = angular
  .module('app', ['ngRoute', Page1Module.name, Page2Module.name])
  .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/page1', {
        template: '<page1></page1>',
      })
      .when('/page2', {
        template: '<page2></page2>'
      })
      .otherwise({redirectTo: '/page1'});

    $locationProvider.html5Mode({enabled: true, requireBase: false});
  }]);

export default App;
