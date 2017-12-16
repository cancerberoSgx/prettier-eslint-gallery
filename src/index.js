#!/usr/bin/env node

// cmd line entry point

const args = require('yargs-parser')(process.argv.slice(2));
const configUtils = require('./config');
const shell = require('shelljs');
const path = require('path');
const format = require('./tool');

if (args.listStyles) {
  console.log('Available Styles: ', configUtils.getAvailableStyles().join(', '));
  process.exit(0);
}

if (args.listModes) {
  console.log('Available Modes: ', configUtils.getAvailableModes().join(', '));
  process.exit(0);
}

if (args.help) {
  const help = {
    '--input': 'input file',
    '--style': 'one of the available styles, example: standard, airbnb, google, etc',
    '--output': 'output file',
    '--debug': 'TODO',
    '--mode': 'TODO',
    '--list-styles': 'list available styles',
    '--list-modes': 'list available modes',
  };
  const helpStr = JSON.stringify(help, 0, 2);
  console.log(`
Usage:
 $ tools --input src/some.js --style airnbn
Options:
${helpStr}
`);
  process.exit(0);
}

// main !

const config = {
  input: args.input,
  style: args.style,
  output: args.output,
  debug: args.debug,
  mode: args.mode,
  buildGallery: args.buildGallery,
};

// used as gallery-generator
if (config.buildGallery) {
  require('./gallery-generator/generate-gallery').buildGallery(config);
  process.exit(0);
}

// validate in case is used as formatted
if (!config.input && !config.source) {
  console.log('Invalid call you must provide --input, aborting');
  process.exit(1);
}
if (!config.mode || configUtils.getAvailableModes().indexOf(config.mode) == -1) {
  console.log(`Invalid mode ${config.mode}. Aborting`);
  process.exit(1);
}
config.eslintPath = configUtils.getEslintRcFor(config.style);
if (!shell.test('-f', config.eslintPath)) {
  console.log(`Invalid style ${config.style}. Aborting`);
  process.exit(1);
}

const formatted = format(config);
