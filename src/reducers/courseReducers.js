// /**
//  * Created by rharik on 5/13/16.
//  */
//
// import {COURSE_MENU_HOVER, HELP_MENU_HOVER} from './../constants';
//
// export default (state = {}, action = null) => {
//     switch(action.type){
//         case COURSE_MENU_HOVER:
//         {
//             return Object.assign({}, state, {courses: { dropdownActive: !state.courses.dropdownActive, items:state.courses.items }});
//         }
//         case HELP_MENU_HOVER:
//         {
//             return Object.assign({}, state, {help: { dropdownActive: !state.help.dropdownActive, items:state.help.items }});
//         }
//     }
//     return state;
// };
