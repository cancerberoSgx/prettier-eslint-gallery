// cmd line entry point
var args = require('yargs-parser')(process.argv.slice(2))
var configUtils = require('./files')
const shell = require('shelljs')
const path = require('path')
const tool = require('./tool').tool

if(args.listStyles){
  console.log('Available Styles: ', configUtils.getAvailableStyles().join(', '))
  process.exit(0)
}

if(args.listModes){
  console.log('Available Modes: ', configUtils.getAvailableModes().join(', '))
  process.exit(0)
}

if(args.help){
  var help = {
    '--input': 'input file',
    '--style': 'one of the available styles, example: standard, airbnb, google, etc',
    '--output': 'output file',
    '--debug': 'TODO',
    '--mode': 'TODO',
    '--list-styles': 'list available styles',
    '--list-modes': 'list available modes'
  }
  var helpStr = JSON.stringify(help, 0, 2)
  console.log(`
Usage: 
 $ tools --input src/some.js --output src/some-formatted.js --style airnbn
Options: 
${helpStr}
`)
  process.exit(0)
}


// main !
var config = {
  input: args.input,
  style: args.style,
  output: args.output,
  debug: args.debug,
  mode: args.mode
}


if (!config.input) {
  console.log('Invalid call you must provide --input, aborting')
  process.exit(1)
}

if (!config.mode||configUtils.getAvailableModes().indexOf(config.mode)==-1) {
  console.log(`Invalid mode ${config.mode}. Aborting`)
  process.exit(1)
}

var eslintPath = configUtils.getEslintRcFor(config.style)
config.eslintPath = eslintPath

if (!shell.test('-f', eslintPath)) {
  console.log(`Invalid style ${config.style}. Aborting`)
  process.exit(1)
}

config.source = shell.cat(config.input).toString()

const formatted = tool(config)

if (config.output) {
  shell.ShellString(formatted).to(config.output)
} else {
  console.log(formatted)
}
