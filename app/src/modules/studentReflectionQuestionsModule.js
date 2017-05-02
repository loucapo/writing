import {config} from '../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const GET_STUDENT_REFLECTION_QUESTIONS = requestStates('get_student_reflection_questions');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_STUDENT_REFLECTION_QUESTIONS.SUCCESS: {
      return reducerMerge(state, action.result, 'studentReflectionQuestionId');
    }

    default: {
      return state;
    }
  }
};

export function getStudentReflectionQuestions() {
  return {
    type: GET_STUDENT_REFLECTION_QUESTIONS.REQUEST,
    states: GET_STUDENT_REFLECTION_QUESTIONS,
    url: `${config.apiUrl}studentreflectionquestions`,
    params: {
      method: 'GET'
    }
  };
}
