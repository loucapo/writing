process.env['ALLOW_CONFIG_MUTATIONS'] = true; // eslint-disable-line dot-notation
var extend = require('extend');
var config = require('config');
var registry = require('./registry');

module.exports = (function (_options) {
    const options = {
        dagon: {
            application: 'api'
        }
    };
    extend(options, config.get('configs') || {}, _options || {});
    var container = registry(options);
    var api = container.getInstanceOf('server');
    api();
}());
