import angular from 'angular';
import controller from './page1-controller.js';
import template from './page1.html';

let Page1 = angular
    .module('Page1', [])
    .component('page1', {
      controller,
      template
    });


export default Page1;
