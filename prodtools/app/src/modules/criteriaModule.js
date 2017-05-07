import {config} from './../utilities/configValues';
import reducerMerge from './../utilities/reducerMerge';
import { requestStates } from '../sagas/requestSaga';

const CRITERIA = requestStates('criteria');
const CRITERIALIST = requestStates('criteriaList');

let newState = [
  {
    id: '1234',
    createdDate: new Date(),
    title: 'asdf',
    description: 'desc',
    useInRubric: true,
    rubricValues: {
      1: 'below',
      2: 'nearly',
      3: 'meets',
      4: 'exceeds'
    },
    draftFocus: {
      nice: '',
      needs: '',
      extensive: ''
    }
  },
  {
    id: '5678',
    createdDate: new Date(),
    title: 'qwerty',
    description: 'desc',
    useInRubric: true,
    rubricValues: {
      1: 'below',
      2: 'nearly',
      3: 'meets',
      4: 'exceeds'
    },
    draftFocus: {
      nice: '',
      needs: '',
      extensive: ''
    }
  },
  {
    id: '9012',
    createdDate: new Date(),
    title: 'uiop',
    description: 'desc',
    useInRubric: true,
    rubricValues: {
      1: 'below',
      2: 'nearly',
      3: 'meets',
      4: 'exceeds'
    },
    draftFocus: {
      nice: '',
      needs: '',
      extensive: ''
    }
  }
];

// Reducer
export default (state = newState, action) => {
  switch (action.type) {
    case CRITERIA.REQUEST: {
      console.log('REQUEST_ACTIVITY');
      return state;
    }
    case CRITERIA.SUCCESS: {
      return reducerMerge(state, action.result.payload);
    }
    case CRITERIA.FAILURE: {
      return state;
    }
    case CRITERIALIST.REQUEST: {
      console.log('REQUEST_ACTIVITY');
      return state;
    }
    case CRITERIALIST.SUCCESS: {
      return reducerMerge(state, action.result.payload);
    }
    case CRITERIALIST.FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

// Action
export function fetchCriteriaAction(id) {
  return {
    type: CRITERIA.REQUEST,
    states: CRITERIA,
    url: `${config.apiUrl}criteria/${id}`,
    params: {
      method: 'GET'
    }
  };
}

export function fetchCriteriaListAction() {
  return {
    type: CRITERIALIST.REQUEST,
    states: CRITERIALIST,
    url: `${config.apiUrl}criteriaList`,
    params: {
      method: 'GET'
    }
  };
}
