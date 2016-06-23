/**
 * Created by rharik on 5/18/16.
 */
import { SELECT_COURSE_FROM_MENU } from './../constants';

function currentCourse(state = {}, action = null) {
    switch (action.type) {
        case SELECT_COURSE_FROM_MENU:
            return action.courseId;
        default:
            return state;
    }
}

export { currentCourse };
