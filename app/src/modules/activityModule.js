import {config} from './../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const ACTIVITY = requestStates('activity');
const ACTIVITY_PROMPT = requestStates('activity_prompt');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case ACTIVITY.REQUEST: {
      console.log('REQUEST_ACTIVITY');
      return state;
    }
    case ACTIVITY.SUCCESS: {
      return reducerMerge(state, action.result.payload);
    }
    case ACTIVITY_PROMPT.SUCCESS: {
      let body = JSON.parse(action.action.params.body);
      return state.map(x => {
        if(x.id === body.id) {
          return {...x, prompt: JSON.parse(body.prompt)};
        }
        return x;
      });
    }
    case ACTIVITY.FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

// Fetch Action
export function fetchActivityAction(id) {
  return {
    type: ACTIVITY.REQUEST,
    states: ACTIVITY,
    url: `${config.apiUrl}activity/${id}`,
    params: {
      method: 'GET'
    }
  };
}

// Send Action
export function updateActivityPrompt(_body) {
  return {
    type: ACTIVITY_PROMPT.REQUEST,
    states: ACTIVITY_PROMPT,
    url: `${config.apiUrl}activity/${_body.id}/prompt`,
    params: {
      method: 'PUT',
      body: _body
    }
  };
}

