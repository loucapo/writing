module.exports = function(options) {
  const container = require('./registry')(options);
  const mod = container.getInstanceOf('killAllData');
  mod().then(() => process.exit()); // eslint-disable-line no-process-exit
}();

