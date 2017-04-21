import {config} from './../utilities/configValues';
export const SUCCESS_ACTIVITY = 'wk_frontend/activity/SUCCESS_ACTIVITY';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const DRAFTS_FOR_ACTIVITY = requestStates('drafts_for_activity');
const SET_DRAFT_GOALS = requestStates('set_draft_goals');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case DRAFTS_FOR_ACTIVITY.SUCCESS: {
      return reducerMerge(state, action.result);
    }
    case SET_DRAFT_GOALS.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const goals = body.goals;
      const draftId = action.action.draftId;
      return state.map( x => {
        return x.id === draftId
        ? {...x, goals}
        : x;
      });

    }
  }
  return state;
};


// Fetch Action
export function getDraftsForActivity(activityId) {
  return {
    type: DRAFTS_FOR_ACTIVITY.REQUEST,
    states: DRAFTS_FOR_ACTIVITY,
    url: `${config.apiUrl}activity/${activityId}/draft`,
    params: {
      method: 'GET'
    }
  };
}

export function setDraftGoals(activityId, draftId, goals) {
  return {
    type: SET_DRAFT_GOALS.REQUEST,
    states: SET_DRAFT_GOALS,
    url: `${config.apiUrl}activity/${activityId}/draft/${draftId}/goals`,
    draftId,
    params: {
      method: 'PUT',
      body: {
        goals
      }
    }
  };
}
