var esprima = require('esprima')
var escodegen = require('escodegen')
module.exports = function(s){
    var ast = esprima.parseScript(s, {comment: true, range: true, loc: true,tokens: true });
    // console.log(JSON.stringify(ast))

    // var format = {}
    // var escodegenOptions = {}
    // Object.assign(format , escodegen.FORMAT_MINIFY)
    // format.comment = true
    // console.log(format)
    return escodegen.generate(ast, {format: escodegen.FORMAT_MINIFY, comment: true, comments: true}) || s;
}
