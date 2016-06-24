/**
 * Created by rharik on 5/26/16.
 */

import SUT  from './../../src/containers/selectors/sectionsSelector';
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
                        sections: [1]
                    },
                    2: {
                        lastUpdated: '',
                        id: 2,
                        courseTitle: 'General Chemistry Laboratory - 1331',
                        active: true,
                        sections: [2]
                    }
                },
                sections: {
                    1: {
                        isExpanded: false,
                        id: 1,
                        title: 'Experiment 1 - Density',
                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
                        caption: 'Section 1 Content',
                        tableSummary: 'A list of content and assignments for Section 1',
                        assignments: [1]
                    },

                    2: {
                        isExpanded: false,
                        id: 2,
                        title: 'Experiment 2 - Density',
                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
                        caption: 'Section 2 Content',
                        tableSummary: 'A list of content and assignments for Section 2',
                        assignments: [2]
                    }
                }
            };
        });

        it('should not return null', () => {
            SUT(props, {params: { id: 1 }} ).should.not.be.null;
        });

        it('should return a valid object with sections property', () => {
            SUT(props, {params: { id: 1 }}).sections.should.not.be.undefined;
        });

        it('should return a sections property with an array length of 1', () => {
            SUT(props, {params: { id: 1 }}).sections.length.should.equal(1);
        });

        it('should return the proper section ID for the current course', () => {
            SUT(props, {params: { id: 1 }}).sections[0].id.should.equal(1);
        });

    });

    describe('when_calling_transform_on_course_with_no_sections', () => {
        var props;
        beforeEach(() => {
            props = {
                courses: {
                    1: {
                        lastUpdated: '',
                        id: 1,
                        courseTitle: 'General Chemistry Laboratory - 6660',
                        active: true,
                        sections: []
                    }
                },
                sections: {},
                currentCourse: 1
            };
        });

        it('should not return null', () => {
            SUT(props, {params: { id: 1 }}).should.not.be.null;
        });

        it('should return a valid object with sections property', () => {
            SUT(props, {params: { id: 1 }}).sections.should.not.be.undefined;
        });

        it('should return a sections property with an array length of 0', () => {
            SUT(props, {params: { id: 1 }}).sections.length.should.equal(0);
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
                        sections: []
                    }
                },
                sections: {},
                currentCourse: 1
            };
        });

        it('should not return null', () => {
            SUT(props, {params: { id: 1 }}).should.not.be.null;
        });

        it('should return a valid object with sections property', () => {
            SUT(props, {params: { id: 1 }}).sections.should.not.be.undefined;
        });

        it('should return a sections property with an array length of 0', () => {
            SUT(props, {params: { id: 1 }}).sections.length.should.equal(0);
        });
    });

});
