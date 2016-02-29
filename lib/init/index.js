/**
 * index.js
 *
 * This file only exports all modules out of this folder for better import
 * using ecmascript6 module syntax
 */

module.exports = {
  pull: require('./pull'),
  inquire: require('./inquire'),
  removal: require('./removal'),
  move: require('./move'),
  finish: require('./finish'),
  error: require('./error'),
};
