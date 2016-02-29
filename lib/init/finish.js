/**
 * init#finish
 *
 * This file finishes up the project based on the arguments given by the user
 */

import co from 'co';
import Q from 'q';
import gutil from 'gulp-util';
import { initialize, commit } from './actions';

module.exports = co.wrap(state => {
  const deferred = Q.defer();

  if (state.opts.git) {
    co(() => state)
      .then(initialize)
      .then(commit)
  } else {
    gutil.log('Fin!');
  }

  return deferred.promise;
});
