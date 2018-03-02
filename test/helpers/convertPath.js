/* eslint-disable no-useless-escape,no-undef */
const
    {convertPath} = require("../../src/helpers")
    , expect = require("chai").expect
    , path = require("path");

describe("convertPath", () => {
    const
        root = path.resolve("./samplecart/sample.lua")
        , challenge = ["./foo", "./foo/bar", "../foo/bar", "foo.bar"]
        , results = [path.resolve("./samplecart/foo.lua"),
            path.resolve("./samplecart/foo/bar.lua"),
            path.resolve("./foo/bar.lua"),
            path.resolve("./samplecart/foo.bar.lua")];

    challenge.map((f, i) => {
        it("should return a fs path for " + f, () => {
            expect(convertPath(root, f)).to.eq(results[i]);
        });
    });
});
