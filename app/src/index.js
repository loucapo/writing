var pgasync = require('pg-async');
var data = require('./data');
var fs = require('fs');
var config = require('config');
var cache = require('./objectCache');
var courseSchemas = require('./schemas/courseSchemas.json');
var specificNotifications = require('./schemas/getSpecificNotifications.json');
var viewModels = require('./schemas/viewModels.json');
var deref = require('json-schema-deref-sync');

var gatherDefinitions = () => {
    var defs = { definitions: Object.assign({},
      courseSchemas.definitions,
      viewModels.definitions,
      specificNotifications.definitions) };
    return deref(defs).definitions;
};

var generateAll = () => {
    // more later hence the curlies
    courseDataGenerator.generateAll();
};

var generateDB = function() {
  return async function () {
    console.log('=========="inside data func"=========');
    console.log("inside data func");
    console.log('==========END "inside data func"=========');
    try {
      var pg = new pgasync.default(config.postgres.config);
      var schema = fs.readFileSync(__dirname + '/schema.sql').toString();
      var _data = data();

      console.log('==========BEGIN Schema Load"=========');
      await pg.query(schema);
      console.log('==========END Schema Load=========');
      console.log('==========BEGIN Data Load=========');
      await pg.query(_data);
      console.log('==========END Data Load=========');
    } catch (ex) {
      console.log('==========exeption=========');
      console.log(ex);
      console.log('==========END exeption=========');
    }
  }
};

module.exports = {
    cache,
    definitions: gatherDefinitions(),
    generateAll,
    generateDB
};
