var handlebars = require('handlebars')
var fs = require('fs')
var path = require('path')

handlebars.registerHelper('basename', function(s) {
    return path.basename(s)
})

var template = handlebars.compile(fs.readFileSync('src/gallery-generator/index-template.hbs').toString())

var styles = require('../files').getAvailableStyles()
var files = [ //TODO autogenerate
    ['../assets/input/sccollection.js'].concat( styles.map(style=>`../assets/output/sccollection-${style}-normal.js`))
]

var context = {
    files,
    frontendScript: fs.readFileSync('src/gallery-generator/frontend-script.js').toString()
}

var output = template(context)
fs.writeFileSync('gallery/index.html', output)