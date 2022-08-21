const { ESLint } = require('eslint')

const lint = async (files) => {
  try {
    const eslint = new ESLint({
      fix: true,
      resolvePluginsRelativeTo: __dirname,
    })

    const results = await eslint.lintFiles(files)

    if (results.length === 0) {
      console.log('No lint issues found')
      process.exit(0)
    }

    const formatter = await eslint.loadFormatter('stylish')
    const resultText = formatter.format(results)
    console.log(resultText)
    process.exit(1)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

module.exports = lint
