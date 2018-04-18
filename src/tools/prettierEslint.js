// responsible of calling prettier-eslint , prettier or eslint.

// this files contains 2 different implementations of prettier - eslint . the default one using prettier-eslint and a home-made one - because of https://github.com/prettier/prettier-eslint/issues/149

const path = require('path');
const shell = require('shelljs');

function customRequire(required) {
  if (shell.test('-e', `${__dirname}/../../node_modules/${required}`)) {
    return require(`${__dirname}/../../node_modules/${required}`);
  } else if (shell.test('-e', `${__dirname}/../../../../node_modules/${required}`)) {
    return require(`${__dirname}/../../../../node_modules/${required}`);
  }
  return require(`${__dirname}/../../node_modules/${required}`); // will fail but we want to to debug
}
// function prettierEslint(options) {
//   return customRequire('prettier-eslint')(options);
// }

module.exports.prettierEslint = function (options) {
  return homeMadePrettierEslint(options);
};

// implements prettierEslint's API
function homeMadePrettierEslint(options) {
  // prettier first
  const prettierConfig = getPrettierConfigFromEslint(options.filePath);
  const prettier = customRequire('prettier');
  if (options.logLevel) {
    console.log('Prettier options: ', JSON.stringify(prettierConfig));
  }
  const code = prettier.format(options.text, prettierConfig);

  // eslint last:
  const eslintConfig = getEslintConfigFromPath(options.filePath);
  if (options.es5) {
    Object.assign(eslintConfig, getEslintE5Rules());
  }
  const Linter = customRequire('eslint').Linter;
  const linter = new Linter();
  const result = linter.verifyAndFix(code, eslintConfig);
  if (options.logLevel) {
    console.log('Eslint config: \n', JSON.stringify(eslintConfig));
    console.log('\nEslint verifyAndFix() output; \n', JSON.stringify(result, 0, 2));
  }
  return result.output;
}

// home made implementation:
function getEslintConfigFromPath(eslintConfigPath, eslintOptions = {}) {
  const { CLIEngine } = customRequire('eslint');
  const eslintCli = new CLIEngine(eslintOptions);
  const config = eslintCli.getConfigForFile(eslintConfigPath);
  return config;
}

function getPrettierConfigFromEslint(eslintConfigPath) {
  const config = getEslintConfigFromPath(eslintConfigPath);
  const getOptionsForFormatting = customRequire('prettier-eslint/dist/utils.js')
    .getOptionsForFormatting;

  const prettierConfig = getOptionsForFormatting(config, undefined, undefined, 'eslint');
  return prettierConfig.prettier;
}

function getEslintE5Rules() {
  return {
    rules: {
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
    },
  };
}
