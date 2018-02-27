const customFormatTools = require('./tools/minify');
const configUtils = require('./config');
const glob = require('glob').sync;
const shell = require('shelljs');
const prettierEslint = require('./tools/prettierEslint').prettierEslint;
const path = require('path');

module.exports = function format(config) {
  if(config.debug){
    console.log(config)
  }
  if (config.source) {
    return formatString(config);
  }
  const files = glob(config.input);
  if(config.debug){
    console.log(`Formatting ${files.length} files`)
  }
  const inputFilesPrefix = sharedStart(files);

  files.forEach((file) => {
    config.source = shell.cat(file).toString();
    const formatted = formatString(config);
    let outputFile;
    if (config.output) {
      outputFile = path.join(config.output, file.substring(inputFilesPrefix.length, file.length));
      shell.mkdir('-p', path.dirname(outputFile));
    } else {
      outputFile = file;
    }
    if (config.log) {
      console.log(`Writing ${outputFile}`);
    }
    shell.ShellString(formatted).to(outputFile);
  });
};

function sharedStart(array) {
  let A = array.concat().sort(),
    a1 = A[0],
    a2 = A[A.length - 1],
    L = a1.length,
    i = 0;
  while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
  return a1.substring(0, i);
}

function formatString(config) {
  let source = config.source;
  config.mode = config.mode || configUtils.getDefaultMode();

  config.eslintPath = config.eslintPath ? path.resolve(config.eslintPath) : configUtils.getEslintRcFor(config.style);

  if (config.mode.indexOf('MinifyFirst') != -1) {
    source = customFormatTools.removeSpacesOnly(source);
  }
  if (config.mode.startsWith('onlyEslintFix')) {
    source = customFormatTools.eslintFixOnly(source, config.eslintPath);
  } else if (config.mode.startsWith('default')) {
    source = prettierEslint({
      text: source,
      filePath: config.eslintPath,
      logLevel: config.debug || undefined,
      es5: config.mode.endsWith('_es5'),
    });
  } else {
    throw new Error(`Invalid mode ${config.mode}. Aborting. `);
  }

  return source;
}
