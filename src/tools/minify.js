const UglifyJS = require("uglify-js")
var shell = require('shelljs')
var assert = require('assert')

module.exports.removeSpacesOnly = function (s) {
  let options = { mangle: false, output: { comments: true } }
  let result = UglifyJS.minify(s, options)
  return result.code
}

module.exports.eslintFixOnly = function(code, eslintrc){
  shell.ShellString(code).to('tmp.js')
  let cmd = `node node_modules/eslint/bin/eslint.js -c "${eslintrc}" --fix tmp.js`
  shell.exec(cmd) // exit code probably !=0 so we don't check
  // heads up - we pass prettier thought without config since --fix output is often non-indented correcly and prettier without config seems not to opinionated reformat anything.. 
  // assert.equals(shell.exec('node node_modules/prettier/bin/prettier.js --no-config --write tmp.js'), 0)
  code = shell.cat('tmp.js').toString()
  shell.rm('tmp.js')
  return code
}