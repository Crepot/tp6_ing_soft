const assert = require("chai").assert;
const quantity2 = require("../quantity2");

describe("checkInteger", function () {
  it("checkInteger should return: true", function () {
    let result = quantity2.checkInteger(10);
    assert.isTrue(result);
  });
});

describe("checkTotalPrice", function () {
  it("checkTotalPrice should return: $1000", function () {
    let result = quantity2.checkTotalPrice(2, 500);
    assert.equal(result, 1000);
  });
});
