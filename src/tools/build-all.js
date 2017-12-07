var shell = require('shelljs')

shell.ls('assets/input/*.js').forEach(input=>{
    shell.ls('eslint-config').forEach(style=>{
        shell.exec(`node . --input  ${input} --style ${style} --output assets/output/sccollection-${style}.js`)
    })
})