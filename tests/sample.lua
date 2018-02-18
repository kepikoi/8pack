function _init()
    state = {
        hi = "hello world",
        i = 0
    }
end

function _update60()
    state.i = state.i + 1;
end

function _draw()
    cls();
    print(state.hi .. ' ' .. state.i, 0, 116, 7);
end
