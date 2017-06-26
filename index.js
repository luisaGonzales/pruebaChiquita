var assert = require("assert");

function multiplicarNum (arr, num){
  var res = 0;
  if (Array.isArray(arr)){
    res = arr.reduce(function(valorAnterior, valorActual){
      return valorAnterior * valorActual;
    });
  }
  if (!isNaN(arr)){
    res = arr;
  }
  if (!isNaN(num)){
    res = res * num;
  }
  return res;
}

describe("Ejercicio 1", function(){
    it("Prueba [2,3] y 10", function(){
      assert.equal(60, multiplicarNum([2,3],10));
    });
});
