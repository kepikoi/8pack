/**
 * removes last suffix after dot
 * @param {String} name - filename
 */
const removeFileExt = name => name.split('.').filter((f, i, a) => i !== a.length - 1).join('.');

/**
 * replaces unsafe chars from string that may disrupt a comment line in lua
 * @param {String} comment
 * @return {String} safeComment
 */
const safeLuaComment = (comment) => comment.replace(/[^\w\n._/\\:]/g, '_');


/**
 * returns full fs path for lua module/require string inside the root directory
 * @param {String} root - root directory where the lua file
 * @param {String} luaPath - require notation for lua module
 * @return {String} path
 */
convertPath = (root, luaPath) => {
    const
        fs = require('fs')
        , path = require('path')
    ;
    const rootDir = path.dirname(root);
    const luaFilePath = path.join.apply(null, [rootDir, ...luaPath.split('/')]);
    return luaFilePath + '.lua';
};

/**
 * converts module path to a hash string
 * @param {String} inputModulePath
 * @param {Boolean} isRoot - is module the root module
 * @return {String} mKey - path string hash
 */
const mKey = (inputModulePath, isRoot) => {
    const hash = require('md5');
    return isRoot ? mKey.rootString : 'm' + hash(inputModulePath);
};
mKey.rootString = 'root';


module.exports = {
    removeFileExt,
    safeLuaComment,
    convertPath,
    mKey
};