//PederneraNicolas
function validarCampos(NombreApellido,DNI,email){
    let result; 
    //Aca realizamos la validacion de los campos si estan vacios.   
    if(NombreApellido===null || DNI.length===null || email.length===null){
        result= false ; 
        return result ; 
    }else{
        result=true;
        return result ;
    }
}
module.exports= {validarCampos}; 