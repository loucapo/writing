import { EXPAND_SECTION, COURSE_SUCCESS } from './../constants';

const sections = (state = {}, action) => {
    switch (action.type) {
        case EXPAND_SECTION:
            {
                const item = state[action.id];
                return { ...state, [action.id]: { ...item, isExpanded: !item.isExpanded } };
            }
        case COURSE_SUCCESS:
            {
                return Object.assign({}, state, action.payload.entities.sections);
            }
        default:
            return state;
    }
};

export {
    sections
};
