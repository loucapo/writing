var jsf = require('json-schema-faker');
var schema = require('./schemas/courseSchemas.json');
var cache = require('./objectCache');
var deref = require('json-schema-deref-sync');
var expandedSchema = deref(schema).definitions;

jsf.format('uuid', (gen) => gen.faker.random.uuid());

var generateFullCourses = () => {
    for (var i = 1; i <= 3; i ++) {
        var course = jsf(expandedSchema.course);
        for (var ii = 1; ii <= 3; ii ++) {
            var section = jsf(expandedSchema.section);
            for (var iii = 1; iii <= 3; iii ++) {
                var assignment = jsf(expandedSchema.assignment);
                section.assignments = section.assignments || [];
                section.assignments.push(assignment);
            }
            course.sections = course.sections || [];
            course.sections.push(section);
        }
        cache.courses[course.externalId.toString()] = course;
    }
};

var generateFullSections = () => {
    for (var ii = 1; ii <= 3; ii++) {
        var section = jsf(expandedSchema.section);
        for (var iii = 1; iii <= 3; iii++) {
            var assignment = jsf(expandedSchema.assignment);
            section.assignments = section.assignments || [];
            section.assignments.push(assignment);
        }
        cache.sections[section.externalId.toString()] = section;
    }
};

var generateAssignments = () => {
    for (var iii = 1; iii <= 3; iii++) {
        var assignment = jsf(expandedSchema.assignment);
        cache.assignments[assignment.externalId.toString()] = assignment;
    }
};

var generateAll = () => {
    generateFullCourses();
    generateFullSections();
    generateAssignments();
};

module.exports = {
    generateFullCourses,
    generateFullSections,
    generateAssignments,
    generateAll
};
