'use strict';

/**
 * init#finish
 *
 * This file finishes up the project based on the arguments given by the user
 *
 * Arguments:
 * - `--no-git`     - Does not initialize a git repository
 * - `--no-init`    - Does not create an `initial commit`
 * - `--git [name]` - Creates a github repository with `[name]`
 */

import co from 'co';
import gutil from 'gulp-util';

module.exports = co.wrap(state => {
  // TODO: Finish up the project.

  gutil.log('Fin!');
  return state;
});
