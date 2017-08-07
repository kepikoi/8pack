const fs = require('fs');
const path = require('path');
const assert = require('assert');

const VERSIONS = {
    NEWEST: '0.1.10c.p8',
    '0.1.10c.p8': '0.1.10c.p8'
};


module.exports = {
    VERSIONS,
    /**
     * get filepath pico8 template for version name
     * @param {String|Boolean} version - pico8 project template version. Provide "true" for newest template.
     * @return {String} path - of the template file
     */
    getVersion: version => {
        const _version =
            typeof version === 'boolean' ?
                VERSIONS.NEWEST :
                version === undefined ?
                    VERSIONS.NEWEST :
                    version; //use newest version if  the template argument is supplied without value
        assert(Object.keys(VERSIONS).find(v => v === _version), `version ${_version} does not exist`);
        const filePath = path.resolve('./templates', _version);
        assert.doesNotThrow(() => fs.existsSync(filePath), `couldn't locate template for version ${_version} allthough it should exist`);
        return filePath;
    }
};