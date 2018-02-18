8pack
=====

## Utility that injects Lua source into a PICO-8 project. 

##Installation
````bash
npm install 8pack -g
````

##Examples

Create foo.p8 from foo.lua using newest PICO-8 template
````bash
8pack foo.lua
````

Inject *foo.lua* source into *bar.p8*. Will overwrite *bar.p8* if already exists.
````bash
8pack foo.lua bar.p8  
````

Watch foo.lua for changes and write to /somepath/foo.bar
````bash
8pack /somepath/foo.lua -w  
````

Create bar.p8 from foo.lua source using newest PICO-8 template and write to bar.p8
````bash
8pack foo.lua bar.p8 -v
````


##ToDos
* write tests