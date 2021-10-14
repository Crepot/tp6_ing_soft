function checkSecurityCodeLength(codigo){
    let result = codigo.toString().length;
    if((result == 3) || (result == 4)){
        return true;
    }else{
        return false;
    }
}

function checkCardNumberLength(card){
    let result = card.toString().length;
    if(result == 16){
        return true;
    }else{
        return false;
    }
}
module.exports ={checkSecurityCodeLength,checkCardNumberLength}