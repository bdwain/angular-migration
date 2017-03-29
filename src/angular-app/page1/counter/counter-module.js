import angular from 'angular';
import template from './counter.html';

let Counter = angular
    .module('Counter', [])
    .component('counter', {
      bindings: {
        count: '<',
        increment: '&',
        decrement: '&'
      },
      template
    });

export default Counter;
