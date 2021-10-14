//JuanTroncoso
function checkSecurityCodeLength(codigo) {
  let result = codigo.toString().length;
  if (result == 3 || result == 4) {
    return true;
  } else {
    return false;
  }
}

//JuanTroncoso
function checkCardNumberLength(card) {
  let result = card.toString().length;
  if (result == 16) {
    return true;
  } else {
    return false;
  }
}

//AyrtonFunes
function checkCardNumber(cardNumber) {
  if (cardNumber.match(/^[0-9]+$/)) {
    return true;
  } else {
    return false;
  }
}
//NicolasPedernera
function validadFechaTarjeta(fechaVencimientoTarjeta) {
  const moment = require("moment")
  const date = moment(new Date());
  let fechaActual = date.format("MM" + "/" + "YY")  
  if (fechaVencimientoTarjeta>= fechaActual) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  checkSecurityCodeLength,
  checkCardNumber,
  checkCardNumberLength,
  validadFechaTarjeta
};
