/* eslint-disable no-useless-escape,no-undef */
const {mKey} = require("../../src/helpers");
const expect = require("chai").expect;

describe("mKey", () => {
    it("should return hash for input path starting with 'm' and 32 hex", () => {
        expect(mKey(__dirname))
            .to.match(/m[\w]{32}/);
    });
    it("should return root string for function call with true root parameter", () => {
        expect(mKey(__dirname, true))
            .to.equal(mKey.rootString);
    });
});
