const jsf = require('json-schema-faker');
const schema = require('./schemas/courseSchemas.json');
const cache = require('./objectCache');

jsf.format('uuid', function(gen, schema) {
    return gen.faker.random.uuid();
});

const generateFullCourses = () => {
    var refs = [
        {
            id: 'section',
            type: 'object'
        },
        {
            id: 'assignment',
            type: 'object'
        }
    ];
    for( var i = 1; i <=3; i++ ){
        var course = jsf(schema.course,refs);
        for( var ii = 1; ii <=3; ii++ ){
            var section = jsf(schema.section);
            for( var iii = 1; iii <=3; iii++ ){
                var assignment = jsf(schema.assignment);
                section.assignments = section.assignments || [];
                section.assignments.push(assignment);
            }
            course.sections = course.sections || [];
            course.sections.push(section);
        }
        cache.courses[course.id.toString()] = course;
    }
    console.log(JSON.stringify(cache.courses, null, 4));
}();

const generateFullSections = () => {
    for (var ii = 1; ii <= 3; ii++) {
        var section = jsf(schema.section);
        for (var iii = 1; iii <= 3; iii++) {
            var assignment = jsf(schema.assignment);
            section.assignments = section.assignments || [];
            section.assignments.push(assignment);
        }
        cache.section[section.id.toString()] = section;
    }
    console.log(JSON.stringify(cache.courses, null, 4));
};

const generateAssignments = () => {
        for (var iii = 1; iii <= 3; iii++) {
            var assignment = jsf(schema.assignment);
        cache.assignments[assignment.id.toString()] = assignment;
    }
    console.log(JSON.stringify(cache.courses, null, 4));
};
