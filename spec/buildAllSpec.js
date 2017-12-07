var shell = require('shelljs')

describe('buildall', () => {
    it('1', () => {
        shell.rm('-rf', 'assets/output/*')
        require('../src/tools/build-all')()
        expect(shell.ls( 'assets/output/*.js').length>0).toBe(true)
    })
})