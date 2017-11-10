import {config} from '../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const GET_CRITERIA = requestStates('get_criteria');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_CRITERIA.SUCCESS: {
      return reducerMerge(state, action.result, 'criterionId');
    }
    default: {
      return state;
    }
  }
};

export function getCriteria() {
  return {
    type: GET_CRITERIA.REQUEST,
    states: GET_CRITERIA,
    url: `${config.apiUrl}criterion`,
    params: {
      method: 'GET'
    }
  };
}
