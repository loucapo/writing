/**
 * Created by rharik on 5/20/16.
 */

import {transform} from './../../src/containers/AssignmentsContainer';
import * as chai from 'chai';
chai.should();

describe("ASSIGNMENT_CONTAINER", () => {
    describe('when_calling_transform', () => {
        var _props;
        var _initialState;
        beforeEach(() => {
            _initialState = {
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
                assignments: {
                    1: {
                        id: 1,
                        link: 'https://hm-staging.mnv-tech.com/mod/lti/view.php?id=7778"',
                        name: 'Chemical Reactions Pre-Lab Assignment',
                        badge: 'TO DO',
                        openDate: 1460987807,
                        closeDate: 1461600000,
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
                        closeDate: 1461600000,
                        pointsEarned: 3,
                        pointsTotal: 300,
                        type: 'Assesment'
                    }
                }
            };
            _props = {
                id: 1
            };
        });

        it('should_return_proper_value', () => {
            var newState = transform(_initialState, _props);
            newState.assignments.length.should.equal(1);
            newState.assignments[0].id.should.equal(1);
        });
    });
});
