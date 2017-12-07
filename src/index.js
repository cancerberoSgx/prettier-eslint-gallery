var args = require('yargs').argv
var shell = require('shelljs')

var config = {
  input: args.input,
  style: args.style || 'standard',
  output: args.output,
  minifyFirst: !!args.minifyFirst
}

if (!config.input) {
  console.log('Invalid call you must provide --input, aborting')
  process.exit(1)
}

config.source = shell.cat(config.input).toString()

// TODO: lets try to run this in the browser:

const format = require('prettier-eslint')
function doit (config) {
  var source = config.source

  if (config.minifyFirst) {
    source = require('./minify')(source)
  }

  var style = config.style || 'standard'
  var eslintPath = 'eslint-config/' + config.style + '/.eslint'
  if (!shell.test('-f', eslintPath)) {
    console.log('Invalid style ' + config.style + '. Aborting')
    process.exit(1)
  }

  console.log(
    'Executing prettier-eslint with style ' +
      eslintPath +
    // config.style + 
      ' - input : ' +
      config.input
  )
  
  shell.cp('-rf' , eslintPath, '.eslint')

  const options = {
    text: source,
    // filePath: eslintPath,
    // eslintConfig: {
    //   extends: config.style
    // },
    logLevel: 'debug'
    // ,
    // prettierLast: true
  }

  const formatted = format(options)

  if (config.output) {
    shell.ShellString(formatted).to(config.output)
  } else {
    console.log(formatted)
  }
  return formatted
}

doit(config)
