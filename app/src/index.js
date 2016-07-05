var cache = require('./objectCache');
var courseDataGenerator = require('./courseDataGenerator');
var courseSchemas = require('./schemas/courseSchemas.json');
var viewModels = require('./schemas/viewModels.json');
var deref = require('json-schema-deref-sync');

var gatherDefinitions = () => {
    var defs = { definitions: Object.assign(courseSchemas.definitions, viewModels.definitions) };
    return deref(defs).definitions;
};

var generateAll = () => {
    // more later hence the curlies
    courseDataGenerator.generateAll();
};

module.exports = {
    cache,
    courseDataGenerator,
    definitions: gatherDefinitions,
    generateAll
};
