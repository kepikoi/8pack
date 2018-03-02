/* eslint-disable no-useless-escape,no-undef */
const {removeFileExt} = require("../../src/helpers");
const expect = require("chai").expect;

describe("removeFileExt", () => {

    const cases = ["foo.bar", "foo.bar.baz", ".foo"];
    const results = ["foo", "foo.bar", ""];
    cases.map((f, i) => {
        it("should remove the file exension", () => {
            expect(removeFileExt(f)).to.eq(results[i]);
        });
    });

});
