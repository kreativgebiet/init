#!/usr/bin/env node
/* eslint-disable */

require('babel-core/register');
var argv = require('yargs')
  .usage('Usage: $0 <repository> [options]')
  .example('$0 kreativgebiet/init-example --no-git')
  .demand(1)
  .alias('b', 'bare')
  .default({ git: false, init: false, bare: false })
  .help('h')
  .alias('h', 'help')
  .describe('bare', 'Initialize a bare git repository')
  .describe('no-git', 'Skip everything git related in finish task')
  .describe('no-init', 'Skip the first git commit, but create a local repository')
  .describe('git', 'Skip the first git commit, but create a local repository')
  .epilog('Copyright (c) 2016 by Kreativgebiet')
  .argv;

require('../lib')({
  opts: argv
});
