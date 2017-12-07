var shell = require('shelljs')

describe('buildall', () => {
    it('build all', () => {
        shell.rm('-rf', 'assets/output/*')
        require('../src/tools/build-all')()
        expect(shell.ls( 'assets/output/*.js').length>0).toBe(true)
    })
    it('check that moreorless it works', ()=>{
        expect(shell.cat('assets/output/sccollection-standard-normal.js').toString()).toContain('} else if (protein.name === ')
    })
})