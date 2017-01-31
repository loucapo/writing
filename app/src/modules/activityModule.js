import { CALL_API } from 'redux-api-middleware';
import {config} from './../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';

export const REQUEST_ACTIVITY = 'wk_frontend/activity/REQUEST_ACTIVITY ';
export const SUCCESS_ACTIVITY = 'wk_frontend/activity/SUCCESS_ACTIVITY';
export const FAILURE_ACTIVITY = 'wk_frontend/activity/FAILURE_ACTIVITY';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case REQUEST_ACTIVITY: {
      console.log('REQUEST_ACTIVITY');
      return state;
    }
    case SUCCESS_ACTIVITY: {
      console.log(`==========action.payload.data.activity=========`);
      console.log(action);
      console.log(`==========END action.payload.data.activity=========`);
      return reducerMerge(state, action.payload.data.activity);
    }
    case FAILURE_ACTIVITY: {
      return state;
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

