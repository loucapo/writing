var cache = require('objectCache');
var courseDataGenerator = require('./courseDataGenerator');
var courseSchema = require('./schemas/courseSchemas.json');

module.exports = {
    cache,
    courseDataGenerator,
    courseSchema
};
