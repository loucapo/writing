import {config} from '../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

export let GET_RUBRICS = requestStates('get_rubrics');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_RUBRICS.SUCCESS: {
      return reducerMerge(state, action.result.payload);
    }
    default: {
      return state;
    }
  }
};

export function getRubricList() {
  return {
    type: GET_RUBRICS.REQUEST,
    states: GET_RUBRICS,
    url: `${config.apiUrl}rubric`,
    params: {
      method: 'GET'
    }
  };
}

