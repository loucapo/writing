var Promise = require('bluebird');
var fs      = require('fs');
var yaml    = require('js-yaml');

var cfg = require('../../config/config');
var log = require('../../helpers/logger')(cfg);

var dbControl  = require('../../data/db_control');
var fixtures   = require('../../data/fixtures');
var scenarios  = yaml.safeLoad(fs.readFileSync(__dirname + '/../../data/scenarios.yaml', 'utf8'));

function database_setup(scenario) {
  return Promise.join(
    dbControl.reset(cfg.env.ecoapi.db, scenarios.default.eco),
    dbControl.reset(cfg.BUUT.lmsdb, scenarios.default.moodle),
    function() {
      if (cfg.name === 'dev') {
        return dbControl.reset(cfg.env.gateway.db, scenarios.default.gateway);
      } else {
        //TODO: replace with the proper logger
        console.log('Not running in dev env, so not resetting the gateway database');
      }
      return;
    }).then(function() {
      return process.exit();
    });
//  return;
}

database_setup();
