import { CALL_API } from 'redux-api-middleware';
import {config} from './../utilities/configValues';
export const REQUEST_ACTIVITY = 'wk_frontend/activity/REQUEST_ACTIVITY ';
export const SUCCESS_ACTIVITY = 'wk_frontend/activity/SUCCESS_ACTIVITY';
export const FAILURE_ACTIVITY = 'wk_frontend/activity/FAILURE_ACTIVITY';


export default (state = 'Activity', action) => {
  switch (action.type) {
    case REQUEST_ACTIVITY: {
      return state;
    }
    case SUCCESS_ACTIVITY: {
      return action.payload.data.Activity;
    }
    case FAILURE_ACTIVITY: {
      // return Object.assign({}, state, { message: action.payload.data });
      break;
    }
    default: {
      return state;
    }
  }
};

export function activityAction() {
  return {
    [CALL_API]: {
      endpoint: config.apiUrl,
      method: 'GET',
      types: [
        REQUEST_ACTIVITY,
        SUCCESS_ACTIVITY,
        FAILURE_ACTIVITY
      ]
    }
  };
}
