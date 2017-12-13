#!/usr/bin/env node

// cmd line entry point

const args = require('yargs-parser')(process.argv.slice(2))
const configUtils = require('./config')
const shell = require('shelljs')
const path = require('path')
const tool = require('./tool')

if (args.listStyles) {
  console.log('Available Styles: ', configUtils.getAvailableStyles().join(', '))
  process.exit(0)
}

if (args.listModes) {
  console.log('Available Modes: ', configUtils.getAvailableModes().join(', '))
  process.exit(0)
}

if (args.help) {
  let help = {
    '--input': 'input file',
    '--style': 'one of the available styles, example: standard, airbnb, google, etc',
    '--output': 'output file',
    '--debug': 'TODO',
    '--mode': 'TODO',
    '--list-styles': 'list available styles',
    '--list-modes': 'list available modes'
  }
  let helpStr = JSON.stringify(help, 0, 2)
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
  mode: args.mode,
  buildGallery: args.buildGallery
}

if (config.buildGallery) {
  if (!config.input || !config.output) {
    console.log('Invalid call you must provide --input and --output. Aborting')
    process.exit(1)
  }
  require('./tools/build-all')(config)
  let finalOutput = path.join(config.output, 'assets', 'output')
  shell.mkdir('-p', finalOutput)
  shell.mkdir('-p', path.join(config.output, 'assets', 'input'))
  shell.mv(path.join(config.output, '*.js'), finalOutput)
  shell.cp(path.join(config.input, '*.js'), path.join(config.output, 'assets', 'input'))

  // generate gallery HTML
  shell.cp('-r', path.join(__dirname, '..', 'gallery'), config.output)
  require('./gallery-generator/generate-gallery')(config)
  process.exit(0)
}

if (!config.input && !config.source) {
  console.log('Invalid call you must provide --input, aborting')
  process.exit(1)
}

if (!config.mode || configUtils.getAvailableModes().indexOf(config.mode) == -1) {
  console.log(`Invalid mode ${config.mode}. Aborting`)
  process.exit(1)
}


config.source = config.source || shell.cat(config.input).toString()

var eslintPath = configUtils.getEslintRcFor(config.style)
config.eslintPath = eslintPath

if (!shell.test('-f', eslintPath)) {
  console.log(`Invalid style ${config.style}. Aborting`)
  process.exit(1)
}

const formatted = tool(config)

if (config.output) {
  shell.ShellString(formatted).to(config.output)
} else {
  console.log(formatted)
}
