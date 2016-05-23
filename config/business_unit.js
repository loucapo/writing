var _ = require('lodash');

function BusinessUnit(config, name, value) {
  this.config = config;
  this.name = name;
  _.merge(this, value);
  return this;
}

BusinessUnit.prototype.tp_name = function(){
  // the tool_provider name, as it should be listed in gateway
  // this is to enforce that this will always be derived, from the
  // business unit name and the current environment.
  return this.name + '_' + this.config.name;
}

BusinessUnit.prototype.abbrev = function(bu) {
  // hardcoded, returns the abbreviation for the business unit used in LMS course naming and other places
  if ((bu === null) || (bu === undefined)) {
    bu = this.name;
  }
  switch (bu.toLowerCase()) { //should already be downcased... maybe we shouldn't even coerce it?
  case 'barebones':
    return 'BB';
  case 'haydenmcneil':
    return 'HM';
  case 'dynamicbooks':
    return 'DB';
  default:
    throw 'Tried to get the abbreviation for a business unit whose abbreviation is unknown';
  }
};

module.exports = BusinessUnit;
