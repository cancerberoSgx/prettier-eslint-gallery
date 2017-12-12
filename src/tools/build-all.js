// This is a script that will call this tool via command line transforming all files in assets/input using all known modes and put it in the assets/output

var shell = require('shelljs')
var configTool = require('../config')
var assert = require('assert')
var path = require('path')

function buildAll(config) {
  shell.ls(config.input+'/*.js').forEach(input => {
    shell.ls(path.join(__dirname, '..', '..', 'eslint-config')).forEach(style => {
      doit(config, input, style)
    })
  })
}

function doit(config, inputFile, style) {

  // ** HEADS UP always comment the following line !!!!! - just for make it faster while debugging
  // if(style.indexOf('standard')==-1 && style.indexOf('airbnb')==-1){return} 

  var inputFileSimple = path.basename(inputFile, '.js')

  var index = path.join(__dirname, '..', '..', 'src', 'index')
  let cmd = `node ${index} --input  ${inputFile} --style ${style} --output ${config.output}/${inputFileSimple}-${style}-${config.mode}.js --mode ${config.mode}` // TODO use API not cmd line
  console.log(cmd)
  assert.equal(shell.exec(cmd).code, 0)
}

function main(config) {
  config = config || {}
  config.input = config.input || 'assets/input'
  config.output = config.output || 'assets/output'
  shell.mkdir('-p', config.output)
  configTool.getAvailableModes().forEach(mode => buildAll(Object.assign(config, { mode })))
}

module.exports = main
