//AyrtonFunes
function checkQuantity(cant) {
  if (cant.match(/^[0-9]+$/)) {
    return true;
  } else {
    return false;
  }
}

//MartinMazzeo
function verificarNumeroEntero(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

//MartinMazzeo
function verificarPrecioTotal(cant, precio) {
  let result = cant * precio;
  return result;
}

module.exports = { checkQuantity, verificarNumeroEntero, verificarPrecioTotal };
