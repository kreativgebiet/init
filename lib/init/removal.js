'use strict';

/**
 * init#removal
 *
 * This file removes unncessesary files from the previously generated temp
 * folder
 */

import co from 'co';
import rimraf from 'rimraf';
import Q from 'q';

module.exports = co.wrap(state => {
  const deferred = Q.defer();
  rimraf(`${state.meta.folder}/.git`, () => deferred.resolve(state));
  return deferred.promise;
});
