import { config } from '../utilities/configValues';
import { requestStates } from '../sagas/requestSaga';

export let GET_EDITING_MARKS = requestStates('get_editing_marks');

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_EDITING_MARKS.SUCCESS: {
      return action.result;
    }
    default: {
      return state;
    }
  }
};

export function getEditingMarks() {
  return {
    type: GET_EDITING_MARKS.REQUEST,
    states: GET_EDITING_MARKS,
    url: `${config.apiUrl}editingMarks`,
    params: {
      method: 'GET'
    }
  };
}
