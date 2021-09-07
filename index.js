#! /usr/bin/env node

const { program } = require('commander')
const generate = require('./generate.js')
const { version } = require('./package.json')

console.log('asset-generator; use --help for options')

program
  .version(version)
  .argument('<files...>', 'file/s to convert')
  .option('-a, --android [path]', 'android path')
  .option('-i, --ios [path]', 'iOS Path')

program.parse()

const options = program.opts()

generate(program.args, options.android, options.ios)
