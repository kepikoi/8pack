local libab = require('./liba');
local libc = require('./lualib/libc');
local libd = require('./lualib/libd');

function _init()
    state = {
        hi = "hello world",
        i = 0,
        someFunct = function()
            return 1
        end,
        someOtherFunct = function()
            return 0
        end
    }
end

function _update60()
    state.i = state.i + libd(libc.c);
end

function _draw()
    cls();
    print(libab.foo() .. ' ' .. libab.flrdlib.flrd(state.i, 1), 0, 116, 7);
end
