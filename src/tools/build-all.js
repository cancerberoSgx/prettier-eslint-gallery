// This is a script that will call this tool via command line transforming all files in assets/input using all known modes and put it in the assets/output

var shell = require('shelljs')
var getEslintRcFor = require('../files').getEslintRcFor
var assert = require('assert')

function buildAll(config) {
  shell.ls('assets/input/*.js').forEach(input => {
    shell.ls('eslint-config').forEach(style => {
      doit(config, input, style)
    })
  })
}


function main() {
  // shell.rm('-rf', 'assets/output/*')
  buildAll({ mode: 'normal' })
  buildAll({ mode: 'normalMinifyFirst' })
  buildAll({ mode: 'onlyEslintFix' })
}

module.exports = main


function doit(config, input, style) {
  let cmd = `node . --input  ${input} --style ${style} --output assets/output/sccollection-${style}-${config.mode}.js`
  assert.equal(shell.exec(cmd).code, 0)

  // if (config.mode == 'normal') {
  //   let cmd = `node . --input  ${input} --style ${style} --output assets/output/sccollection-${style}-normal.js`
  //   assert.equal(shell.exec(cmd).code, 0)
  // }
  // else if (config.mode == 'normalMinifyFirst') {
  //   let cmd = `node . --input  ${input} --style ${style} --output assets/output/sccollection-${style}-normalMinifyFirst.js --mode=normalMinifyFirst`
  //   assert.equal(shell.exec(cmd).code, 0)
  // }
  // else if (config.mode == 'onlyEslintFix') {
  //   var inputCode = shell.cat(input).toString()
  //   source = require('./minify').removeSpacesOnly(inputCode)
  //   shell.ShellString(source).to('tmp.js')

  //   let eslintrc = getEslintRcFor(style)
  //   let cmd = `node node_modules/eslint/bin/eslint.js -c  ${eslintrc} --fix tmp.js`
  //   shell.exec(cmd)
  //   shell.mv('tmp.js', `assets/output/sccollection-${style}-onlyeslintfix.js`)
  // }
}


// main()