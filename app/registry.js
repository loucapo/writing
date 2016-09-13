const dagon = require('dagon');
const path = require('path');

module.exports = function(_options) {
  const options = _options || {};
  const container = dagon(options.dagon).container;
  let result;
  try {
    result = container(x =>
      x.pathToRoot(path.join(__dirname, '/../'))
        .requireDirectoryRecursively('./app/src')
        .for('repository').replaceWith('dataRepository') // eslint-disable-line newline-per-chained-call
        .for('winston').renameTo('logger') // eslint-disable-line newline-per-chained-call
        .groupAllInDirectory('./app/src/controllers', 'controllers')
        .complete(),
      i => i.instantiate('repository').asFunc().complete());
  } catch (ex) {
    console.log(ex); // eslint-disable-line no-console
    console.log(ex.stack); // eslint-disable-line no-console
  }
  return result;
};
