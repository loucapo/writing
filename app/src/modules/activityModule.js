import {config} from './../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const ACTIVITY = requestStates('activity');
const ACTIVITY_PROMPT = requestStates('activity_prompt');
const ACTIVITY_RUBRIC = requestStates('activity_rubric');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case ACTIVITY.REQUEST: {
      console.log('REQUEST_ACTIVITY');
      return state;
    }
    case ACTIVITY.SUCCESS: {
      return reducerMerge(state, action.result);
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
    case ACTIVITY_RUBRIC.SUCCESS: {
      let body = JSON.parse(action.action.params.body);
      let activity = state.find(x => x.id === action.action.activityId);
      return [{...activity, rubricId: body.rubricId}, ...state];
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
export function getActivity(id) {
  return {
    type: ACTIVITY.REQUEST,
    states: ACTIVITY,
    url: `${config.apiUrl}activity/${id}`,
    params: {
      method: 'GET'
    }
  };
}

// Send Actions
export function updateActivityPrompt(_body, activityId) {
  return {
    type: ACTIVITY_PROMPT.REQUEST,
    states: ACTIVITY_PROMPT,
    url: `${config.apiUrl}activity/${activityId}/prompt`,
    params: {
      method: 'PUT',
      body: _body
    }
  };
}

export function updateActivityRubric(_body, activityId) {
  return {
    type: ACTIVITY_RUBRIC.REQUEST,
    states: ACTIVITY_RUBRIC,
    activityId,
    url: `${config.apiUrl}activity/${activityId}/rubric`,
    params: {
      method: 'PUT',
      body: _body
    }
  };
}


