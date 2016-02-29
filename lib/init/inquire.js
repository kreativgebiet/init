/**
 * init#inquire
 *
 * This file asks the user for the inputs specified by the init template author
 * and adds the answers into the current state
 */

import co from 'co';
import Q from 'q';
import gutil from 'gulp-util';
import inquirer from 'inquirer';
import rimraf from 'rimraf';
import { basename, join } from 'path';

module.exports = co.wrap(state => {
  gutil.log('Searching for .init in folder', initFile);

  // Create a async deferred object
  const deferred = Q.defer();
  const initFile = `./${state.meta.folder}/.init`;

  // Import questions from local init file
  state.questions = require(join(process.cwd(), initFile));

  // And unshift to include the name question by default
  state.questions.unshift({
    type: 'input',
    name: 'name',
    message: 'What\'s the name of the project?',
    validate: input => input !== '',
    default: basename(process.cwd()),
  });

  gutil.log('Found and imported .init file. Deleting it now.');

  // First remove the init file
  rimraf(initFile, () => {
    gutil.log('Sucessfully deleted .init file.');
    gutil.log('Starting the user input now...');

    // And then send the questionaire to the users shell
    inquirer.prompt(state.questions, answers => {
      state.data = answers;
      gutil.log('Using answers now to populate template files');
      return deferred.resolve(state);
    });
  });

  return deferred.promise;
});
