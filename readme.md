8pack
=====

## Utility that injects Lua source into a PICO-8 project. 

##Installation
````bash
npm install 8pack -g
````

##Examples

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
8pack tests/sample.lua /tests/foo.p8 -v 0.1.10c
````


##ToDos
* write tests