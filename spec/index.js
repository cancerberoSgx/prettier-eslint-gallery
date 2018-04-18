// Be able to run individual specs (without having to comment all the others). Examples:
//
// $ node spec cliApiSpec
// $ node spec cliApiSpec,nodeApiSpec

// const shell = require('shelljs')
const path = require('path')
const Jasmine = require('jasmine')
// const SpecReporter = require('jasmine-spec-reporter')

// function installExitOnFail (runner) {
//   // const exitOnFailReporter = new SpecReporter({ displayStacktrace: true })
//   const specDone = exitOnFailReporter.specDone
//   exitOnFailReporter.specDone = function (result) {
//     if (result.status === 'failed') {
//       console.log(
//         `\nFailed test: ${result.fullName}\nReason: ${
//           result.failedExpectations[0].message
//         }\n${result.failedExpectations[0].stackut}`
//       )
//       process.exit(1)
//     } else {
//       specDone.apply(exitOnFailReporter, arguments)
//     }
//   }
//   runner.addReporter(exitOnFailReporter)
// }

const jasmineRunner = new Jasmine()
jasmineRunner.specFiles = process.argv[2]
  .split(',')
  .map(f => path.join(__dirname, f))
jasmineRunner.execute()
