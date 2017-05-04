import {config} from './../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const CREATE_STUDENT_DRAFT = requestStates('create_student_draft');
const GET_STUDENT_DRAFT = requestStates('get_student_draft');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_STUDENT_DRAFT.SUCCESS: {
      return reducerMerge(state, action.result);
    }
    default: {
      return state;
    }
  }
};

export function createStudentDraftInNotThere(studentActivityId, draftId) {
  return {
    type: CREATE_STUDENT_DRAFT.REQUEST,
    states: CREATE_STUDENT_DRAFT,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/draft/${draftId}`,
    params: {
      method: 'PUT'
    }
  };
}

export function getStudentDraft(studentActivityId, draftId) {
  return {
    type: GET_STUDENT_DRAFT.REQUEST,
    states: GET_STUDENT_DRAFT,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/draft/${draftId}`,
    params: {
      method: 'GET'
    }
  };
}
