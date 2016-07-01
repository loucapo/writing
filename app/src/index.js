var cache = require('./objectCache');
var courseDataGenerator = require('./courseDataGenerator');
var schema = require('./schemas/courseSchemas.json');
var deref = require('json-schema-deref-sync');
var definitions = deref(schema).definitions;


var generateAll = () => {
    // more later hence the curlies
    courseDataGenerator.generateAll();
};

module.exports = {
    cache,
    courseDataGenerator,
    definitions,
    generateAll
};
