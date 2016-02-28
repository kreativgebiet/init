#!/usr/bin/env node

var co = require('co');
var scaffolder = require('../lib');
var argv = process.argv.slice(2);

co(function *() { return { args: argv }; })
  .then(scaffolder.pull)
  // .then(scaffolder.inquire)
  .then(scaffolder.removal)
  .then(scaffolder.move)
  // .then(scaffolder.finish)
  .catch(function *(error) {
    console.log(error);
  });
