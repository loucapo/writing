import { CALL_API } from 'redux-api-middleware';
import {config} from './../utilities/configValues';
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
      let activity = action.payload.data.activity;
      if (!activity) {
        return state;
      }

      // update if the activity.id already is in the array
      let newState = state.map(x=> {
        return (x.id === activity.id) ? activity : x;
      });

      // add new activity otherwise
      if (state.every(x => x.id !== activity.id)) {
        newState.push(activity);
      }

      return newState;
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

