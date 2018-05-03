const customFormatTools = require('./tools/minify');
const configUtils = require('./config');
const glob = require('glob').sync;
const shell = require('shelljs');
const { prettierEslint } = require('./tools/prettierEslint');
const path = require('path');

/**
 *
 * @param config
 * @return  {string|{error:{}}}
 */
function formatString(config) {
  let { source } = config;
  config.mode = config.mode || configUtils.getDefaultMode();

  config.eslintPath = config.eslintPath
    ? path.resolve(config.eslintPath)
    : configUtils.getEslintRcFor(config.style);

  if (config.mode.indexOf('MinifyFirst') !== -1) {
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

function sharedStart(array) {
  const A = array.concat().sort();
  const a1 = A[0];
  const a2 = A[A.length - 1];
  const L = a1.length;
  let i = 0;
  while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
  return a1.substring(0, i);
}

/**
 * If config.source is a string it will format it and return the formated result .
 * If not and config.input array of globs is given then each file will be formated.
 * If config.output is passes output files will be written in that destination maintaining.
 * folder structure. If no config.output is given input files will be overridden with formated results.
 * @param {FormatterConfig} config
 * @return  {string | {result:{},file: string}}
 */
function format(config) {
  if (config.debug) {
    console.log(config);
  }
  if (config.source) {
    return formatString(config);
  }
  let files = [];
  config.input = config.input instanceof Array ? config.input : [config.input];
  config.input.forEach((input) => {
    files = files.concat(glob(input)); // TODO: union - no repeats
  });
  if (config.debug) {
    console.log(`Formatting ${files.length} files`);
  }
  if (!files.length) {
    console.log('No files to format, exiting. ');
    process.exit(0);
  }
  const inputFilesPrefix = sharedStart(files);

  const formatResults = [];
  files.forEach((file) => {
    try {
      config.source = shell.cat(file).toString();
      const result = formatString(config);
      formatResults.push({ result, file });
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
      if (!result.error && result && typeof result === 'string') {
        shell.ShellString(result).to(outputFile);
      } else {
        console.log(`There was an error processing ${file}
        
${JSON.stringify(result.error, 0, 2)}

`);
        throw new Error('error TODO');
      }
    } catch (ex) {
      console.log(`Error formatting ${file}`);
      throw ex;
    }
  });
  return formatResults;
}

module.exports = format;


// res is just documentation: todo: write in .d.ts and use typedoc
/**
 * FormatterConfig
 */

class FormatterConfig {
  constructor() {
    /**
     * if provided it will format that string as a javascript source code (no files)
     * @type {String}
     */
    this.source = '';
    /**
     * if no `source` string is provided then it will format referenced by this array of globs
     * @type {Array<String>}
     */
    this.input = [];
    /**
     * output folder in the case `input` is provided. It wil write output files for given globs
     * preserving the folder structure. If it is not provied then input files will be overriden
     * @type {String}
     */
    this.output = '';
    /**
     * if true will prints lots of information regarding the eslint config and results
     */
    this.debugLevel = false;
  }
}

format.FormatterConfigApiDocsClass = FormatterConfig;
