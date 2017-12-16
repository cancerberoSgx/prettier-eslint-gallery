const shell = require('shelljs');
const formatter = require('..');
shell.config.silent = false;

describe('node api', () => {

  it('should format correctly given source string', () => {
    const config = {
      source: 'var arr=[1,2,3].map(function(a){if(a>1){return a+1}else{return a+10}})',
      style: 'walmart',
    };
    const result = formatter(config);
    expect(result).toContain('const arr = [1, 2, 3].map(a => {');
    expect(result).toContain('  if (a > 1) {');
  });

  it('if no output given then should rewrite files', () => {
    shell.cp('-r', 'spec/assets/sample1', 'spec/assets/sample1_')
    const config = {
      input: 'spec/assets/sample1_/**/*.js',
      style: 'airbnb',
    };
    formatter(config);
    expect(shell.cat('spec/assets/sample1_/inner/f2.js')).toContain(`[a, b, c].map((n) => {`)
    expect(shell.cat('spec/assets/sample1_/f1.js')).toContain(`b = [1, 2, 3]`)
    shell.rm('-rf', 'spec/assets/sample1_')
  });

  it('if output is given then should not rewrite files and output folder should have correct formatted files', () => {
    shell.cp('-r', 'spec/assets/sample1', 'spec/assets/sample1_')
    const config = {
      input: 'spec/assets/sample1_/**/*.js',
      output: 'spec/assets/sample1_output_',
      style: 'airbnb',
    };
    formatter(config);

    expect(shell.cat('spec/assets/sample1_/inner/f2.js')).not.toContain(`[a, b, c].map((n) => {`)
    expect(shell.cat('spec/assets/sample1_/f1.js')).not.toContain(`b = [1, 2, 3]`)

    expect(shell.cat('spec/assets/sample1_output_/inner/f2.js')).toContain(`[a, b, c].map((n) => {`)
    expect(shell.cat('spec/assets/sample1_output_/f1.js')).toContain(`b = [1, 2, 3]`)
    shell.rm('-rf', 'spec/assets/sample1_')
    shell.rm('-rf', 'spec/assets/sample1_output_')
  });

});
