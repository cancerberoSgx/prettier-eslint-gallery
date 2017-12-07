// This is a script that will call this tool via command line transforming all files in assets/input using all known modes and put it in the assets/output

var shell = require('shelljs')
var getEslintRcFor = require('../files').getEslintRcFor
var assert = require('assert')

shell.config.silent = false

function buildAll(config) {
  shell.ls('assets/input/*.js').forEach(input => {
    shell.ls('eslint-config').forEach(style => {
      doit(config, input, style)
    })
  })
}

function main() {
  buildAll({ mode: 'normal' })
  buildAll({ mode: 'normalMinifyFirst' })
  buildAll({ mode: 'onlyEslintFix' })
}

module.exports = main


function doit(config, input, style) {
  let cmd = `node src/index --input  ${input} --style ${style} --output assets/output/sccollection-${style}-${config.mode}.js` // TODO use API not cmd line
  // console.log(cmd)
  assert.equal(shell.exec(cmd).code, 0)
}
