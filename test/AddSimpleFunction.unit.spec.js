var expect    = require("chai").expect;
var AddSimpleFunction = require("../app/AddSimpleFunction");

describe("Simple addition", function () {

    describe("describe what the test do here...", function () {

        it("describe..", function () {
            var a = 2;
            var b = 4;

            var result = AddSimpleFunction.add(2,4);

            expect(result).to.equal(6);

        });
    });
});
