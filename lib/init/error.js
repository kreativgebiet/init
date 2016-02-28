'use strict';

/**
 * init#error
 *
 * This file handles the errors for the user so that every command that fails is
 * getting an appropiate error message displayed beautifully.
 */

import co from 'co';
import gutil from 'gulp-util';
import { red } from 'chalk';

module.exports = co.wrap(error => {
  if (error.code === 'MODULE_NOT_FOUND') {
    gutil.log('---');
    gutil.log(red('We cannot find an `.init` file in the repository.'));
    gutil.log(red('Please be sure it is available'));
  } else {
    gutil.log(red('An error appeared:', error.message));
    gutil.log(red('Exited with code ', error.code));
  }
})
