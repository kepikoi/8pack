local lib = {
    foo = function()
        return 'hello world'
    end
}

lib.flrdlib = require('./libb');

return lib;