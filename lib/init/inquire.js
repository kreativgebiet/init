var co = require('co');
var inquirer = require('inquirer');

module.exports = co.wrap(function *(state) {
  var deferred = Q.defer();
  var startrFile = state.meta.folder + '/.startr.json';

  state.questions = fs.readFileSync(startrFile);
  rimraf(startrFile); // Remove startr file since it's not useful

  inquirer.prompt(state.questions, function *(answers) {
    state.answers = answers;
    return deferred.resolve(state);
  });

  return deferred.promise;
});
