
var chai =require('chai');
var SUT = require('./../src/index');

const should = chai.should();

describe('JOIN DEFINITIONS', () => {
    describe('when_calling_definitions', () => {
        var defs;
        beforeEach(() => {
            defs = SUT.definitions;
        });

        it('should_return_shcemas_for_all_included_files', () => {
            defs.course.should.not.be.null;
            defs.section.should.not.be.null;
            defs.assignment.should.not.be.null;
            defs.availableCourse.should.not.be.null;
            defs.notification.should.not.be.null;
            defs.error.should.not.be.null;
        });

        it('should_return_schemas_that_are "derefd"', () => {
            defs.course.properties.sections.should.be.an.object;
        });

        it('should_properly_set_up_the_course_notification', () => {
            defs.courseNotification.allOf[1].properties.payload.title.should.equal('Course');
        })
    });
});
