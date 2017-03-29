import angular from 'angular';
import 'angular-route';
import Page1Module from './page1/page1-module.js';
import {browserHistory} from 'react-router';

let App = angular
  .module('app', ['ngRoute', Page1Module.name])
  .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/page1', {
        template: '<page1></page1>',
      })
      .when('/page2', {})
      .otherwise({redirectTo: '/page1'});

    $locationProvider.html5Mode({enabled: true, requireBase: false});
  }])
  .run(['$rootScope', '$location', ($rootScope, $location) => {
    $rootScope.$on('$locationChangeSuccess', () => {
      browserHistory.push($location.url());
    });
  }]);

export default App;
