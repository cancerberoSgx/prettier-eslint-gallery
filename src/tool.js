const format = require('prettier-eslint')
const customFormatTools = require('./tools/minify')

module.exports.tool = function (config) {
  var source = config.source

  if (config.mode.indexOf('MinifyFirst') != -1) {
    source = customFormatTools.removeSpacesOnly(source)
  }

  if (config.mode.startsWith('onlyEslintFix')) {
    source = customFormatTools.eslintFixOnly(source, config.eslintPath)
  }
  else if (config.mode.startsWith('default')) {
    source = format({
      text: source,
      filePath: config.eslintPath,
      logLevel: config.debug || undefined,
      prettierPath: 'prettier',
      // prettierLast: true,
    })
  }
  else {
    console.log('Invalid mode ' + config.mode + '. Aborting. ')
    process.exit(1)
  }

  return source
}
