/**
 * Created by rharik on 5/18/16.
 */

import {COURSE_REQUEST, COURSE_SUCCESS, COURSE_FAILURE} from './../constants';


function courses(state = {}, action = null) {
    switch (action.type) {
        case COURSE_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case COURSE_SUCCESS:
            if(!action.fromCache) {
                return Object.assign({}, state, action.entities);
            }
            return state;
        case COURSE_FAILURE:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state;
    }
}

export {courses};
