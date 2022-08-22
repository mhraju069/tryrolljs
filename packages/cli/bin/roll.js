#!/usr/bin/env node
const { Command } = require('commander')

const pkgJson = require('../package.json')
const format = require('../format')
const lint = require('../lint')
const getChangedFiles = require('../get-changed-files')
const getAllFiles = require('../get-all-files')

const program = new Command()

program
  .name('roll')
  .description('CLI tools for Roll applications')
  .version(pkgJson.version)

program
  .command('lint')
  .description('Lint your code')
  .option('--changed', 'lint only changed files')
  .option('--fix', 'fix all auto-fixable problems')
  .action(async (options) => {
    const getFiles = options.changed ? getChangedFiles : getAllFiles
    await lint(await getFiles(), {
      fix: options.fix,
    })
  })

program
  .command('format')
  .description('Format your code')
  .option('--changed', 'format only changed files')
  .action(async (options) => {
    const getFiles = options.changed ? getChangedFiles : getAllFiles
    await format(await getFiles())
  })

program.parse()
