import angular from 'angular';
import template from './pizza.html';
import controller from './pizza-controller.js';

let Pizza = angular
    .module('Pizza', [])
    .component('pizza', {
      bindings: {
        count: '<'
      },
      controller,
      template
    });

export default Pizza;
