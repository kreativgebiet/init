'use strict';

/**
 * init#move
 *
 * This file copies the project from the previously generated temp folder into
 * the current working directory and runs the renderString method of nunjucks
 * onto the template file
 */

import co from 'co';
import Q from 'q';
import nunjucks from 'nunjucks';
import { join } from 'path';
import through2 from 'through2';
import fs from 'fs.extra';
import gutil from 'gulp-util';
import { green } from 'chalk';

module.exports = co.wrap(state => {
  const deferred = Q.defer();
  const walker = fs.walk(state.meta.folder);

  walker.on('file', (root, stat, next) => {
    gutil.log(green(`Copying ${stat.name} to it's new position!`));
    gutil.log(`    ${join(process.cwd(), root, stat.name)} -> ${join(process.cwd(), stat.name)}`);

    const source = join(root, stat.name);
    const dist = join(process.cwd(), stat.name);

    const readStream = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(dist);

    readStream
      .pipe(through2((chunk, enc, callback) => {
        const contents = chunk.toString();
        const compiled = nunjucks.renderString(contents, state.data);
        callback(null, compiled);
      }))
      .pipe(writeStream);

    readStream.on('close', next);
  });

  walker.on('end', () => deferred.resolve(state));
  walker.on('errors', deferred.reject);

  return deferred.promise;
});
