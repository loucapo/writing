import {config} from '../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const GET_REFLECTION_QUESTIONS = requestStates('get_reflection_questions');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_REFLECTION_QUESTIONS.SUCCESS: {
      return reducerMerge(state, action.result, 'studentReflectionQuestionId');
    }

    default: {
      return state;
    }
  }
};

export function getReflectionQuestions() {
  return {
    type: GET_REFLECTION_QUESTIONS.REQUEST,
    states: GET_REFLECTION_QUESTIONS,
    url: `${config.apiUrl}studentreflectionquestions`,
    params: {
      method: 'GET'
    }
  };
}
