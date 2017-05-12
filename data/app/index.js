module.exports = function(options) {
  const container = require('./registry')(options);
  const migrate = container.getInstanceOf('migrate');
  migrate();
}();

