const shell = require('shelljs')
const formatter = require('..')
shell.config.silent = true

describe('node api', () => {
    it('should generate the html with links to input and output files', () => {

        let source = shell.cat('src/gallery-generator/generate-gallery.js').toString()
        expect(source).not.toContain(`registerHelper('getMode', (s) => {`)
        let config = {
            source: shell.cat('src/gallery-generator/generate-gallery.js').toString(),
            style: 'airbnb',
        }
        let result = formatter(config) // synchronous !
        expect(result).toContain(`registerHelper('getMode', (s) => {`)
    })

    it('should generate the html with links to input and output files', () => {
        let config = {
            source: `var arr = [1,2,3].map(function(a){if(a>1){return a+1}else{return a+10}})`,
            style: 'walmart',
        }
        let result = formatter(config) // synchronous !
        // console.log(result)
        expect(result).toContain(`const arr = [1, 2, 3].map(a => {`)
        expect(result).toContain(`  if (a > 1) {`)
    })

})