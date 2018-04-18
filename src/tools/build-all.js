// This is a script that will call this tool via command line transforming all files in assets/input using all known modes and put it in the assets/output

const shell = require('shelljs');
const configTool = require('../config');
const assert = require('assert');
const path = require('path');

function doit(config, inputFile, style) {
  // ** HEADS UP always comment the following line !!!!! - just for make it faster while debugging
  // if(style.indexOf('standard')==-1 && style.indexOf('airbnb')==-1){return}

  const inputFileSimple = path.basename(inputFile, '.js');

  const index = path.join(__dirname, '..', '..', 'src', 'index');
  const cmd = `node ${index} --input  ${inputFile} --style ${style} --output ${
    config.output
  }/${inputFileSimple}-${style}-${config.mode}.js --mode ${config.mode}`; // TODO use API not cmd line
  console.log(cmd);
  assert.equal(shell.exec(cmd).code, 0);
}

function buildAll(config) {
  shell.ls(`${config.input}/*.js`).forEach((input) => {
    shell.ls(path.join(__dirname, '..', '..', 'eslint-config')).forEach((style) => {
      doit(config, input, style);
    });
  });
}

function main(config) {
  config = config || {};
  config.input = config.input || 'assets/input';
  config.output = config.output || 'assets/output';
  shell.mkdir('-p', config.output);
  configTool.getAvailableModes().forEach(mode => buildAll(Object.assign(config, { mode })));
}

module.exports = main;
