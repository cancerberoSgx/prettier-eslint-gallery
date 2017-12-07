var args = require('yargs').argv
var shell = require('shelljs')
const path = require('path')

var getEslintRcFor = require('./files').getEslintRcFor


// function main(){


  var config = {
    input: args.input,
    style: args.style || 'standard',
    output: args.output,
    debug: args.debug,
    minifyFirst: !!args.minifyFirst
  }

  if (!config.input) {
    console.log('Invalid call you must provide --input, aborting')
    process.exit(1)
  }



  var eslintPath = getEslintRcFor(config.style)
  if (!shell.test('-f', eslintPath)) {
    console.log(
      'Invalid style ' +
        config.style +
        '. File dont exists: ' +
        eslintPath +
        '. Aborting'
    )
    process.exit(1)
  }
  config.eslintPath = eslintPath

  config.source = shell.cat(config.input).toString()

  var tool = require('./tool')
  const formatted = tool(config)

  if (config.output) {
    shell.ShellString(formatted).to(config.output)
  } else {
    console.log(formatted)
  }
// }

