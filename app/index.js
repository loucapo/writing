process.env['ALLOW_CONFIG_MUTATIONS'] = true; // eslint-disable-line dot-notation
const registry = require('./registry');
const env = process.env.NODE_ENV || 'development';

require('babel-polyfill');
if (env === 'development') {
  // for development use babel/register for faster runtime compilation
  require('babel-register');
}

module.exports = (function() {
  const container = registry();
  const api = container.getInstanceOf('server');
  api();
}());
