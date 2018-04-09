8pack
====================

Utility that injects modular Lua source into a [PICO-8](https://www.lexaloffle.com/pico-8.php) project. 
---

## Installation
````bash
npm install 8pack -g
````

## Examples

Create *sample.lua.p8* from *sample.lua* using newest PICO-8 template
````bash
8pack tests/sample.lua
````

Inject *sample.lua* source into *foo.p8*. Will overwrite *foo.p8* if already exists.
````bash
8pack tests/sample.lua foo.p8  
````

Watch */tests/sample.lua* for changes and overwrite to */tests/sample.lua.p8*
````bash
8pack /tests/sample.lua -w  
````

Write */tests/sample.lua* source to */tests/foo.p8* using PICO-8 0.1.10c template 
````bash
8pack tests/sample.lua /tests/foo.p8 --template 0.1.10c
````

## Modules
Lua modules can be imported via ```require('./libs/lib')``` and will be injected to the top of the p8 file as global variables. 
Each module must return a table, variable or a function. Use node.js style path prefixes to access parent directories: ``require('../lib')``

*main.lua:*
```lua
local liba = require('./liba');

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
    state.i = state.i + rnd(liba.iterator);
end

function _draw()
    cls();
    print(liba.foo() .. ' ' .. state.i, 0, 116, 7);
end
```

*./liba.lua module:*
```lua
local lib = {
    foo = function()
        return 'hello world'
    end,
}
lib.iterator = 1

return lib;
```

## JetBrains Watcher Arguments
Install 8pack globally and add 8pack bin as watcher with following arguments for on-the-fly injection 
````
$ProjectFileDir$/$FileName$ $ProjectFileDir$/$FileNameWithoutExtension$.p8
````
e.g. for Lua watcher in PhpStorm 2017.3 on Windows 10 (I'm using the official Lua plugin)
![Screenshot](https://github.com/kepikoi/8pack/raw/master/screenshots/jetbrains.png)


## ToDos
* Circular dependancy checks 
* Module order checks
* Prevent pedundant imports
* Honor token limits
* Compress code