import { config } from '../utilities/configValues';
import { requestStates } from '../sagas/requestSaga';

export let GET_FEEDBACK = requestStates('get_feedback');
export let CREATE_FEEDBACK = requestStates('create_feedback');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_FEEDBACK.SUCCESS: {
      return action.result;
    }
    case CREATE_FEEDBACK.SUCCESS: {
      return [...state, action.result];
    }
    default: {
      return state;
    }
  }
};

export function getFeedback(studentDraftId) {
  return {
    type: GET_FEEDBACK.REQUEST,
    states: GET_FEEDBACK,
    url: `${config.apiUrl}studentdraft/${studentDraftId}/feedback`,
    params: {
      method: 'GET'
    }
  };
}

export function createFeedback(studentActivityId, studentDraftId, content, level) {
  return {
    type: CREATE_FEEDBACK.REQUEST,
    states: CREATE_FEEDBACK,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/studentdraft/${studentDraftId}/feedback`,
    params: {
      method: 'PUT',
      body: { content, level }
    }
  };
}
