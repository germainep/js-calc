var Calc = angular.module('Calc', []);

Calc.controller('ScreenController',['$scope', 'KeymapService', 'ScreenService', function($scope, KeymapService, ScreenService){
  $scope.screen = 0;
  document.addEventListener('click', function(event) {
    console.log(event.target.id);
    if(event.target.id === 'keyPlus'){
      ScreenService.operation(event);
      console.log(ScreenService.toScreen);
      $scope.screen = ScreenService.toScreen;
      $scope.$digest();

    } else if(event.target.id === 'keyMinus') {
      ScreenService.operation(event);
      $scope.screen = ScreenService.toScreen;
      $scope.$digest();

    }else if(event.target.id === 'keyMultiply') {
      ScreenService.operation(event);
      $scope.screen = ScreenService.toScreen;
      $scope.$digest();

    }else if(event.target.id === 'keyDivide') {
      ScreenService.operation(event);
      $scope.screen = ScreenService.toScreen;
      $scope.$digest();

    }else if(event.target.id === 'keyClear') {
    ScreenService.calMem = [];
    ScreenService.temp = [];
    ScreenService.toScreen = 0;
    $scope.screen = ScreenService.toScreen;
    $scope.$digest();
    console.log(ScreenService);

  }else if(event.target.id === 'keyEqual' && ScreenService.calMem.length === 2){
    console.log(ScreenService.toScreen);
    ScreenService.result = eval('' + ScreenService.calMem[0] + ScreenService.calMem[1] + ScreenService.toScreen + '');
    ScreenService.calMem[0] = ScreenService.result;
    ScreenService.calMem.splice(1,1);
    ScreenService.temp= [];
    ScreenService.toScreen = ScreenService.result;
    $scope.screen = ScreenService.toScreen;
    console.log(ScreenService.calMem);
    $scope.$digest();

  }else {
    ScreenService.temp.push(KeymapService[event.target.id]);
    ScreenService.toScreen = parseFloat(ScreenService.temp.join(''));
    $scope.screen = ScreenService.toScreen;
    console.log(ScreenService.toScreen);
    $scope.$digest();
  }
  })
}]);

Calc.service('ScreenService',['$rootScope', 'KeymapService', function($rootScope, KeymapService){
  this.calMem = [];
  this.toScreen = 0;
  this.result = 0;
  this.temp = [];
  this.operation = function(event){
    if(this.calMem.length === 2){

      this.result = eval('' + this.calMem[0] + this.calMem[1] + this.toScreen + '');
      this.calMem[0] = this.result;
      this.calMem[1] = KeymapService[event.target.id];
      this.temp= [];
      this.toScreen = this.result;

      $rootScope.$digest();
      }else {
        this.temp = [];
        this.calMem[0] = this.toScreen;
        this.calMem[1] = KeymapService[event.target.id];
        console.log(this.calMem);
      }
  };
}]);

Calc.factory('KeymapService', [function() {
    var allowedTargets = {
      keyClear: 'clear',
      keyMinus: '-',
      keyPlus: '+',
      keyDivide: '/',
      keyMultiply: '*',
      keyDecimal: '.',
      key1: 1,
      key2: 2,
      key3: 3,
      key4: 4,
      key5: 5,
      key6: 6,
      key7: 7,
      key8: 8,
      key9: 9,
      key0: 0
    }
    return allowedTargets
}]);
