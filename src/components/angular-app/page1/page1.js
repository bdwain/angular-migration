import angular from 'angular';
import controller from './page1-controller.js';
import template from './page1.html';
import ServiceModule from '../service/service.js';
import CounterModule from './counter/counter.js';

let Page1 = angular
    .module('Page1', [ServiceModule.name, CounterModule.name])
    .component('page1', {
      controller,
      template
    });


export default Page1;
