const { ESLint } = require('eslint')

const hasErrors = (results) =>
  results.some((result) => result.errorCount > 0 || result.fatalErrorCount > 0)

const lint = async (files, options = { fix: false }) => {
  try {
    const eslint = new ESLint({
      fix: options.fix,
      resolvePluginsRelativeTo: __dirname,
    })

    const results = await eslint.lintFiles(files)
    if (options.fix) {
      await ESLint.outputFixes(results)
    }

    const formatter = await eslint.loadFormatter('stylish')
    const resultText = formatter.format(results)

    if (hasErrors(results)) {
      console.log(resultText)
      process.exit(1)
    } else {
      console.log(resultText)
    }
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

module.exports = lint
