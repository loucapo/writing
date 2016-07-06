import { normalize } from 'normalizr';
import { CALL_API, getJSON } from 'redux-api-middleware';
import { COURSE_REQUEST, COURSE_SUCCESS, COURSE_FAILURE, LAST_FETCHED } from './../constants';
import { courseSchema } from './../models/course';
import moment from 'moment';

function getCourse(url, id) {
  return {
    [CALL_API]: {
      endpoint: url,
      method: 'GET',
      bailout(state) {
        return !!(state.courses[id] &&
                  state.courses[id][LAST_FETCHED] &&
                  state.courses[id].LAST_FETCHED.isAfter(moment().subtract(5, 'minutes')));
      },
      types: [
        COURSE_REQUEST, {
          type: COURSE_SUCCESS,
          payload: (action, state, res) => getJSON(res)
            .then(json => normalize(json, courseSchema))
        },
        COURSE_FAILURE
      ]
    }
  };
}

export {
  getCourse
};

