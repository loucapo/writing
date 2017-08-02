import {config} from '../utilities/configValues';
import { requestStates } from '../sagas/requestSaga';

const GET_STUDENT_DRAFTS = requestStates('get_student_drafts');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_STUDENT_DRAFTS.SUCCESS: {
      return action.result;
    }
    default: {
      return state;
    }
  }
};

export function getStudentDrafts(studentActivityId) {
  return {
    type: GET_STUDENT_DRAFTS.REQUEST,
    states: GET_STUDENT_DRAFTS,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/drafts`,
    params: {
      method: 'GET'
    }
  };
}
