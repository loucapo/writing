import {config} from './../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const ACTIVITY = requestStates('activity');
const ACTIVITY_PROMPT = requestStates('activity_prompt');
const ACTIVITY_TITLE = requestStates('activity_title');
const ACTIVITY_RUBRIC = requestStates('activity_rubric');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case ACTIVITY.REQUEST: {
      console.log('REQUEST_ACTIVITY');
      return state;
    }
    case ACTIVITY.SUCCESS: {
      return reducerMerge(state, action.result, 'activityId');
    }
    case ACTIVITY_PROMPT.SUCCESS: {
      let body = JSON.parse(action.action.params.body);
      return state.map(x => {
        if(x.activityId === action.action.activityId) {
          return {...x, prompt: JSON.parse(body.prompt)};
        }
        return x;
      });
    }
    case ACTIVITY_TITLE.SUCCESS: {
      let body = JSON.parse(action.action.params.body);
      return state.map(x => {
        if(x.activityId === action.action.activityId) {
          return {...x, title: body.title};
        }
        return x;
      });
    }
    case ACTIVITY_RUBRIC.SUCCESS: {
      let body = JSON.parse(action.action.params.body);
      let activity = state.find(x => x.activityId === action.action.activityId);
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
export function getActivity(activityId) {
  return {
    type: ACTIVITY.REQUEST,
    states: ACTIVITY,
    url: `${config.apiUrl}activity/${activityId}`,
    params: {
      method: 'GET'
    }
  };
}

// Send Actions
export function updateActivityPrompt(activityId, _body) {
  return {
    type: ACTIVITY_PROMPT.REQUEST,
    states: ACTIVITY_PROMPT,
    activityId,
    url: `${config.apiUrl}activity/${activityId}/prompt`,
    params: {
      method: 'PUT',
      body: _body
    }
  };
}

export function updateActivityTitle(activityId, _body) {
  return {
    type: ACTIVITY_TITLE.REQUEST,
    states: ACTIVITY_TITLE,
    activityId,
    url: `${config.apiUrl}activity/${activityId}/title`,
    params: {
      method: 'PUT',
      body: _body
    }
  };
}

export function updateActivityRubric(activityId, _body) {
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


