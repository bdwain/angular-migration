import angular from 'angular';

class Service {
  constructor($rootScope){
    this.$rootScope = $rootScope;
    this.count = 0;
  }

  broadcast(){
    this.$rootScope.$broadcast('countUpdated');
  }

  getCount(){
    return this.count;
  }

  increment(){
    this.count++;
    this.broadcast();
  }

  decrement(){
    this.count--;
    this.broadcast();
  }
}

Service.$inject = ['$rootScope'];

let module = angular
  .module('Service', [])
  .service('Service', Service);

export default module;