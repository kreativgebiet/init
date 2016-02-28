'use strict';

import co from 'co';
import gutil from 'gulp-util';
import * as init from './init';

module.exports = function launch(args) {
  gutil.log('Launching init-cli');

  co(() => args)
    .then(init.pull)
    .then(init.inquire)
    .then(init.removal)
    .then(init.move)
    .then(init.finish)
    .catch(init.error);
};
