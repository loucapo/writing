const dagon = require('dagon');

module.exports = function(_options) {
  const options = _options || {};
  const container = dagon(options).container;
  let result;
  try {
    result = container(
      x=> x.pathToRoot(__dirname + '/../')
        .requireDirectoryRecursively('./app/src')
        .complete());
  } catch (ex) {
    console.log(ex);
    console.log(ex.stack);
  }
  return result;
};
