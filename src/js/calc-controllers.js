Calc.controller('ScreenController',['$scope', 'KeymapService', 'ScreenService', function($scope, KeymapService, ScreenService){
  $scope.screen = 0;
  document.addEventListener('click', function(event) {
    if(event.target.id === 'keyPlus'){
      ScreenService.operation(event);
      $scope.screen = ScreenService.toScreen;
      ScreenService.decimal = false;
      $scope.$digest();

    } else if(event.target.id === 'keyMinus') {
      ScreenService.operation(event);
      $scope.screen = ScreenService.toScreen;
      ScreenService.decimal = false;
      $scope.$digest();

    }else if(event.target.id === 'keyMultiply') {
      ScreenService.operation(event);
      $scope.screen = ScreenService.toScreen;
      ScreenService.decimal = false;
      $scope.$digest();

    }else if(event.target.id === 'keyDivide') {
      ScreenService.operation(event);
      $scope.screen = ScreenService.toScreen;
      ScreenService.decimal = false;
      $scope.$digest();

    }else if(event.target.id === 'keyClear') {
    ScreenService.calMem = [];
    ScreenService.temp = [];
    ScreenService.toScreen = 0;
    ScreenService.decimal = false;
    $scope.screen = ScreenService.toScreen;
    $scope.$digest();

  }else if(event.target.id === 'keyDecimal') {
    if(!ScreenService.decimal){
    ScreenService.temp.push('.');
    ScreenService.decimal = true;
    }

  }else if(event.target.id === 'keyEqual' && ScreenService.calMem.length === 2){
    (ScreenService.toScreen);
    ScreenService.result = eval('' + ScreenService.calMem[0] + ScreenService.calMem[1] + ScreenService.toScreen + '');
    ScreenService.calMem[0] = ScreenService.result;
    ScreenService.calMem.splice(1,1);
    ScreenService.temp= [];
    ScreenService.decimal = false;
    ScreenService.toScreen = ScreenService.result;
    $scope.screen = ScreenService.toScreen;
    $scope.$digest();

  }else if(KeymapService.allowedTargets.numbers[event.target.id]){
    ScreenService.temp.push(KeymapService.allowedTargets.numbers[event.target.id]);
    ScreenService.toScreen = ScreenService.parser(ScreenService.temp);
    $scope.screen = ScreenService.toScreen;
    $scope.$digest();
  }
  })
}]);
