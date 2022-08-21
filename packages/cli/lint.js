const { ESLint } = require('eslint')

const hasErrors = (results) =>
  results.some((result) => result.errorCount > 0 || result.fatalErrorCount > 0)

const lint = async (files) => {
  try {
    const eslint = new ESLint({
      fix: true,
      resolvePluginsRelativeTo: __dirname,
    })

    const results = await eslint.lintFiles(files)
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
