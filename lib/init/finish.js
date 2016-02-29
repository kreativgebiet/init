/**
 * init#finish
 *
 * This file finishes up the project based on the arguments given by the user
 */

import co from 'co';
import Q from 'q';
import gutil from 'gulp-util';
import { exec } from 'child_process';

module.exports = co.wrap(state => {
  const deferred = Q.defer();

  if (state.opts.git) {
    exec('git init', (err) => {
      if (err) deferred.reject(err);
      gutil.log('Initialized empty git repository.');

      if (state.opts.init) {
        exec('git commit -am \'initial commit\'', (err2) => {
          if (err2) deferred.reject(err2);

          gutil.log('Created initial commit with scaffold');
        });
      }
    });
  } else {
    gutil.log('Fin!');
  }

  return deferred.promise;
});
