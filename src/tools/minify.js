const esprima = require('esprima')
const escodegen = require('escodegen')
const UglifyJS = require("uglify-js")

module.exports.removeSpacesOnly = function (s) {
  let options = { mangle: false, output: { comments: true } }
  let result = UglifyJS.minify(s, options)
  return result.code
}
