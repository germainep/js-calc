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
