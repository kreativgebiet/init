var co = require('co');
var Q = require('q');
var rimraf = require('rimraf');
var spawn = require('child_process').spawn;

module.exports = co.wrap(function *(state) {
  // Make this methods asynchronous
  var deferred = Q.defer();
  var uuid = guid();

  // Assign temporary clone variables
  var repoUrl = 'https://github.com/' + state.args[0] + '.git';
  var distFolder = '.tmp/' + uuid;
  console.log('Pulling', state.args[0]);

  // Assigning some meta variables to the state
  state.meta = {};
  state.meta.repo = state.args[0];
  state.meta.folder = distFolder;
  state.meta.guid = uuid;

  var process = spawn('git', ['clone', repoUrl, distFolder]);

  process.on('close', (code) => {
    if (code !== 0) {
      deferred.reject(new Error('Could not pull repository from github'));
    } else {
      console.log('Successfully pulled repository!');
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
