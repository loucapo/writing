import { CALL_API } from 'redux-api-middleware';
import {config} from './../utilities/configValues';
export const REQUEST_ASSIGNMENT = 'wk_frontend/assignment/REQUEST_ASSIGNMENT ';
export const SUCCESS_ASSIGNMENT = 'wk_frontend/assignment/SUCCESS_ASSIGNMENT';
export const FAILURE_ASSIGNMENT = 'wk_frontend/assignment/FAILURE_ASSIGNMENT';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case REQUEST_ASSIGNMENT: {
      console.log('REQUEST_ASSIGNMENT');
      return state;
    }
    case SUCCESS_ASSIGNMENT: {
      let assignment = action.payload.data.assignment;
      if (!assignment) {
        return state;
      }
      let newState = state.map(x=> {
        return (x.id === assignment.id) ? assignment : x;
      });

      if (state.every(x => x.id !== assignment.id)) {
        newState.push(assignment);
      }
      return newState;
    }
    case FAILURE_ASSIGNMENT: {
      return state;
    }
    default: {
      return state;
    }
  }
};

// Action
export function assignmentAction(id) {
  let apiUrl = config.apiUrl + 'assignment/' + id;
  return {
    [CALL_API]: {
      endpoint: apiUrl,
      method: 'GET',
      types: [
        REQUEST_ASSIGNMENT,
        SUCCESS_ASSIGNMENT,
        FAILURE_ASSIGNMENT
      ]
    }
  };
}

