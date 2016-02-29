'use strict';

import co from 'co';
import Q from 'q';
import gutil from 'gulp-util';
import { Repository } from 'nodegit';

module.exports = co.wrap(state => {
  if (!state.opts.git) return state;

  const deferred = Q.defer();
  gutil.log('Initializing new local git repo');
  console.log(Repository, state);

  Repository.init(state.meta.folder, false)
    .then(repository => {
      gutil.log('Repository successfully initialized');
      console.log(repository);
      state.repository = repository;

      deferred.resolve(state);
    });

  return deferred.promise;
});
