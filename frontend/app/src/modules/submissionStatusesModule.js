import {config} from './../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';
import { UPDATE_REVIEW_STATUS } from './studentDraftModule';
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
    case UPDATE_REVIEW_STATUS.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      return state.map(x => {
        return x.studentDraftId === action.action.studentDraftId
          ? {...x, reviewStatus: body.reviewStatus}
          : x;
      });
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
