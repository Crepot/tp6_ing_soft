function checkStock(cantidad,stock){
    let result;
    if(cantidad > stock){
        result = false
        return result
    }else{
        result = {
            stock: 200,
            status: 'on stock'
        }
        return result; // Esto es un comentario
    }
}

function reduceStock(cantidad,stock){
    let result;
    if(cantidad > stock){
        return result
    }else{

        return result; // Esto es un comentario
    }
}

function addStock(cantidad,stock){
    let result = {};
    if(cantidad > stock){
        return result
    }else{

        return result; // Esto es un comentario
    }
}

module.exports ={checkStock,reduceStock,addStock}
