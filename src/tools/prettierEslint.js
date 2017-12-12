// responsible of calling prettier-eslint , prettier or eslint. 

// this files contains 2 different implementations of prettier - eslint . the default one using prettier-eslint and a home-made one - because of https://github.com/prettier/prettier-eslint/issues/149

function prettierEslint(options) {
    return require('prettier-eslint')(options)
}

module.exports.prettierEslint = function (options) {
    return homeMadePrettierEslint(options)
    // return prettierEslint(options)
}

// implements prettierEslint's API 
function homeMadePrettierEslint(options) {
    //prettier first
    var prettierConfig = getPrettierConfigFromEslint(options.filePath)
    var prettier = require('prettier')
    if (options.logLevel) {
        console.log('Prettier options: ', JSON.stringify(prettierConfig))
    }
    var code = prettier.format(options.text, prettierConfig)

    //eslint last:
    var eslintConfig = getEslintConfigFromPath(options.filePath)
    if(options.es5){
        Object.assign(eslintConfig, getEslintE5Rules())
    }
    var Linter = require('eslint').Linter
    var linter = new Linter()
    var messages = linter.verifyAndFix(code, eslintConfig)
    if (options.logLevel) {
        console.log('Eslint config: \n', JSON.stringify(eslintConfig))
        console.log('\nEslint verifyAndFix() output; \n', JSON.stringify(messages, 0, 2))
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



function getEslintE5Rules(){
    return {   
        'rules': {
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
            'yield-star-spacing': 'off'
        }
    }
}
