import { CALL_API } from 'redux-api-middleware';
import {config} from './../utilities/configValues';
export const REQUEST_STUDENT_SUBMISSION = 'wk_frontend/studentSubmission/REQUEST_STUDENT_SUBMISSION ';
export const SUCCESS_STUDENT_SUBMISSION = 'wk_frontend/studentSubmission/SUCCESS_STUDENT_SUBMISSION';
export const FAILURE_STUDENT_SUBMISSION = 'wk_frontend/studentSubmission/FAILURE_STUDENT_SUBMISSION';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case REQUEST_STUDENT_SUBMISSION: {
      console.log('REQUEST_STUDENT_SUBMISSION');
      return state;
    }
    case SUCCESS_STUDENT_SUBMISSION: {
      let studentSubmission = action.payload.data.studentSubmission;
      if (!studentSubmission) {
        return state;
      }

      // update if the studentSubmission.id already is in the array
      let newState = state.map(x=> {
        return (x.id === studentSubmission.id) ? studentSubmission : x;
      });

      // add new studentSubmission otherwise
      if (state.every(x => x.id !== studentSubmission.id)) {
        newState.push(studentSubmission);
      }

      return newState;
    }
    case FAILURE_STUDENT_SUBMISSION: {
      return state;
    }
    default: {
      return state;
    }
  }
};

// Action
export function studentSubmissionAction(id) {
  let apiUrl = config.apiUrl + 'studentSubmission/' + id;
  return {
    [CALL_API]: {
      endpoint: apiUrl,
      method: 'GET',
      bailOut: true,
      types: [
        REQUEST_STUDENT_SUBMISSION,
        SUCCESS_STUDENT_SUBMISSION,
        FAILURE_STUDENT_SUBMISSION
      ]
    }
  };
}

