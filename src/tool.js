const customFormatTools = require('./tools/minify')
const configUtils = require('./config')

module.exports = function formatterTool(config) {

  var source = config.source
  config.mode = config.mode || configUtils.getDefaultMode()

  config.eslintPath = config.eslintPath || configUtils.getEslintRcFor(config.style)

  if (config.mode.indexOf('MinifyFirst') != -1) {
    source = customFormatTools.removeSpacesOnly(source)
  }
  if (config.mode.startsWith('onlyEslintFix')) {
    source = customFormatTools.eslintFixOnly(source, config.eslintPath)
  }
  else if (config.mode.startsWith('default')) {
    source = require('./tools/prettierEslint').prettierEslint({
      text: source,
      filePath: config.eslintPath,
      logLevel: config.debug || undefined,
      es5: config.mode.endsWith('_es5')
    })
  }
  else {
    throw new Error ('Invalid mode ' + config.mode + '. Aborting. ')
  }

  return source
}
