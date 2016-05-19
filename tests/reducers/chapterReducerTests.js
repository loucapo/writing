/**
 * Created by rharik on 5/19/16.
 */

import {EXPAND_CHAPTER} from './../../src/constants'
import {expandChapter} from './../../src/reducers/chapterReducers';
import * as chai from 'chai';

let should = chai.should();


describe("CHAPTER_REDUCERS", () => {
    describe('when_calling_expand_chapter', () => {
        var _action;
        var _initialState;
        beforeEach(() => {
            _initialState = {
                1: {
                    isExpanded: false,
                    id: 1,
                    title: "Experiment 1 - Density",
                    summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
                    caption: 'Chapter 1 Content',
                    tableSummary: 'A list of content and assignments for Chapter 1',
                    assignments: [1]
                }
            };
            _action = {
                type: EXPAND_CHAPTER,
                id: 1
            };
        });
        it('should_return_chapter_state', () => {
            var newState = expandChapter(_initialState, _action);
            newState.should.not.be.null;
        })
    })
});