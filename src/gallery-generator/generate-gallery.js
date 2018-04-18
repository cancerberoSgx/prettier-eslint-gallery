const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const modeNames = {
  default: 'default',
  default_es5: 'default-es5',
  onlyEslintFix: 'only-eslint',
};

const main = (module.exports.main = function main(config) {
  config = config || {};
  config.outputFolder = config.output
    ? path.join(config.output, 'assets', 'output')
    : path.join(__dirname, '..', '..', 'assets', 'output');
  config.inputFiles = shell.ls(config.input
    ? path.join(config.input, '*.js')
    : path.join(__dirname, '..', '..', 'assets', 'input', '*.js'));
  const indexOutput = config.output
    ? path.join(config.output, 'gallery', 'index.html')
    : path.join(__dirname, '..', '..', 'gallery', 'index.html');
  shell.rm(indexOutput); // make sure it works!

  const template = handlebars.compile(fs.readFileSync(path.join(__dirname, 'index-template.hbs')).toString());
  const styles = require('../config').getAvailableStyles();
  const modes = require('../config').getAvailableModes();

  const files = [];
  config.inputFiles.forEach((inputFile) => {
    const simpleName = path.basename(inputFile, '.js');
    files.push([`../assets/input/${simpleName}.js`].concat(styles.map(style =>
      modes.map(mode => `../assets/output/${simpleName}-${style}-${mode}.js`))));
  });

  installHandlebarsHelpers();

  fs.writeFileSync(
    indexOutput,
    template({
      files,
      styles,
      inputFiles: config.inputFiles,
    }),
  );
});

function installHandlebarsHelpers() {
  handlebars.registerHelper('getMode', (s) => {
    s = path.basename(s);
    s = s.substring(s.indexOf('-') + 1, s.lastIndexOf('.'));
    s = s.split('-')[1];
    return modeNames[s] || s;
  });

  handlebars.registerHelper('getName', s => path.basename(s));
}

module.exports.buildGallery = function buildGallery(config) {
  if (!config.input || !config.output) {
    console.log('Invalid call you must provide --input and --output. Aborting');
    process.exit(1);
  }
  require('../tools/build-all')(config);
  const finalOutput = path.join(config.output, 'assets', 'output');
  shell.mkdir('-p', finalOutput);
  shell.mkdir('-p', path.join(config.output, 'assets', 'input'));
  shell.mv(path.join(config.output, '*.js'), finalOutput);
  shell.cp(path.join(config.input, '*.js'), path.join(config.output, 'assets', 'input'));

  // generate gallery HTML
  shell.cp('-r', path.join(__dirname, '..', '..', 'gallery'), config.output);
  main(config);
};
