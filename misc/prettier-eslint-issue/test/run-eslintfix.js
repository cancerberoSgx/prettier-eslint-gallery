const format = require('prettier-eslint')
var shell = require('shelljs')

shell.cp('-f', 'test/input.js', 'test/test-out-eslintfix.js')

var p = shell.exec('node node_modules/eslint/bin/eslint.js -c test/.eslintrc.js --fix test/test-out-eslintfix.js')

