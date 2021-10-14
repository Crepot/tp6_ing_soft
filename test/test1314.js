const assert = require("chai").assert;
const carrito = require("../src/carritos");

describe("checkInteger", function () {
  it("checkInteger should return: true", function () {
    let result = carrito.checkInteger(10);
    assert.isTrue(result);
  });
});

describe("checkTotalPrice", function () {
  it("checkTotalPrice should return: $1000", function () {
    let result = carrito.checkTotalPrice(2, 500);
    assert.equal(result, 1000);
  });
});
