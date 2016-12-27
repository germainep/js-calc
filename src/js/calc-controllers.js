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
