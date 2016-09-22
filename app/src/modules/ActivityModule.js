import { CALL_API } from 'redux-api-middleware';
import {config} from './../utilities/configValues';
export const REQUEST_ACTIVITY = 'wk_frontend/activity/REQUEST_ACTIVITY ';
export const SUCCESS_ACTIVITY = 'wk_frontend/activity/SUCCESS_ACTIVITY';
export const FAILURE_ACTIVITY = 'wk_frontend/activity/FAILURE_ACTIVITY';

// Reducer
export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_ACTIVITY: {
      return state;
    }
    case SUCCESS_ACTIVITY: {
      let newState = (Object.assign({}, state, {
        Activity: action.payload.data.activity,
        Drafts: action.payload.data.drafts
      }));
      return newState;
    }
    case FAILURE_ACTIVITY: {
      return {};
    }
    default: {
      return state;
    }
  }
};

// Action
export function activityAction(id) {
  let apiUrl = config.apiUrl + 'activity/' + id;
  return {
    [CALL_API]: {
      endpoint: apiUrl,
      method: 'GET',
      types: [
        REQUEST_ACTIVITY,
        SUCCESS_ACTIVITY,
        FAILURE_ACTIVITY
      ]
    }
  };
}

