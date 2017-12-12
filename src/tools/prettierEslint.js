// this files contains 2 different implementations of prettier - eslint . the default one using prettier-eslint and a home-made one - because of https://github.com/prettier/prettier-eslint/issues/149

function prettierEslint(options) {
    return require('prettier-eslint')(options)
}

module.exports = function (options) {
    return homeMadePrettierEslint(options)
    // return prettierEslint(options)
}

// implements prettierEslint's API 
function homeMadePrettierEslint(options) {
    //prettier first
    var prettierConfig = getPrettierConfigFromEslint(options.filePath)
    var prettier = require('prettier')
    if (options.logLevel) {
        console.log('Prettier options: ', JSON.stringify(config))
    }
    var code = prettier.format(options.text, prettierConfig)

    //eslint last:
    var eslintConfig = getEslintConfigFromPath(options.filePath)
    var Linter = require('eslint').Linter
    var linter = new Linter()
    var messages = linter.verifyAndFix(code, eslintConfig)
    if (options.logLevel) {
        console.log('Eslint config: ', JSON.stringify(eslintConfig))
    }   
    if (options.logLevel) {
        console.log('Eslint config: \n', JSON.stringify(eslintConfig))
        console.log('\nEslint verifyAndFix output; \n', JSON.stringify(messages))
    }
    return messages.output
}


// home made implementation:
function getEslintConfigFromPath(eslintConfigPath, eslintOptions = {}) {
    const { CLIEngine } = require('../../node_modules/eslint')
    var eslintCli = new CLIEngine(eslintOptions)
    const config = eslintCli.getConfigForFile(eslintConfigPath)
    return config
}

function getPrettierConfigFromEslint(eslintConfigPath) {
    var config = getEslintConfigFromPath(eslintConfigPath)
    var getOptionsForFormatting = require('../../node_modules/prettier-eslint/dist/utils.js').getOptionsForFormatting
    var prettierConfig = getOptionsForFormatting(config)
    return prettierConfig.prettier
}


