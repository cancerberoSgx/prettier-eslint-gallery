var path = require('path')
var eslintRcMap = {
    'node': '.eslintrc.yaml'
  }
  
  function getEslintRcFor(style){
    var p = path.join('eslint-config', style,  eslintRcMap[style]||'.eslintrc.js')
    return path.join(__dirname, '..', p)
  }
  module.exports.getEslintRcFor = getEslintRcFor