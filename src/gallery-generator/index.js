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

    config.outputFolder = config.outputFolder || '../assets/output'
    config.inputFiles = config.inputFiles || shell.ls('../assets/input/*.js')//['../assets/input/sccollection.js']//TODO autogenerate
    config.indexOutput = config.indexOutput || 'gallery/index.html'

    installHandlebarsHelpers()

    let template = handlebars.compile(fs.readFileSync(path(__dirname, 'index-template.hbs')).toString())
    let styles = require('../config').getAvailableStyles()
    let modes = require('../config').getAvailableModes()

    let files = []
    config.inputFiles.forEach(inputFile => {
        files.push([inputFile].concat(styles.map(style => {
            var simpleName = path.basename(inputFile, '.js')
            return modes.map(mode => `${config.outputFolder}/${simpleName}-${style}-${mode}.js`)
        })))
    })

    let context = {
        files,
        styles,
        inputFiles: config.inputFiles
    }

    let output = template(context)
    fs.writeFileSync(config.indexOutput, output)
}

function installHandlebarsHelpers() {

    handlebars.registerHelper('getMode', function (s) {
        s = path.basename(s)
        s = s.substring(s.indexOf('-') + 1, s.indexOf('.'))
        s = s.split('-')[1]
        return (modeNames[s] || s)
    })

    handlebars.registerHelper('getName', function (s) {
        return path.basename(s)
    })

}