import {config} from '../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const GET_GOALS = requestStates('get_goals');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_GOALS.SUCCESS: {
      return reducerMerge(state, action.result, 'goalId');
    }
    default: {
      return state;
    }
  }
};

export function getGoals() {
  return {
    type: GET_GOALS.REQUEST,
    states: GET_GOALS,
    url: `${config.apiUrl}goal`,
    params: {
      method: 'GET'
    }
  };
}
