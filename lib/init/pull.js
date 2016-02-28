'use strict';

/**
 * init#pull
 *
 * This file is pulling the project from the github repository into a randomly
 * generated folder under `.tmp` and sets some things into the state.meta
 * object.
 */

import co from 'co';
import Q from 'q';
import gutil from 'gulp-util';
import { spawn } from 'child_process';

module.exports = co.wrap(state => {
  // Make this methods asynchronous
  const deferred = Q.defer();
  const uuid = guid();

  // Assign temporary clone variables
  const repoUrl = `https://github.com/${state.args[0]}.git`;
  const distFolder = `tmp/${uuid}`;
  gutil.log(`Pulling ${state.args[0]}`);

  // Assigning some meta variables to the state
  state.meta = {};
  state.meta.repo = state.args[0];
  state.meta.folder = distFolder;
  state.meta.guid = uuid;

  const process = spawn('git', ['clone', repoUrl, distFolder]);

  process.on('close', (code) => {
    if (code !== 0) {
      deferred.reject(new Error('Could not pull repository from github'));
    } else {
      gutil.log('Successfully pulled repository!');
      deferred.resolve(state);
    }
  });

  return deferred.promise;
});

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + s4();
}
