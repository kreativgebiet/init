var co = require('co');
var Q = require('q');
var nunjucks = require('nunjucks');
var join = require('path').join;
var through2 = require('through2');

var fs = require('fs.extra');

module.exports = co.wrap(function *(state) {
  var deferred = Q.defer();
  var walker = fs.walk(state.meta.folder);

  walker.on('file', function(root, stat, next) {
    console.log('Copying', stat.name, 'to it\'s new position!');
    var source = join(root, stat.name);
    var dist = join(process.cwd(), stat.name);

    var readStream = fs.createReadStream(source);
    var writeStream = fs.createWriteStream(dist);

    readStream
      .pipe(through2(function(chunk, enc, callback) {
        var contents = chunk.toString();
        var compiled = nunjucks.renderString(contents, state.data);
        callback(null, compiled);
      }))
      .pipe(writeStream);

    readStream.on('close', next);
  });

  walker.on('end', () => deferred.resolve());
  walker.on('errors', () => deferred.reject());

  return deferred.promise;
});
