import {config} from './../utilities/configValues';
export const SUCCESS_ACTIVITY = 'wk_frontend/activity/SUCCESS_ACTIVITY';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const DRAFTS_FOR_ACTIVITY = requestStates('draftsForActivity');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case DRAFTS_FOR_ACTIVITY.SUCCESS: {
      return reducerMerge(state, action.result.payload);
    }
  }
  return state;
};


// Fetch Action
export function fetchDraftsForActivity(activityId) {
  return {
    type: DRAFTS_FOR_ACTIVITY.REQUEST,
    states: DRAFTS_FOR_ACTIVITY,
    url: `${config.apiUrl}activity/${activityId}/draft`,
    params: {
      method: 'GET'
    }
  };
}
