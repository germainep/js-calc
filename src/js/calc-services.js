Calc.factory('ScreenService',[function(){
  return {
    total: 0,
    add: function(){

    }
  }
}]);

Calc.factory('KeymapService', [function() {
    var allowedTargets = {
      keyClear: 'clear',
      keyMinus: '-',
      keyPlus: '+',
      keyDivide: '/',
      keyMulti: '*',
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
