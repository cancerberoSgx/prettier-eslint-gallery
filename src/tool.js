const format = require('prettier-eslint')
const customFormatTools = require('./tools/minify')

module.exports.tool = function (config) {
  var source = config.source

  if(config.mode.endsWith('MinifyFirst')){
    source = customFormatTools.removeSpacesOnly(source)
  }

  if (config.mode.startsWith('onlyEslintFix')) {
    source = customFormatTools.eslintFixOnly(source, config.eslintPath)
  }
  else if (config.mode.startsWith('default')){
    const options = {
      text: source,
      filePath: config.eslintPath,
      logLevel: config.debug || undefined//,
      // prettierLast: true//config.mode.indexOf('PrettierLast')!=-1
    }
    source = format(options)
  }
  else {
    console.log('Invalid mode ' + config.mode + '. Aborting. ')
    process.exit(1)
  }

  return source
}
