import reduxSaga from 'redux-saga';
const { takeEvery, call, put } = reduxSaga;
const standardSuccessResponse = (action, result) => {
  return {type: action.states.SUCCESS, action, result};
};

const standardFailureResponse = (action, err) => {
  return {type: action.states.FAILURE, action, err};
};

export function requestStates(entity) {
  return {
    REQUEST: `wk_frontend/${entity.toLowerCase()}/REQUEST_${entity.toUpperCase()}`,
    SUCCESS: `wk_frontend/${entity.toLowerCase()}/SUCCESS_${entity.toUpperCase()}`,
    FAILURE: `wk_frontend/${entity.toLowerCase()}/FAILURE_${entity.toUpperCase()}`
  };
}

function fetchFn(url, params) {
  return fetch(url, params)
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      }
      return response;
    })
    .then(res => res.json());
}

function* request(action) {
  try {
    const response = yield call(fetchFn, action.url, action.params);
    const success = action.successFunction ? action.successFunction : standardSuccessResponse;
    yield put(success(action, response));
  } catch (err) {
    const failure = action.failureFunction ? action.failureFunction : standardFailureResponse;
    yield put(failure(action, err));
  }
}

export default function* () {
  yield takeEvery(action => action.type.includes('REQUEST'), request);
}



//TODO validate the action received by the request saga and dispatch an error if it's not valid
