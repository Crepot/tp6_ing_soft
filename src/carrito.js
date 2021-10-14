function checkQuantity(cant) {
  if (cant.match(/^[0-9]+$/)) {
    return true;
  } else {
    return false;
  }
}
module.exports = { checkQuantity };
