var cache = require('./objectCache');
var courseDataGenerator = require('./courseDataGenerator');
var courseSchema = require('./schemas/courseSchemas.json');

var schemas = {
    definitions: {
        courses: courseSchema.course,
        section: courseSchema.section,
        assignment: courseSchema.assignment
    }
};

module.exports = {
    cache,
    courseDataGenerator,
    schemas
};
