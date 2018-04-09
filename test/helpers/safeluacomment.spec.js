/* eslint-disable no-useless-escape,no-undef */
const {safeLuaComment} = require("../../src/helpers");
const expect = require("chai").expect;


describe("safeLuaComment", () => {
    const randomstring = require("random-string");
    const validLuaComment = /[\w\n.._/\\]/;
    let rndstr;
    const iterations = 10;
    beforeEach(function () {
        rndstr = randomstring({length: 100, special: true, letters: true, numeric: true});
        console.log("testing lua comment string", rndstr);
    });
    describe("test " + iterations + " random strings", () => {
        let i = 0;
        while (i < iterations) {
            it("should return a valid lua comment for random string " + i, () => {
                const safeString = safeLuaComment(rndstr);
                expect(safeString).to.match(validLuaComment);
                console.log("safe lua comment", safeString);
            });
            i++;
        }
    });

});
