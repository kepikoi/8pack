/* eslint-disable no-undef */
const help = require("../src/help");
const expect = require("chai").expect;

describe("Help Tests", () => {
    it("should return a long help string", () => {
        expect(help.length).to.be.at.least(100);
    });
});