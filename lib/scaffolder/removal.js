var co = require('co');
var rimraf = require('rimraf');
var Q = require('q');

module.exports = co.wrap(function *(state) {
  var deferred = Q.defer();

  rimraf(state.meta.folder + '/.git', function() {
    deferred.resolve(state);
  });

  return deferred.promise;
});
