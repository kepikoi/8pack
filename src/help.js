const chalk = require('chalk');
const {VERSIONS} = require('./versions');

const help = () =>
`
${chalk.bold('Summary')}: Utility that injects Lua source into a PICO-8 project. 
May also watch for file changes and create projects from scratch.

${chalk.bold('Usage')}: 8pack input [output] [parameters]

${chalk.bold('Parameters')}:

${chalk.blue('-t, --template')}     use pico8 template file as output.
${chalk.blue('-w, --watch')}        watch input for changes
${chalk.blue('-h, --help ')}        show this page
 
${chalk.bold('Template Versions')}:
 
${Object.entries(VERSIONS)
    .filter(([nk,nv])=> nk !== 'newest' )
    .reduce((str,[nk,nv]) => str+`* ${nk}\n`,'')} 
${chalk.bold('Examples')}:

node 8pack foo.lua
create foo.p8 from foo.lua using newest PICO-8 template

node 8pack foo.lua bar.p8  
inject foo.lua source into bar.p8. May overwrite bar.p8 if already exists.

node 8pack /somepath/foo.lua -w  
watch foo.lua for changes and write to /somepath/foo.bar

node 8pack foo.lua bar.p8 --template 0.1.10c
create bar.p8 from foo.lua source using 0.1.10c PICO-8 template and write to bar.p8
`;

module.exports = help();
