/**
 * Created by rharik on 5/26/16.
 */

import {transform as SUT} from './../../src/containers/ChaptersContainer';
import * as chai from 'chai';
let should = chai.should();


describe('CHAPTER_CONTAINER_TRANSFORM', () => {
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
                        chapters: [1]
                    },
                    2: {
                        lastUpdated: '',
                        id: 2,
                        courseTitle: 'General Chemistry Laboratory - 1331',
                        active: true,
                        chapters: [2]
                    }
                },
                chapters: {
                    1: {
                        isExpanded: false,
                        id: 1,
                        title: "Experiment 1 - Density",
                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
                        caption: 'Chapter 1 Content',
                        tableSummary: 'A list of content and assignments for Chapter 1',
                        assignments: [1]
                    },

                    2: {
                        isExpanded: false,
                        id: 2,
                        title: "Experiment 2 - Density",
                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
                        caption: 'Chapter 2 Content',
                        tableSummary: 'A list of content and assignments for Chapter 2',
                        assignments: [2]
                    }
                },
                currentCourse: 1
            };
        });

        it('should not return null', () => {
            SUT(props).should.not.be.null;
        });

        it('should return a valid object with chapters property', () => {
            SUT(props).chapters.should.not.be.undefined;
        });

        it('should return a chapters property with an array length of 1', () => {
            SUT(props).chapters.length.should.equal(1);
        });

        it('should return the proper chapter ID for the current course', () => {
            SUT(props).chapters[0].id.should.equal(1);
        });

    });

    describe('when_calling_transform_on_course_with_no_chapters', () => {
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

        it('should return a valid object with chapters property', () => {
            SUT(props).chapters.should.not.be.undefined;
        });

        it('should return a chapters property with an array length of 0', () => {
            SUT(props).chapters.length.should.equal(0);
        });
    });

    describe('when_calling_transform_where_current_course_does_not_exist', () => {
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

        it('should return a valid object with chapters property', () => {
            SUT(props).chapters.should.not.be.undefined;
        });

        it('should return a chapters property with an array length of 0', () => {
            SUT(props).chapters.length.should.equal(0);
        });
    });

});