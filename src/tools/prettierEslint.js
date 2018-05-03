// responsible of calling prettier-eslint , prettier or eslint.

// this files contains 2 different implementations of prettier - eslint . the default one using prettier-eslint and a home-made one - because of https://github.com/prettier/prettier-eslint/issues/149

const shell = require('shelljs');

function customRequire(required) {
  if (shell.test('-e', `${__dirname}/../../node_modules/${required}`)) {
    return require(`${__dirname}/../../node_modules/${required}`);
  } else if (shell.test('-e', `${__dirname}/../../../../node_modules/${required}`)) {
    return require(`${__dirname}/../../../../node_modules/${required}`);
  }
  return require(`${__dirname}/../../node_modules/${required}`); // will fail but we want to to debug
}

const prettier = customRequire('prettier');
const { CLIEngine } = customRequire('eslint');

function getEslintE5Rules() {
  return {
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'constructor-super': 'off',
    'generator-star-spacing': 'off',
    'no-class-assign': 'off',
    'no-confusing-arrow': 'off',
    'no-const-assign': 'off',
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-new-symbol': 'off',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'off',
    'no-useless-computed-key': 'off',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'off',
    'no-var': 'off',
    'object-shorthand': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'require-yield': 'off',
    'rest-spread-spacing': 'off',
    'sort-imports': 'off',
    'symbol-description': 'off',
    'template-curly-spacing': 'off',
    'yield-star-spacing': 'off',
  };
}

// home made implementation:
function getEslintConfigFromPath(eslintConfigPath, eslintOptions = {}) {
  const eslintCli = new CLIEngine(eslintOptions);
  const config = eslintCli.getConfigForFile(eslintConfigPath);
  return config;
}

function getPrettierConfigFromEslint(eslintConfigPath) {
  const config = getEslintConfigFromPath(eslintConfigPath);
  const { getOptionsForFormatting } = customRequire('prettier-eslint/dist/utils.js');

  const prettierConfig = getOptionsForFormatting(config, undefined, undefined, 'eslint');
  return prettierConfig.prettier;
}

/**
 * format given options.text using give eslint config in options.filePath
 * @param {filePath: string, logLevel: boolean, es5: boolean, text: string} options
 * @returns {string|{error:{}} the output string or throw an exception like SyntaxError in case a fatal error occurs
 */
function homeMadePrettierEslint(options) {
  // prettier first
  const prettierConfig = getPrettierConfigFromEslint(options.filePath);
  if (options.logLevel) {
    console.log('Prettier options: ', JSON.stringify(prettierConfig));
  }
  const code = prettier.format(options.text, prettierConfig);

  // eslint last (using CLIEngine API executeOnText() and passing the config as object
  const eslintConfig = getEslintConfigFromPath(options.filePath);
  if (options.es5) {
    eslintConfig.rules = eslintConfig.rules || {};
    Object.assign(eslintConfig.rules, getEslintE5Rules());
  }
  const cli = new CLIEngine({
    baseConfig: eslintConfig,
    fix: true,
    useEslintrc: false,
  });
  const report = cli.executeOnText(code);
  const result = report.results[0];

  if (options.logLevel) {
    console.log('\n\nEslint config: \n', JSON.stringify(eslintConfig));
    console.log('\n\n\nEslint verifyAndFix() final report; \n', JSON.stringify(report, 0, 2));
  }
  return result.output || options.text;
}

module.exports.prettierEslint = options => homeMadePrettierEslint(options);

module.exports.prettierEslint = options => homeMadePrettierEslint(options);
