const format = require('prettier-eslint')

module.exports.tool = function (config) {
  var source = config.source

  if (config.mode == 'normalMinifyFirst') {
    source = require('./tools/minify').removeSpacesOnly(source)
  }

  console.log(`Executing prettier-eslint with style ${config.eslintPath}, input : ${config.input}`)

  const options = {
    text: source,
    filePath: config.eslintPath,
    logLevel: config.debug || undefined,
    prettierLast: true
  }

  return format(options)
}
