import {config} from './../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const SUBMISSION_STATUS = requestStates('submission_status');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case SUBMISSION_STATUS.REQUEST: {
      console.log('REQUEST_ACTIVITY');
      return state;
    }
    case SUBMISSION_STATUS.SUCCESS: {
      return reducerMerge(state, action.result, 'studentId');
    }
    default: {
      return state;
    }
  }
};

// Fetch Action
export function getSubmissionStatuses(draftId) {
  return {
    type: SUBMISSION_STATUS.REQUEST,
    states: SUBMISSION_STATUS,
    url: `${config.apiUrl}submissionstatus/${draftId}`,
    params: {
      method: 'GET'
    }
  };
}
