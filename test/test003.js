//PederneraNicolas
const assert = require('chai').assert;
const users = require('../src/users');
const tarjeta=require("../src/tarjeta")

describe("Validar Campos: \n", function(){
    let result;
    it("Los campos estan completos: True.",function(){
        result = users.validarCampos("NicolasPedernera",41084971,"nicopedernera12@gmail.com")
        assert.isTrue(result);
    })  
    it ("Todos los campos son nulos...",function(){
        result=users.validarCampos(null,null,null)
        assert.isFalse(result);
    })
})

describe("Validad fecha vencimiento de la tarjeta: \n",function(){
    let result;
    it("La fecha de vencimiento es correcta",function(){
        result=tarjeta.validadFechaTarjeta("10/21")
        assert.isTrue(result); 
    })
    
    it("La fecha de vencimiento debe ser mayor al actual", function(){
        result=tarjeta.validadFechaTarjeta("08/20")
        assert.isFalse(result);   
    })

})