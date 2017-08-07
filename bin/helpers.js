/**
 * removes last suffix after dot
 * @param {String} name - filename
 */
const removeFileExt = name => name.split('.').filter((f, i, a) => i !== a.length - 1).join('.');

module.exports = {
    removeFileExt
};