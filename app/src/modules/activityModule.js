
import {config} from './../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const ACTIVITY = requestStates('activity');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case ACTIVITY.REQUEST: {
      console.log('REQUEST_ACTIVITY');
      return state;
    }
    case ACTIVITY.SUCCESS: {
      return reducerMerge(state, action.result.data.activity);
    }
    case ACTIVITY.FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

// Action
export function activityAction(id) {
  return {
    type: ACTIVITY.REQUEST,
    states: ACTIVITY,
    url: `${config.apiUrl}activity/${id}`,
    params: {
      method: 'GET'
    }
  };
}
