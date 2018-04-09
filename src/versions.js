const
    fs = require("fs")
    , path = require("path")
    , assert = require("assert")
    , VERSIONS = {
        V0_1_10C: "0.1.10c.p8"
        , V0_1_11G: "0.1.11g.p8"
    }
;

VERSIONS.NEWEST = VERSIONS.V0_1_11G;

module.exports = {
    VERSIONS,
    /**
     * get filepath pico8 template for version name
     * @param {String|Boolean} [version=true] - pico8 project template version. Provide "true" for newest template.
     * @return {String} path - of the template file
     */
    getVersion: (version = true) => {
        const _version =
            version === true ?
                VERSIONS.NEWEST :
                version; //use newest version if  the template argument is supplied without value
        assert(Object.values(VERSIONS).find(v => v === _version), `version ${_version} does not exist`);
        const filePath = path.resolve("./templates", _version);
        assert.doesNotThrow(() => fs.existsSync(filePath), `couldn't locate template for version ${_version} allthough it should exist`);
        return filePath;
    }
};