/**
 * Created by rharik on 5/26/16.
 */
import {transform as SUT} from '../../src/containers/CourseContainer';
import * as chai from 'chai';
let should = chai.should();

describe('COURSE_CONTAINER_TRANSFORM', () => {
    describe('when_calling_transform', () => {
        var props;
        beforeEach(() => {
            props = {
                courses: {
                    1: {
                        lastUpdated: '',
                        id: 1,
                        courseTitle: 'General Chemistry Laboratory - 6660',
                        active: true,
                        chapters: []
                    }
                },
                chapters: {},
                currentCourse: 1
            };
        });

        it('should not return null', () => {
            SUT(props).should.not.be.null;
        });

        it('should return an object with a course with proper ID', () => {
           SUT(props).id.should.equal(1);
       });
    });
});