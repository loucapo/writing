/**
 * Created by rharik on 5/12/16.
 */

const headerMenuCourses = (state = {}, action = null) =>
{
    if (action.type == 'COURSE_MENU_HOVER') {
        return Object.assign({}, state, { headerMenuCourses: { dropdownActive: !state.courses.dropdownActive, items: state.courses.items } });
    }
    return state;
};

const headerMenuHelp = (state = {}, action = null) =>
{
    if (action.type == 'HELP_MENU_HOVER') {
        return Object.assign({}, state, {headerMenuHelp: { dropdownActive: !state.help.dropdownActive, items:state.help.items }});
    }
    return state;
};

export default {
    headerMenuCourses,
    headerMenuHelp
}
