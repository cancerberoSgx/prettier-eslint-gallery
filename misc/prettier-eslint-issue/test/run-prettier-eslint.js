const format = require('prettier-eslint')
var shell = require('shelljs')
// const assert = require('assert')
var path = require('path')
// shell.config.silent=false

function run(input, config, output){

    var fomatted = format({
        text: shell.cat(input).toString(),
        filePath: path.resolve(config),
        logLevel: 'debug'
    })
    
    shell.ShellString(fomatted).to(output)
}
module.exports = run
run('test/input.js', 'test/.eslintrc.js', 'test/test-out-prettier-eslint.js')