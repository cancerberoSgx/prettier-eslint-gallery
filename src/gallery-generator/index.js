var handlebars = require('handlebars')
var fs = require('fs')

var template = handlebars.compile(fs.readFileSync('./index-template.hbs').toString())
var context = {
    
}