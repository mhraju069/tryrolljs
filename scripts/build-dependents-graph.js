#!/usr/bin/env node
const path = require('path')
const { getDependentsGraph } = require('@changesets/get-dependents-graph')
const { getPackages } = require('@manypkg/get-packages')
const madge = require('madge')

const OUTPUT_FILE_NAME = 'dependantsgraph.svg'
const EXAMPLE_PACKAGE_DIR_INCLUDE = '/examples/'

const mapToObject = (map) => {
  const obj = {}
  map.forEach((value, key) => {
    obj[key] = value
  })
  return obj
}

const buildDependantsGraph = async () => {
  const cwd = process.cwd()
  const packages = await getPackages(cwd)
  const nonExamplePackages = packages.packages.filter(
    (package) => !package.dir.includes(EXAMPLE_PACKAGE_DIR_INCLUDE),
  )
  packages.packages = nonExamplePackages
  const graph = getDependentsGraph(packages)
  try {
    const response = await madge(mapToObject(graph))
    await response.image(path.join(cwd, OUTPUT_FILE_NAME))
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

buildDependantsGraph()
