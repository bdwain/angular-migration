class Controller{
  constructor($scope, Service){
    this.Service = Service;
    
    this.updateCount();
    $scope.$on('countUpdated', () => this.updateCount());
  }

  updateCount(){
    this.count = this.Service.getCount();
  }
}

Controller.$inject = ['$scope', 'Service'];

export default Controller;