const assert = require('chai').assert;
const otros = require('../src/otros');

//results

const carroVacio =otros.miCarrito(0);
const carroConArticulo = otros.miCarrito(1);

describe('carrito cantidad: \n', function(){
    

    it('carroVacio ',function(){
        assert.isBelow(carroVacio,1);
    })

    it('carro no Vacio ',function(){
        assert.isAbove(carroConArticulo,0);  //
    })

})


//npm test

const brandCreditCard = otros.tarjetaBanco('Banelco');
const brandCreditCard2 = otros.tarjetaBanco('Mastercard');

describe('credit Card Brand', function(){
        
    it('banco aceptado',function(){
        assert.equal(brandCreditCard, 'Banelco');
    });



    it('banco aceptado',function(){
        assert.equal(brandCreditCard2, 'Banelco');
    });
});