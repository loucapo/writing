/**
 * Created by rharik on 5/18/16.
 */
import {COURSE_SUCCESS} from './../constants';


function currentCourse(state = {}, action = null) {
    switch (action.type) {
        case COURSE_SUCCESS:
            return action.entities.result[0];
        default:
            return state;
    }
}

export {currentCourse};
