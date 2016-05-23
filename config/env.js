/* global module, require, console, __dirname, __filename, process */
var _ = require('lodash');
var yaml = require('js-yaml');
var fs = require('fs');

function readEnvDir() {
  var files = fs.readdirSync(__dirname + '/env');
  var envs = {};
  _.each(files, function(f) {
    if (f.slice(-5).toLowerCase() === '.yaml') {
      var file = __dirname + '/env/' + f;
      var name = f.slice(0, -5).toLowerCase();
      if (envs.hasOwnProperty(name)) {
        throw "Looks like you've got two environment yaml files that only differ in case.  Don't do that."
      }
      envs[name] = yaml.safeLoad(fs.readFileSync(file, 'utf8'));
    }
    return;
  });
  return envs;
}

module.exports = readEnvDir();
