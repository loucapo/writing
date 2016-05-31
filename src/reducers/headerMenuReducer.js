import {MENU_TOGGLE} from './../constants';

const _toggleMenu = (state) => {
    return {...state, dropdownActive: !state.dropdownActive};
};

export const headerMenuCourses = (state = {}, action = null) => {
    switch (action.type) {
        case MENU_TOGGLE:
            state = action.menuName === 'headerMenuCourses' ? _toggleMenu(state) : state;
            break;
    }
    return state;
};

export const headerMenuHelp = (state = {}, action = null) => {
    switch (action.type) {
        case MENU_TOGGLE:
            state = action.menuName === 'headerMenuHelp' ? _toggleMenu(state) : state;
            break;
    }
    return state;
};