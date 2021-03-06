const assert = require("chai").assert;
const tarjeta = require("../src/tarjeta");
const carrito = require("../src/carrito");

describe("checkCardNumber \n", function () {
  it("checkCardNumber should return: true", function () {
    let result = tarjeta.checkCardNumber("141516171819");
    assert.isTrue(result);
  });
});

describe("checkQuantity \n", function () {
  it("checkQuantity should return: true", function () {
    let result = carrito.checkQuantity("10");
    assert.isTrue(result);
  });
});
