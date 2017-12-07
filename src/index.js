const args = require('yargs').argv
const shell = require('shelljs')
const path = require('path')

const tool = require('./tool')

const getEslintRcFor = require('./files').getEslintRcFor

var config = {
  input: args.input,
  style: args.style || 'standard',
  output: args.output,
  debug: args.debug,
  mode: args.mode
}

if (!config.input) {
  console.log('Invalid call you must provide --input, aborting')
  process.exit(1)
}

var eslintPath = getEslintRcFor(config.style)
if (!shell.test('-f', eslintPath)) {
  console.log(`Invalid style ${config.style}. File dont exists: ${eslintPath}. Aborting`)
  process.exit(1)
}
config.eslintPath = eslintPath

config.source = shell.cat(config.input).toString()

const formatted = tool(config)

if (config.output) {
  shell.ShellString(formatted).to(config.output)
} else {
  console.log(formatted)
}
