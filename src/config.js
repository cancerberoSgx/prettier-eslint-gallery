const path = require('path');
const shell = require('shelljs');

const eslintRcMap = {
  // config file map for supporting different config formats like .yalm, .json, etc
  node: '.eslintrc.yaml',
};
module.exports.getEslintRcFor = function getEslintRcFor(style) {
  return path.join(__dirname, '..', 'eslint-config', style, eslintRcMap[style] || '.eslintrc.js');
};

module.exports.getAvailableStyles = function getAvailableStyles() {
  return shell.ls(path.join(__dirname, '..', 'eslint-config/')).map(f => path.basename(f));
};
module.exports.getAvailableModes = function getAvailableModes() {
  return ['default', 'default_es5', 'onlyEslintFix'];
};

module.exports.getDefaultMode = function getDefaultMode() {
  return module.exports.getAvailableModes()[0];
};
