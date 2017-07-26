import { config } from '../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

export let GET_RUBRIC_SCORES = requestStates('get_rubric_scores');
export let UPDATE_RUBRIC_SCORES = requestStates('update_rubric_scores');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_RUBRIC_SCORES.SUCCESS: {
      return reducerMerge(state, action.result, 'studentRubricScoreId');
    }
    case UPDATE_RUBRIC_SCORES.SUCCESS: {
      return reducerMerge(state, action.result, 'studentRubricScoreId');
    }
    default: {
      return state;
    }
  }
};

export function getRubricScores(studentDraftId) {
  return {
    type: GET_RUBRIC_SCORES.REQUEST,
    states: GET_RUBRIC_SCORES,
    url: `${config.apiUrl}studentdraft/${studentDraftId}/rubricscores`,
    params: {
      method: 'GET'
    }
  };
}

export function updateRubricScores(studentActivityId, studentDraftId, rubricId, rubricScores) {
  return {
    type: UPDATE_RUBRIC_SCORES.REQUEST,
    states: UPDATE_RUBRIC_SCORES,
    url: `${config.apiUrl}studentactivity/${studentActivityId}/studentdraft/${studentDraftId}/rubric/${rubricId}`,
    params: {
      method: 'PUT',
      body: { rubricScores }
    }
  };
}
