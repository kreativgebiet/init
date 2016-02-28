#!/usr/bin/env node

var co = require('co');
var init = require('../lib');
var argv = process.argv.slice(2);

co(function *() { return { args: argv }; })
  .then(init.pull)
  // .then(init.inquire)
  .then(init.removal)
  .then(init.move)
  // .then(init.finish)
  .catch(function *(error) {
    console.log(error);
  });
