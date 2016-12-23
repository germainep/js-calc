Calc.controller('ScreenController',['$scope', 'KeymapService', function($scope, KeymapService){
  $scope.screen = 0;
  var array = [];
document.addEventListener('click', function(event) {
  array.push(KeymapService[event.target.id]);
  console.log(array);
});
}]);
