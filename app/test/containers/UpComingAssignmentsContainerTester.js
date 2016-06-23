/**
 * Created by rharik on 5/26/16.
 */
import SUT from '../../src/containers/selectors/upcomingAssignmentsSelector';
import moment from 'moment';
import * as chai from 'chai';
let should = chai.should();

describe('UP_COMING_ASSIGNMENTS_CONTAINER_TRANSFORM', () => {
    describe('when_calling_transform', () => {
        var props;
        beforeEach(() => {
            props = {
                currentCourse: 1,
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
                        assignments: [1, 2]
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
                },
                assignments: {
                    1: {
                        id: 1,
                        link: 'https://hm-staging.mnv-tech.com/mod/lti/view.php?id=7778"',
                        name: 'Chemical Reactions Pre-Lab Assignment',
                        badge: 'TO DO',
                        openDate: 1460987807,
                        closeDate: moment().add(2, 'days').unix(),
                        pointsEarned: 3,
                        pointsTotal: 300,
                        type: 'Assesment'
                    },
                    2: {
                        id: 2,
                        link: 'https://hm-staging.mnv-tech.com/mod/lti/view.php?id=7778"',
                        name: 'Chemical Reactions Pre-Lab Assignment',
                        badge: 'TO DO',
                        openDate: 1460987807,
                        closeDate: moment().subtract(2, 'days').unix(),
                        pointsEarned: 3,
                        pointsTotal: 300,
                        type: 'Assesment'
                    }
                }
            };
        });

        it('should not return null', () => {
            SUT(props).should.not.be.null;
        });

        it('should return a valid object with assignments property', () => {
            SUT(props).assignments.should.not.be.undefined;
        });

        it('should return only upcoming assignments', () => {
            SUT(props).assignments.length.should.equal(1);
        });
    });
});
