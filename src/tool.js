// this should run in the browser
const format = require('prettier-eslint')
const path = require('path')

module.exports = function doit (config) {
  var source = config.source
  

  if (config.minifyFirst) {
    source = require('./minify')(source)
  }

  console.log(
    'Executing prettier-eslint with style ' +
      config.eslintPath +
      ' - input : ' +
      config.input
  )

  const options = {
    text: source,
    filePath: config.eslintPath,
    logLevel: config.debug || undefined,
    prettierLast: true
  }

  return format(options)
}
