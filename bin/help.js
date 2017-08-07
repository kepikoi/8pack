const chalk = require('chalk');
const {VERSIONS} = require('./versions');

const help = () =>
`
${chalk.bold('Summary')}: Utility that injects Lua source into a PICO-8 project. 
May also watch for file changes and create projects from scratch.

${chalk.bold('Usage')}: node 8pack.js [input] [output] [parameters]

${chalk.bold('Parameters')}:

${chalk.blue('-t, --template')}     use pico8 template file as output.
${chalk.blue('-w, --watch')}        watch input for changes
${chalk.blue('-h, --help ')}        show this page
 
${chalk.bold('Template Versions')}:
 
 ${Object.entries(VERSIONS).reduce(([pk,pv],[nk,nv]) => `* ${pk} => ${pv}\n * ${nk} => ${nv}`)} 

${chalk.bold('Examples')}:

node 8pack foo.lua
create foo.p8 from foo.lua using newest PICO-8 template

node 8pack foo.lua bar.p8  
inject foo.lua source into bar.p8. May overwrite bar.p8 if already exists.

node 8pack /somepath/foo.lua -w  
watch foo.lua for changes and write to /somepath/foo.bar

node 8pack foo.lua bar.p8 -v
create bar.p8 from foo.lua source using newest PICO-8 template and write to bar.p8
`;

module.exports = help();
