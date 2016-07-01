/**
 * Cre`ated by rharik on 5/19/16.
 */

import { EXPAND_SECTION } from './../../src/constants';
import { sections as SUT } from './../../src/reducers/sectionReducers';
import * as chai from 'chai';
const should = chai.should();

describe('CHAPTER_REDUCERS', () => {
    describe('when_calling_expand_section', () => {
        var _action;
        var _initialState;
        beforeEach(() => {
            _initialState = {
                1: {
                    isExpanded: false,
                    id: 1,
                    title: 'Experiment 1 - Density',
                    summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
                    caption: 'Section 1 Content',
                    tableSummary: 'A list of content and assignments for Section 1',
                    assignments: [1]
                }
            };
            _action = {
                type: EXPAND_SECTION,
                id: 1
            };
        });

        it('should_return_section_state', () => {
            var newState = SUT(_initialState, _action);
            newState.should.not.be.null;
        });

        it('should_toggle_isExpanded', () => {
            var newState = SUT(_initialState, _action);
            newState[1].isExpanded.should.be.true;
        });
    });
});
