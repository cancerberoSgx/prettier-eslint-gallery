var handlebars = require('handlebars')
var fs = require('fs')

var template = handlebars.compile(fs.readFileSync('src/gallery-generator/index-template.hbs').toString())
var context = {
    inputFile: '../assets/input/sccollection.js', //TODO: we want to have many input examples
    frontendScript: fs.readFileSync('src/gallery-generator/frontend-script.js').toString()
}

var output = template(context)
fs.writeFileSync('gallery/index.html', output)