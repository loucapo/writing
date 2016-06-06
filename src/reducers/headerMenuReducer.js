import {SELECT_COURSE_FROM_MENU} from './../constants';

const _toggleMenu = (state) => {
    return {...state, dropdownActive: !state.dropdownActive};
};

export const headerMenuCourses = (state = {}, action = null) => {
    switch (action.type) {
        case SELECT_COURSE_FROM_MENU:
            state = action.menuName === 'headerMenuCourses' ? _toggleMenu(state) : state;
            break;
    }
    return state;
};

export const headerMenuHelp = (state = {}, action = null) => {
    switch (action.type) {
        case SELECT_COURSE_FROM_MENU:
            state = action.menuName === 'headerMenuHelp' ? _toggleMenu(state) : state;
            break;
    }
    return state;
};