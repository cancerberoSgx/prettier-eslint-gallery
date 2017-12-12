const handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const shell = require('shelljs')

const modeNames = {
    'default': 'default',
    'default_es5': 'default-es5',
    'onlyEslintFix': 'only-eslint'
}

module.exports = function main(config) {

    config = config || {}
    config.outputFolder = config.output ? path.join(config.output, 'assets', 'output') : path.join(__dirname, '..', '..', 'assets', 'output')
    config.inputFiles = shell.ls(config.input ? path.join(config.input, '*.js') : path.join(__dirname, '..', '..', 'assets', 'input', '*.js')) //['../assets/input/sccollection.js']//TODO autogenerate
    const indexOutput = config.output ? path.join(config.output, 'gallery', 'index.html') : path.join(__dirname, '..', '..', 'gallery', 'index.html')
    shell.rm(indexOutput) // make sure it works!

    let template = handlebars.compile(fs.readFileSync(path.join(__dirname, 'index-template.hbs')).toString())
    let styles = require('../config').getAvailableStyles()
    let modes = require('../config').getAvailableModes()

    let files = []
    config.inputFiles.forEach(inputFile => {
        var simpleName = path.basename(inputFile, '.js')
        files.push([`../assets/input/${simpleName}.js`].concat(styles.map(style => {
            return modes.map(mode => `../assets/output/${simpleName}-${style}-${mode}.js`)
        })))
    })

    let context = {
        files,
        styles,
        inputFiles: config.inputFiles
    }
    
    installHandlebarsHelpers()

    let output = template(context)
    fs.writeFileSync(indexOutput, output)
}

function installHandlebarsHelpers() {

    handlebars.registerHelper('getMode', function (s) {
        s = path.basename(s)
        s = s.substring(s.indexOf('-') + 1, s.lastIndexOf('.'))
        s = s.split('-')[1]
        return (modeNames[s] || s)
    })

    handlebars.registerHelper('getName', function (s) {
        return path.basename(s)
    })
}