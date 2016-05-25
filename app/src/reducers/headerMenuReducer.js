/**
 * Created by rharik on 5/12/16.
 */

const headerMenuCourses = (state = {}, action = null) => {
    if (action.type == 'COURSE_MENU_HOVER') {
        return {...state, dropdownActive: !state.dropdownActive};
    }
    return state;
};

const headerMenuHelp = (state = {}, action = null) => {
    if (action.type == 'HELP_MENU_HOVER') {
        return {state, dropdownActive: !state.dropdownActive};
    }
    return state;
};

export {
    headerMenuCourses,
    headerMenuHelp
}