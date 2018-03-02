--floor to set amount of deimals
--@param {Float value - number to apply floor to
--@param {Integer} d - amount of decimals to round the value to
return {
    flrd = function(value, d)
        return flr(value * (10 ^ d)) / (10 ^ d)
    end
}
