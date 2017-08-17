// FORCING REBUILD 
// DELET THIS
process.env['ALLOW_CONFIG_MUTATIONS'] = true; // eslint-disable-line dot-notation
const registry = require('./registry');

module.exports = (function() {
  const container = registry();
  const api = container.getInstanceOf('server');
  api();
}());
