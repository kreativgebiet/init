'use strict';

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
  const deferred = Q.defer();
  const initFile = `./${state.meta.folder}/.init`;

  gutil.log('Searching for .init in folder', initFile);
  state.questions = require(join(process.cwd(), initFile));
  state.questions.unshift({
    type: 'input',
    name: 'name',
    message: 'What\'s the name of the project?',
    validate: input => input !== '',
    default: basename(process.cwd())
  });
  gutil.log('Found and imported .init file. Deleting it now.');
  rimraf(initFile, () => {
    gutil.log('Sucessfully deleted .init file.');
    gutil.log('Starting the user input now...');

    inquirer.prompt(state.questions, answers => {
      state.answers = answers;
      gutil.log('Using answers now to populate template files');
      return deferred.resolve(state);
    });
  });

  return deferred.promise;
});
