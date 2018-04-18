const shell = require('shelljs');

shell.config.silent = true;

describe('buildall', () => {
  it('build all', () => {
    shell.rm('-rf', 'assets/output/*');
    require('../src/tools/build-all')();
    expect(shell.ls('assets/output/*.js').length > 0).toBe(true);
  });
  it('check that more or less it works', () => {
    expect(shell.cat('assets/output/sccollection-standard-default.js').toString()).toContain('} else if (protein.name === ');
    expect(shell.cat('assets/output/sccollection-airbnb-default.js').toString()).toContain('parse(data) {'); // transform functions to methods
  });
});
