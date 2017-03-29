import angular from 'angular';
import {store} from '../../react-app/store.js';
import {increment, decrement} from '../../react-app/reducer.js';

class Service {
  constructor($rootScope){
    this.$rootScope = $rootScope;
    this.count = store.getState();
  }

  broadcast(){
    this.$rootScope.$broadcast('countUpdated');
  }

  getCount(){
    return store.getState();
  }

  increment(){
    store.dispatch(increment());
    this.broadcast();
  }

  decrement(){
    store.dispatch(decrement());
    this.broadcast();
  }
}

Service.$inject = ['$rootScope'];

let module = angular
  .module('Service', [])
  .service('Service', Service);

export default module;