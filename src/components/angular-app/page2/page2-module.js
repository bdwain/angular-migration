import angular from 'angular';
import controller from './page2-controller.js';
import template from './page2.html';
import ServiceModule from '../service/service.js';
import PizzaModule from './pizza/pizza-module.js';

let Page2 = angular
    .module('Page2', [ServiceModule.name, PizzaModule.name])
    .component('page2', {
      controller,
      template
    });


export default Page2;
