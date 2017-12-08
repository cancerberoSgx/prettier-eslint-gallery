var path = require('path')
var shell = require('shelljs')

var eslintRcMap = {
  'node': '.eslintrc.yaml'
}
module.exports.getEslintRcFor = function (style) {
  var p = path.join('eslint-config', style, eslintRcMap[style] || '.eslintrc.js')
  return path.join(__dirname, '..', p)
}


module.exports.getAvailableStyles = function () {
  return shell.ls('eslint-config/').map(f=>path.basename(f))
}
module.exports.getAvailableModes = function () {
  return ['default'/*, 'defaultPrettierLast',*/ 'defaultMinifyFirst', 'onlyEslintFix', 'onlyEslintFixMinifyFirst']
}