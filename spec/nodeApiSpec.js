const shell = require('shelljs');
const formatter = require('..');
shell.config.silent = true;

describe('node api', () => {
  it('should format correctly given file', () => {
    const source = shell.cat('spec/assets/sample1.js').toString();
    expect(source).not.toContain('registerHelper(\'getMode\', (s) => {');
    const config = {
      source: shell.cat('src/gallery-generator/generate-gallery.js').toString(),
      style: 'airbnb',
    };
    const result = formatter(config);
    expect(result).toContain('registerHelper(\'getMode\', (s) => {');
  });

  it('should format correctly given source string', () => {
    const config = {
      source: 'var arr=[1,2,3].map(function(a){if(a>1){return a+1}else{return a+10}})',
      style: 'walmart',
    };
    const result = formatter(config);
    expect(result).toContain('const arr = [1, 2, 3].map(a => {');
    expect(result).toContain('  if (a > 1) {');
  });
});
