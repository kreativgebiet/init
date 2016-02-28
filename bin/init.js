#!/usr/bin/env node
/* eslint-disable */

require('babel-register');
var argv = require('yargs')
  .default({
    git: true,
    init: true,
  }).argv;

require('../lib')({
  args: argv
});
