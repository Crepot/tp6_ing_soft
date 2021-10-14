const assert = require('chai').assert;
const stock = require('../src/stock');



describe('Stock functions: \n', function(){
    let result;
    it('checkStock should return code: 200 and status: on stock ',function(){
        result = stock.checkStock(3,10);
        assert.isObject(result,'result is not an object');
    })
    it('addStock should return code: 200 and total stock units ',function(){
        result = stock.addStock(3,10);
        assert.isObject(result,'FAIL');
    })
})


describe('OTHER functions: \n', function(){
    let result;
    it('other functios should return something 01',function(){
        result = stock.checkStock(3,10);
        assert.isObject(result,'FAIL');
    })
    it('other functios should return something 02',function(){
        result = stock.addStock(3,10);
        assert.isObject(result,'FAIL');
    })
})