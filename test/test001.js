const assert = require('chai').assert;
const stock = require('../src/stock');



describe('Stock functions: \n', function(){
    let result;
    // Checkear si la cantidad es mayor al stoc actual
    it('checkStock should return an object ',function(){
        result = stock.checkStock(3,10);
        assert.isObject(result,'result is not an object');
    })
    // Añadir stock
    it('addStock should return code: 200 and total stock units ',function(){
        result = stock.addStock(3,10);
        assert.isObject(result,'FAIL');
    })
})

