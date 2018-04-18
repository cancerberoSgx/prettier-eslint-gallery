const shell = require('shelljs');
shell.config.silent = true;

describe('generateGallery', () => {
  it('should generate the html with links to input and output files', () => {
    shell.rm('-rf', 'gallery/index.html');
    expect(shell.exec('node src/gallery-generator/index').code).toBe(0);
    expect(shell.cat('gallery/index.html').toString()).toContain('data-input-file="../assets/input/sccollection.js">sccollection.js');
    expect(shell.cat('gallery/index.html').toString()).toContain('data-input-file="../assets/output/sccollection-airbnb-default_es5.js" data-input-file-simple="default-es5"');
  });
});
