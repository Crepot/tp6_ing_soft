
function test001(cantidad,stock){
    if(cantidad > stock){
        cantidad
        return {code: 210,
                err: 'out of stock'
        }
    }else{
        console.log('hola');
        console.log('CREPOT');
        return cantidad;// Esto es un comentario
    }
}

module.exports = {test001}