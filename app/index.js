process.env['ALLOW_CONFIG_MUTATIONS'] = true; // eslint-disable-line dot-notation
var registry = require('./registry-test');

module.exports = (function () {
    var container = registry();
    var api = container.getInstanceOf('server');
    api();
}());
