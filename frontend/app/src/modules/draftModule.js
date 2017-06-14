import {config} from './../utilities/configValues';
export const SUCCESS_ACTIVITY = 'wk_frontend/activity/SUCCESS_ACTIVITY';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const SET_DRAFT_GOALS = requestStates('set_draft_goals');
const DRAFTS_FOR_ACTIVITY = requestStates('drafts_For_Activity');
const ADD_DRAFT_TO_ACTIVITY = requestStates('add_draft_to_activity');
const REMOVE_DRAFT_TO_ACTIVITY = requestStates('remove_draft_to_activity');
const UPDATE_DRAFT_INSTRUCTIONS = requestStates('update_draft_instructions');
const PERSIST_REFLECTION_QUESTIONS = requestStates('persist_reflection_questions');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case DRAFTS_FOR_ACTIVITY.SUCCESS: {
      return reducerMerge(state, action.result, 'draftId');
    }
    case SET_DRAFT_GOALS.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const goals = body.goals;
      const draftId = action.action.draftId;
      return state.map(x => {
        return x.draftId === draftId
          ? {...x, goals}
          : x;
      });
    }
    case ADD_DRAFT_TO_ACTIVITY.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const newDraft = {
        draftId: action.result.draftId,
        activityId: action.action.activityId,
        index: body.index
      };
      return [...state, newDraft];
    }
    case REMOVE_DRAFT_TO_ACTIVITY.SUCCESS: {
      return state.filter(x => x.draftId !== action.action.draftId);
    }
    case PERSIST_REFLECTION_QUESTIONS.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const studentReflectionQuestions = body.studentReflectionQuestions;
      const draftId = action.action.draftId;
      return state.map( x => {
        return x.draftId === draftId
          ? {...x, studentReflectionQuestions}
          : x;
      });
    }
    case UPDATE_DRAFT_INSTRUCTIONS.SUCCESS: {
      const body = JSON.parse(action.action.params.body);
      const draftId = action.action.draftId;
      return state.map(x => {
        return x.draftId === draftId
          ? {...x, instructions: body.instructions}
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

export function addDraftToActivity(activityId, body) {
  return {
    type: ADD_DRAFT_TO_ACTIVITY.REQUEST,
    states: ADD_DRAFT_TO_ACTIVITY,
    subsequentAction: getDraftsForActivity(activityId),
    activityId,
    url: `${config.apiUrl}activity/${activityId}/draft`,
    params: {
      method: 'post',
      body
    }
  };
}

export function removeDraftFromActivity(activityId, draftId) {
  return {
    type: REMOVE_DRAFT_TO_ACTIVITY.REQUEST,
    states: REMOVE_DRAFT_TO_ACTIVITY,
    subsequentAction: getDraftsForActivity(activityId),
    draftId,
    url: `${config.apiUrl}activity/${activityId}/draft/${draftId}`,
    params: {
      method: 'DELETE'
    }
  };
}

export function updateDraftInstructions(activityId, draftId, instructions) {
  return {
    type: UPDATE_DRAFT_INSTRUCTIONS.REQUEST,
    states: UPDATE_DRAFT_INSTRUCTIONS,
    url: `${config.apiUrl}activity/${activityId}/draft/${draftId}/instructions`,
    draftId,
    params: {
      method: 'put',
      body: instructions
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
export function setReflectionQuestions(activityId, draftId, studentReflectionQuestions) {
  return {
    type: PERSIST_REFLECTION_QUESTIONS.REQUEST,
    states: PERSIST_REFLECTION_QUESTIONS,
    url: `${config.apiUrl}activity/${activityId}/draft/${draftId}/studentreflectionquestions`,
    draftId,
    params: {
      method: 'PUT',
      body: {
        studentReflectionQuestions
      }
    }
  };
}

