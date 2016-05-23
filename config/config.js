/*global module, require */

var envs = require('./env');
var BusinessUnit = require('./business_unit');
var _ = require('lodash');
var log = require('../helpers/logger');

function Config(opts) {
  // All environment files loaded from config/env
  this.envs = require('./env');

  // The currently loaded, active environment to test against - the actual configuration
  this.env = null;

  // The currently loaded, active environment to test against - the name
  this.name = null;

  // The config for the current business unit under test
  // (and its name is available at this.BUUT.name)
  this.BUUT = null;

  this.set_active_env = function() {
    var self = this;
    var env = process.env.ECOENV;
    if ((env === null) || (env === undefined)) {
      //TODO: replace with the proper logger
      console.log('=== No ECOENV environment variable detected set, using default environment DEV');
      env = 'dev';
    }
    if (!envs.hasOwnProperty(env)) {
      throw 'Could not find the configuration file corresponding to ECOENV: ' + env + '. Aborting.';
    }
    self.env = envs[env];
    self.name = env;
    return;
  };

  this.set_BUUT = function(BUUT) {
    if ((BUUT === null) || (BUUT === undefined)) {
      this.set_default_BUUT();
    } else {
      if (!this.business_units.hasOwnProperty(BUUT)) {
        throw 'Attempted to set the BUUT to a business unit that does not exist or is not loaded.  Aborting.';
      }
      this.BUUT = this.business_units[BUUT];
    }
    return;
  };

  this.set_default_BUUT = function() {
    var self = this;
    var bu = process.env.ECOBUUT;
    if ((bu === null) || (bu === undefined)) {
      bu = Object.keys(self.env.business_units)[0];
      //TODO: replace with the proper logger
      console.log('=== No ECOBU environment variable detected set, attempting to use first listed for this environment: ' + bu);
    }
    if (!self.business_units.hasOwnProperty(bu)) {
      throw 'ECOBUUT set to ' + process.env.ECOBUUT + ', but no correspondingly named business unit section found in environment config' + self.name + '.  Aborting.';
    }
    self.set_BUUT(bu);
    return;
  };

  this.set_options = function() {
    _.merge(this, opts);
    return;
  };

  // list available business unit NAMES (for the current environment)
  this.get_business_units = function() {
    return Object.keys(self.env.business_units);
  };

  this.load_business_units = function() {
    var self = this;
    // not overkill: helpful to debug incorrectly generated {env}.yaml files
    if (!self.env.hasOwnProperty('business_units')) {
      throw 'Could not find any config section for business_units in ' + this.name + ' config.';
    }
    if (typeof self.env.business_units !== 'object') {
      throw 'Expected the config section for business_units in ' + this.name + ' config to contain a list of business units.';
    }
    if (self.env.business_units.length < 1) {
      throw 'Expected the config section for business_units in ' + this.name + ' config to contain a list of business units.';
    }
    _.each(self.env.business_units, function(value, name) {
      self.load_business_unit(name, value);
      return;
    });
    return;
  };

  this.load_business_unit = function(name, value) {
    this.business_units[name] = new BusinessUnit(this, name, value);
    return;
  };

  this.set_active_env();
  this.business_units = {};
  this.load_business_units();
  this.set_BUUT();
  this.set_options();

}

module.exports = new Config({
  db_logger: false, // 'db',
  //db_logger: 'db',
  leave_browsers_open_on_exit: true,
  default_element_wait_time: 5000,
  // @todo: these should all be moved somewhere else.
  // documenter: {
  //   docdir: './documentation',
  // }
});

  //NOTE: this is a real hack, that might not matter.
  //  See, since we directly insert a hashed password into the moodle db,
  //  instead of hashing it ourselves, we don't store what the original
  //  should have been anywhere.  If/when we fix this, probably not until
  //  we altogether ditch moodle, we can get rid of this 'realpassword'.
  //  Since it works wothout problem, probably not worth fixing until then.
  //NOTE: this also means that if we compare generated users made through
  //  the UI with the actual db record, the hashed password will almost
  //  guaranteed not match.
