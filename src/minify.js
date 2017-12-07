var esprima = require('esprima')
var escodegen = require('escodegen')
module.exports = function(s){
    var ast = esprima.parse(s);
    return escodegen.generate(ast, {format: escodegen.FORMAT_MINIFY}) || s;
}
