import { COURSE_SUCCESS } from './../constants';

const assignmentReducer = (state = {}, action = null) => {
    switch (action.type) {
        case COURSE_SUCCESS:
            {
                return Object.assign({}, state, action.payload.entities.assignments);
            }
        default:
            return state;
    }
};

export {
    assignmentReducer
};
