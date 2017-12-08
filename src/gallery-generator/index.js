var handlebars = require('handlebars')
var fs = require('fs')
var path = require('path')

var modeNames = {
    default: 'prettier-eslint',
    onlyEslintFix: 'eslint-fix'
}
handlebars.registerHelper('getMode', function(s) {
    s = path.basename(s)
    s = s.substring(s.indexOf('-')+1, s.indexOf('.'))
    s = s.split('-')[1]
    return modeNames[s] || s
})

handlebars.registerHelper('getName', function(s) {
    return path.basename(s)
})

var template = handlebars.compile(fs.readFileSync('src/gallery-generator/index-template.hbs').toString())
var styles = require('../config').getAvailableStyles()
var modes = require('../config').getAvailableModes()
var inputFiles = ['../assets/input/sccollection.js']//TODO autogenerate

var files = []
inputFiles.forEach(inputFile=>{
    files.push([inputFile].concat(styles.map(style=>{
        return modes.map(mode=>`../assets/output/sccollection-${style}-${mode}.js`)
    })))
})

var context = {files, styles, inputFiles}

var output = template(context)
fs.writeFileSync('gallery/index.html', output)