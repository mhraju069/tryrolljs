const fs = require('fs')
const util = require('node:util')
const exec = util.promisify(require('node:child_process').exec)

const { isNotEmpty, getFullPath, uniq } = require('./utils')

const getAllFiles = async () => {
  const { stdout, stderr } = await exec(
    "git ls-files . --exclude-standard -c -m -o | grep -E '.*.(js|jsx|ts|tsx)$'",
  )
  if (stderr) {
    throw new Error(stderr)
  }

  return uniq(stdout.split('\n').filter(isNotEmpty).map(getFullPath)).filter(
    fs.existsSync,
  )
}

module.exports = getAllFiles
