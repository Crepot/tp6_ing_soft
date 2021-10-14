const assert = require('chai').assert;
const card = require('../src/tarjeta');
const x = 456;
const y = 45555;
const n1 = 1234567812345678
const n2 = 1234

//npm test

describe('Card number Length: \n', function(){
    let result;
    it('Card number Length should return true',function(){
        result = card.checkCardNumberLength(n1)          
        assert.isTrue(result,'La longitud del numero es incorrecta');
    }) 
    it('Card number Length should return false',function(){
        result = card.checkCardNumberLength(n2)        
        assert.isFalse(result,'La longitud del numero es incorrecta');
    })   
})

describe('Security Code Length: \n', function(){
    let result;
    it('Security Code Length should return true',function(){
        result = card.checkSecurityCodeLength(x) 
        assert.isTrue(result,'La longitud del codigo es incorrecta');
    }) 
    it('Security Code Length should return false',function(){
        result = card.checkSecurityCodeLength(y)        
        assert.isFalse(result,'La longitud del codigo es incorrecta');
    })   
})



