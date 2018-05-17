const chalk = require("chalk");
const version = require("../package").version;
const {VERSIONS} = require("./versions");

const help =
    `
${chalk.bold("Summary")}: Utility that injects Lua source into a PICO-8 project. 
May also watch for file changes and stitch modular lua.

${chalk.bold("Version")}: ${version}

${chalk.bold("Usage")}: 8pack input [output] [parameters]

${chalk.bold("Parameters")}:

${chalk.blue("-t, --template")}     use pico8 template file as output.
${chalk.blue("-w, --watch")}        watch input for changes
${chalk.blue("-h, --help ")}        show this page
 
${chalk.bold("Template Versions")}:
 
${Object.entries(VERSIONS)
        .filter(([nk])=> nk !== VERSIONS.NEWEST )
        .reduce((str,[nk]) => str+`* ${nk}\n`,"")} 
${chalk.bold("Examples")}:

8pack foo.lua
${chalk.italic("create foo.p8 from foo.lua using newest PICO-8 template")}

8pack foo.lua bar.p8  
${chalk.italic("inject foo.lua source into bar.p8. May overwrite bar.p8 if already exists")}

8pack /somepath/foo.lua -w  
${chalk.italic("watch foo.lua for changes and write to /somepath/foo.bar")}

8pack foo.lua bar.p8 --template 0.1.10c
${chalk.italic("create bar.p8 from foo.lua source using 0.1.10c PICO-8 template and write to bar.p8")}
`;

module.exports = help;