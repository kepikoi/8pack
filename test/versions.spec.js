/* eslint-disable no-undef,no-unused-vars */
const
    versions = require("../src/versions")
    , expect = require("chai").expect
    , path = require("path");

describe("versions", () => {
    it("VERSIONS should contain 'NEWEST'", () => {
        expect(versions.VERSIONS).to.include.keys("NEWEST");
    });
    it("should return NEWEST version for a boolean argument", () => {
        expect(versions.getVersion(true)).to.eq(path.resolve(__dirname, "..", "templates", versions.VERSIONS.NEWEST));
    });
    Object.entries(versions.VERSIONS)
        .filter(([k, v]) => k !== "NEWEST")
        .map(([k, v]) => {
            it("should return matching version for " + v, () => {
                expect(versions.getVersion(v)).to.eq(path.resolve(__dirname, "..", "templates", v));
            });
        });

    it("should throw for nonexistent version", () => {
        expect(() => versions.getVersion("0.1.1a.p8")).to.throw();
    });
});
