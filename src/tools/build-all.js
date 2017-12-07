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
function doit(config, input, style) {
  if (config.mode == 'normal') {
    let cmd = `node . --input  ${input} --style ${style} --output assets/output/sccollection-${style}.js`
    // console.log(cmd)
    assert.equal(shell.exec(cmd).code, 0)
  }
  else if (config.mode == 'normalMinifyFirst') {
    let cmd = `node . --input  ${input} --style ${style} --output assets/output/sccollection-${style}-minifyFirst.js --minifyFirst`
    // console.log(cmd)
    assert.equal(shell.exec(cmd).code, 0)
  }
  else if (config.mode == 'onlyEslintFix') {
    var inputCode = shell.cat(input).toString()
    source = require('./minify').removeSpacesOnly(inputCode)
    shell.ShellString(source).to('tmp.js')

    let eslintrc = getEslintRcFor(style)
    let cmd = `node node_modules/eslint/bin/eslint.js -c  ${eslintrc} --fix tmp.js`
      shell.exec(cmd)
      // .code, 0)
    shell.mv('tmp.js', `assets/output/sccollection-${style}-onlyeslintfix.js`)
  }
}

buildAll({ mode: 'normal' })
buildAll({ mode: 'normalMinifyFirst' })
buildAll({ mode: 'onlyEslintFix' })