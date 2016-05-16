/**
 * Created by rharik on 5/12/16.
 */

const headerMenuCourses = (state = {}, action = null) =>
{
    if (action.type == 'COURSE_MENU_HOVER') {
        console.log('==========state.headerMenuCourses=========');
        console.log(state);
        console.log('==========END state.headerMenuCourses=========');
        return Object.assign({}, state, { dropdownActive: !state.dropdownActive, items: state.items  });
    }
    return state;
};

const headerMenuHelp = (state = {}, action = null) =>
{
    if (action.type == 'HELP_MENU_HOVER') {
        return Object.assign({}, state, { dropdownActive: !state.dropdownActive, items:state.items });
    }
    return state;
};

export {
    headerMenuCourses,
    headerMenuHelp
}
