const
    fs = require('fs')
    , encoding = 'utf8'
    , modules = {root: undefined}
    , {safeLuaComment, convertPath, mKey} = require('./helpers');
;

const newModuleEntry = (module, path) => ({module, path});

module.exports = inputFilePath => {

    /**
     * read lua source, find and cache modules. Replace import literals with module variables
     * @param inputModulePath
     * @param {Boolean} isRoot - is module root module
     */
    const importsInFile = (inputModulePath, isRoot = false) => {
        let requires;
        //get input source
        if (!fs.existsSync(inputModulePath)) {
            throw new Error('couldn\`t locate lua module under ' + inputModulePath);
        }
        let src = fs.readFileSync(inputModulePath, encoding);
       console.log('processing submodule',inputModulePath);
        //build hashname for current file.
        const moduleKey = mKey(inputModulePath,isRoot);

        //require literal detection rules
        const importsRegex = /require\(['"]([\w\/\.]+)['"]\)/g;
        //find modules
        while ((requires = importsRegex.exec(src)) !== null) {
            const subModulePath = convertPath(inputModulePath, requires[1]);

            //build hashname for nested module.
            const submoduleKey = mKey(subModulePath);
            // replace module require in src file with nested hashname variable
            src = src.replace(requires[0], submoduleKey+'()');

            //recursvice call on nested imports
            importsInFile(subModulePath);

        }
        //cache module source
        modules[moduleKey] = newModuleEntry(src, inputModulePath);
    };

     importsInFile(inputFilePath, true);
};

module.exports.convertInjects = () => Object
    .entries(modules)
    //do not process root module
    .filter(([key, value]) => key !== mKey.rootString)
    //build submodules
    .reduce((outString, [key, value]) => outString +
        `--------------sub-module-${safeLuaComment(value.path)}---------------------
${key} = function()
    ${value.module}
end
`, '')
    //append root module
    + `
--------------root-module---------------------
${modules[mKey.rootString].module}`;