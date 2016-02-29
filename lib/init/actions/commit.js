'use strict';

import co from 'co';
import Q from 'q';
import gutil from 'gulp-util';
import { Repository } from 'nodegit';

module.exports = co.wrap(state => {
  if (!state.opts.git) return state;

  const deferred = Q.defer();
  gutil.log('Creating your first `initial commit` commit now.');
  Repository.createCommit();

  return deferred.promise;
});
