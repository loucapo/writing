import moment from 'moment';
import { COURSE_REQUEST, COURSE_SUCCESS, COURSE_FAILURE, LAST_FETCHED } from './../constants';
import { LOCATION_CHANGE } from 'react-router-redux';

function courses(state = {}, action = null) {
  switch (action.type) {
    case LOCATION_CHANGE:
    case COURSE_REQUEST:
      {
        return Object.assign({}, state, {
          isFetching: true
        });
      }
    case COURSE_SUCCESS:
      {
        const entity = action.payload.entities.courses;
        /*eslint-disable no-return-assign*/
        Object.keys(entity).forEach(x => entity[x][LAST_FETCHED] = moment());
        return Object.assign({}, state, entity, { isFetching: false, error: undefined });
      }
    case COURSE_FAILURE:
      {
        return Object.assign({}, state, {
          error: action.payload
        }, { isFetching: false });
      }
    default:
      return state;
  }
}

export { courses };

