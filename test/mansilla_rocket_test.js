const MansillaRocketTest = artifacts.require("MansillaRocketTest");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MansillaRocketTest", function (/* accounts */) {
  it("should assert true", async function () {
    await MansillaRocketTest.deployed();
    return assert.isTrue(true);
  });
});
