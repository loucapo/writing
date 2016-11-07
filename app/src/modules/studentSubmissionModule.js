import { CALL_API } from 'redux-api-middleware';
import {config} from './../utilities/configValues';
export const STUDENT_SUBMISSION_REQUEST = 'wk_frontend/studentSubmission/STUDENT_SUBMISSION_REQUEST ';
export const STUDENT_SUBMISSION_SUCCESS = 'wk_frontend/studentSubmission/STUDENT_SUBMISSION_SUCCESS';
export const STUDENT_SUBMISSION_FAILURE = 'wk_frontend/studentSubmission/STUDENT_SUBMISSION_FAILURE';

const dummyData = {
  id: '123',
  document: 'sadfghjk'
};

// Reducer
export default (state = [dummyData], action) => {
  switch (action.type) {
    case STUDENT_SUBMISSION_REQUEST: {
      console.log('STUDENT_SUBMISSION_REQUEST');
      return state;
    }
    case STUDENT_SUBMISSION_SUCCESS: {
      let studentSubmission = action.payload.data.studentSubmission;
      if (!studentSubmission) {
        return state;
      }

      // update if the studentSubmission.id already is in the array
      let newState = state.map(x=> {
        return (x.id === studentSubmission.id) ? studentSubmission : x;
      });

      // add new feedbackTool otherwise
      if (state.every(x => x.id !== studentSubmission.id)) {
        newState.push(studentSubmission);
      }

      return newState;
    }
    case STUDENT_SUBMISSION_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

// Action
export function fetchStudentSubmissionAction(id) {
  let apiUrl = config.apiUrl + 'studentSubmission/' + id;
  return {
    [CALL_API]: {
      endpoint: apiUrl,
      method: 'GET',
      bailOut: true,
      types: [
        STUDENT_SUBMISSION_REQUEST,
        STUDENT_SUBMISSION_SUCCESS,
        STUDENT_SUBMISSION_FAILURE
      ]
    }
  };
}

