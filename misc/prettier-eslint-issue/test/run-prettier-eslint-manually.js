// const format = require('prettier-eslint')
var shell = require('shelljs')
// const assert = require('assert')
// var path = require('path')
// shell.config.silent=false


shell.cp('-f', 'test/input.js', 'test/test-out-prettier-eslint-manually_tmp.js')

// first run prettier
p = shell.exec('node node_modules/prettier/bin/prettier.js test/test-out-prettier-eslint-manually_tmp.js')
shell.ShellString(p.stdout).to('test/test-out-prettier-eslint-manually.js')


// then run eslint
var p = shell.exec('node node_modules/eslint/bin/eslint.js -c test/.eslintrc.js --fix test/test-out-prettier-eslint-manually.js')
