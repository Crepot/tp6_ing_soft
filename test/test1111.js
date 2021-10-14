const assert = require('chai').assert;
const otros = require('../src/otros');

const brandCreditCard = otros.tarjetaBanco('Banelco');
const brandCreditCard2 = otros.tarjetaBanco('Mastercard');


//npm test


describe('credit Card Brand \n' , function(){
        
    it('banco aceptado',function(){
        assert.equal(brandCreditCard, 'Banelco');
        
    });



    it('banco no aceptado',function(){
        assert.notEqual(brandCreditCard2, 'Banelco');
        
    });
});





//results

const carroVacio =otros.miCarrito(0);
const carroConArticulo = otros.miCarrito(1);

describe('carrito cantidad: \n', function(){
    

    it('carroVacio ',function(){
        assert.isBelow(carroVacio,1);
    })

    it('carro no Vacio ',function(){
        assert.isBelow(carroConArticulo,5);  
        console.log('puede entrar al carrito ')

    })

})



