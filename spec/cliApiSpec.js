const shell = require('shelljs');
shell.config.silent = false;

describe('cli', () => {
  it('should indent using popular style and no eslintrc.json', () => {
    shell.rm('-rf', 'spec/assets/clioutput');
    shell.mkdir('spec/assets/clioutput');
    shell.cp('-r', 'spec/assets/sample1', 'spec/assets/clioutput/out');
    expect(shell.exec('node src/index.js --style airbnb --mode default_es5 --input "spec/assets/clioutput/**/*.js"').code).toBe(0);
    expect(shell.cat('spec/assets/clioutput/out/inner/f2.js')).toContain(`
  return [a, b, c].map(function (n) {
`);
    expect(shell.cat('spec/assets/clioutput/out/f1.js')).toContain(`var a = 1,
  b = [1, 2, 3];
`);
  });

  it('should indent using custom eslint config passing it on --eslint-path', () => {
    shell.rm('-rf', 'spec/assets/clioutput');
    shell.mkdir('spec/assets/clioutput');
    shell.cp('-r', 'spec/assets/sample1', 'spec/assets/clioutput/out');
    expect(shell.exec('node src/index.js --eslint-path "./spec/assets/custom-eslint-config/.eslintrc.js" --input "spec/assets/clioutput/**/*.js"').code).toBe(0);
    expect(shell.cat('spec/assets/clioutput/out/inner/f2.js')).toContain(`
  return [a, b, c].map((n) => {
`);
    expect(shell.cat('spec/assets/clioutput/out/f1.js')).toContain(`let a = 1,
  b = [1, 2, 3]
`);
  });

  it('clean', () => {
    shell.rm('-rf', 'spec/assets/clioutput');
  });
});
