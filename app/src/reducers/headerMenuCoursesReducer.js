import { AVAILABLE_COURSES_SUCCESS, LAST_FETCHED } from './../constants';
import moment from 'moment';

const headerMenuCourses = (state = {}, action = null) => {
  switch (action.type) {
    case AVAILABLE_COURSES_SUCCESS:
      {
        // TODO not pleased with this double payload business
        return {...state, items: action.payload.payload, [LAST_FETCHED]: moment() };
      }
    default:
      return state;
  }
};

export {
  headerMenuCourses
};

