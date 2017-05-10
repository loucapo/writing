var dagon = require('dagon');
var path = require('path');

module.exports = function(_options) {
  var options   = _options || {};
  var container = dagon(options).container;
  var result;
  try {
    result = container(
      x=> x.pathToRoot(__dirname+'/../')
        .requireDirectoryRecursively('./app/src')
        .for('lodash').renameTo('_') // eslint-disable-line newline-per-chained-call
        .complete());
  } catch (ex) {
    console.log(ex);
    console.log(ex.stack);
  }
  return result;
};