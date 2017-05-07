import {config} from '../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const GET_STUDENT_ACTIVITY = requestStates('get_student_activity');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_STUDENT_ACTIVITY.SUCCESS: {
      return reducerMerge(state, action.result);
    }
    default: {
      return state;
    }
  }
};

export function getStudentActivityByActivityId(activityId) {
  return {
    type: GET_STUDENT_ACTIVITY.REQUEST,
    states: GET_STUDENT_ACTIVITY,
    url: `${config.apiUrl}activity/${activityId}/studentactivity`,
    params: {
      method: 'GET'
    }
  };
}
