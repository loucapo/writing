import {config} from '../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const GET_REFLECTION_ANSWERS = requestStates('get_reflection_answers');
export const SET_REFLECTION_ANSWERS = requestStates('set_reflection_answers');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_REFLECTION_ANSWERS.SUCCESS: {
      return action.result;
    }

    case SET_REFLECTION_ANSWERS.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const studentDraftId = action.action.studentDraftId;
      const newAnswers = body.studentReflectionAnswers.map(x => ({...x, studentDraftId}));
      return reducerMerge(state, newAnswers, 'studentReflectionQuestionId');
    }

    default: {
      return state;
    }
  }
};

export function getReflectionAnswers(studentDraftId) {
  return {
    type: GET_REFLECTION_ANSWERS.REQUEST,
    states: GET_REFLECTION_ANSWERS,
    url: `${config.apiUrl}studentdraft/${studentDraftId}/studentreflectionanswers`,
    params: {
      method: 'GET'
    }
  };
}

export function setReflectionAnswers(studentActivityId, studentDraftId, studentReflectionAnswers) {

  const url = `${config.apiUrl}studentactivity/${studentActivityId}\
/studentdraft/${studentDraftId}/studentreflectionanswers`;

  return {
    type: SET_REFLECTION_ANSWERS.REQUEST,
    states: SET_REFLECTION_ANSWERS,
    url,
    studentDraftId,
    params: {
      method: 'PUT',
      body: {
        studentReflectionAnswers
      }
    }
  };
}
