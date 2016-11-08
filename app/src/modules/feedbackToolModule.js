import { CALL_API } from 'redux-api-middleware';
import {config} from './../utilities/configValues';
export const REQUEST_FEEDBACK_TOOL = 'wk_frontend/feedbackTool/REQUEST_FEEDBACK_TOOL ';
export const SUCCESS_FEEDBACK_TOOL = 'wk_frontend/feedbackTool/SUCCESS_FEEDBACK_TOOL';
export const FAILURE_FEEDBACK_TOOL = 'wk_frontend/feedbackTool/FAILURE_FEEDBACK_TOOL';

const dummyData = {
  id: '123',
  draft: 'sadfghjk'
}

// Reducer
export default (state = [dummyData], action) => {
  switch (action.type) {
    case REQUEST_FEEDBACK_TOOL: {
      return state;
    }
    case SUCCESS_FEEDBACK_TOOL: {
      let feedbackTool = action.payload.data.feedbackTool;
      if (!feedbackTool) {
        return state;
      }

      // update if the feedbackTool.id already is in the array
      let newState = state.map(x=> {
        return (x.id === feedbackTool.id) ? feedbackTool : x;
      });

      // add new feedbackTool otherwise
      if (state.every(x => x.id !== feedbackTool.id)) {
        newState.push(feedbackTool);
      }

      return newState;
    }
    case FAILURE_FEEDBACK_TOOL: {
      return state;
    }
    default: {
      return state;
    }
  }
};

// Action
export function feedbackToolAction(id) {
  let apiUrl = config.apiUrl + 'feedbackTool/' + id;
  return {
    [CALL_API]: {
      endpoint: apiUrl,
      method: 'GET',
      bailOut: true,
      types: [
        REQUEST_FEEDBACK_TOOL,
        SUCCESS_FEEDBACK_TOOL,
        FAILURE_FEEDBACK_TOOL
      ]
    }
  };
}

