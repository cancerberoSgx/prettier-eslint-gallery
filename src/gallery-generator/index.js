var handlebars = require('handlebars')
var fs = require('fs')
var path = require('path')

handlebars.registerHelper('fixOutputName', function(s) {
    s = path.basename(s)
    s = s.substring(s.indexOf('-')+1, s.indexOf('.'))
    return s
})

var template = handlebars.compile(fs.readFileSync('src/gallery-generator/index-template.hbs').toString())

var styles = require('../files').getAvailableStyles()
var modes = require('../files').getAvailableModes()
var files = [ //TODO autogenerate
    ['../assets/input/sccollection.js'].concat( styles.map(style=>{
        return modes.map(mode=>`../assets/output/sccollection-${style}-${mode}.js`)
        // return `../assets/output/sccollection-${style}-normal.js`
    }))
]

var context = {
    files,
    // frontendScript: fs.readFileSync('src/gallery-generator/frontend-script.js').toString()
}

var output = template(context)
fs.writeFileSync('gallery/index.html', output)