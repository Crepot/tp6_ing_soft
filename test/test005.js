const assert = require("chai").assert;
const carrito = require("../src/carrito");

describe("verificarNumeroEntero \n", function () {
  it("verificarNumeroEntero debe retornar: true", function () {
    let result = carrito.verificarNumeroEntero(10);
    assert.isTrue(result);
  });
});

describe("verificarPrecioTotal \n", function () {
  it("verificarPrecioTotal debe retornar: $1000", function () {
    let result = carrito.verificarPrecioTotal(2, 500);
    assert.equal(result, 1000);
  });
});
