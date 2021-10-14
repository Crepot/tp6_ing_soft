function checkInteger(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

function checkTotalPrice(cant, price) {
  let result = cant * price;
  return result;
}

module.exports = { checkInteger, checkTotalPrice };
