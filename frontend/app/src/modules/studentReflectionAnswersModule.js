import {config} from '../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const GET_STUDENT_REFLECTION_ANSWERS = requestStates('get_student_reflection_answers');
const SET_STUDENT_REFLECTION_ANSWERS = requestStates('set_student_reflection_answers');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_STUDENT_REFLECTION_ANSWERS.SUCCESS: {
      return reducerMerge(state, action.result, 'studentReflectionAnswerId');
    }

    case SET_STUDENT_REFLECTION_ANSWERS.SUCCESS: {
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

export function getStudentReflectionAnswers(studentDraftId) {
  return {
    type: GET_STUDENT_REFLECTION_ANSWERS.REQUEST,
    states: GET_STUDENT_REFLECTION_ANSWERS,
    url: `${config.apiUrl}studentdraft/${studentDraftId}/studentreflectionanswers`,
    params: {
      method: 'GET'
    }
  };
}

export function setStudentReflectionAnswers(studentActivityId, studentDraftId, studentReflectionAnswers) {

  const url = `${config.apiUrl}studentactivity/${studentActivityId}\
/studentdraft/${studentDraftId}/studentreflectionanswers`;

  return {
    type: SET_STUDENT_REFLECTION_ANSWERS.REQUEST,
    states: SET_STUDENT_REFLECTION_ANSWERS,
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

