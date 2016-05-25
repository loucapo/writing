/**
 * Cre`ated by rharik on 5/19/16.
 */

import {COURSE_MENU_HOVER, HELP_MENU_HOVER} from './../../src/constants'
import {headerMenuCourses, headerMenuHelp} from './../../src/reducers/headerMenuReducer';
import * as chai from 'chai';
let should = chai.should();


describe("HEADER_MENU_REDUCERS", () => {
    describe('when_calling_course_menu_hover', () => {
        var _action;
        var _initialState;
        beforeEach(() => {
            _initialState = {
                dropdownActive: false,
                    items: [
                    {
                        id: 1,
                        name: 'General Chemistry Laboratory - 6660',
                        isActive: true
                    }
                ]
            };
            _action = {
                type: COURSE_MENU_HOVER
            };
        });

        it('should_return_state', () => {
            var newState = headerMenuCourses(_initialState, _action);
            newState.should.not.be.null;
        });

        it('should_toggle_dropdownActive', () => {
            var newState = headerMenuCourses(_initialState, _action);
            newState.dropdownActive.should.be.true;
        })
    });

    describe('when_calling_help_menu_hover', () => {
        var _action;
        var _initialState;
        beforeEach(() => {
            _initialState = {
                dropdownActive: false,
                items: [
                    {id: 1, name: 'User Guide'},
                    {id: 2, name: 'Email Technical Support'},
                    {id: 3, name: 'Chat with an Agent'},
                    {id: 4, name: 'Show Book Information'}
                ]
            };
            _action = {
                type: HELP_MENU_HOVER
            };
        });

        it('should_return_state', () => {
            var newState = headerMenuHelp(_initialState, _action);
            newState.should.not.be.null;
        });

        it('should_toggle_dropdownActive', () => {
            var newState = headerMenuHelp(_initialState, _action);
            newState.dropdownActive.should.be.true;
        })
    })
});