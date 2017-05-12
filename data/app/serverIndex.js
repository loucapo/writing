module.exports = function(options) {
  const container = require('./registry')(options);
  const server = container.getInstanceOf('server');
  server();
}();

