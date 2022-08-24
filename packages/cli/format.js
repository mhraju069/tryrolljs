const fs = require('fs')

const prettier = require('prettier')
const config = require('@tryrolljs/prettier-config')

const format = async (files) => {
  try {
    files.forEach((file) => {
      const text = fs.readFileSync(file, 'utf8')
      const formattedText = prettier.format(text, {
        parser: 'babel-ts',
        ...config,
      })
      fs.writeFileSync(file, formattedText)
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

module.exports = format
