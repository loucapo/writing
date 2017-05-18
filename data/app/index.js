module.exports = function(options) {
  const container = require('./registry')(options);
  const migrate = container.getInstanceOf('migrate');
  const server = container.getInstanceOf('server');
  migrate();
  server();
}();
