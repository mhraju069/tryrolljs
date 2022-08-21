const path = require('path')

const getFullPath = (filePath) => path.join(process.cwd(), filePath)
const isNotEmpty = (str) => str.length > 0
const uniq = (arr) => Array.from(new Set(arr))

module.exports = { getFullPath, isNotEmpty, uniq }
