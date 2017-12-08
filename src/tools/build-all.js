// This is a script that will call this tool via command line transforming all files in assets/input using all known modes and put it in the assets/output

var shell = require('shelljs')
var configTool = require('../config')
var assert = require('assert')

function buildAll(config) {
  shell.ls('assets/input/*.js').forEach(input => {
    shell.ls('eslint-config').forEach(style => {
      doit(config, input, style)
    })
  })
}

function doit(config, input, style) {
  // if(style!='standard')return //HEADS UP always comment this line !!!!! - just for make it faster while debugging
  let cmd = `node src/index --input  ${input} --style ${style} --output assets/output/sccollection-${style}-${config.mode}.js --mode ${config.mode}` // TODO use API not cmd line
  console.log(cmd)
  assert.equal(shell.exec(cmd).code, 0)
}

function main() {
  configTool.getAvailableModes().forEach(mode => buildAll({ mode }))
}

module.exports = main
