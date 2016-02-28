#!/usr/bin/env node
/* eslint-disable */

require('babel-register');

require('../lib')({
  args: process.argv.slice(2)
});
