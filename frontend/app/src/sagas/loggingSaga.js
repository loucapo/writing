import reduxSaga from 'redux-saga';
const { takeEvery, call, put } = reduxSaga;

import moment from 'moment';
export const LOGGING_ACTION = `wk_frontend/loggingAction/LOGGING_ACTION`;
export const LOGGING_ACTION_ERROR = `wk_frontend/loggingActionError/LOGGING_ACTION_EEROR`;

export default function* () {
  const action = yield takeEvery(LOGGING_ACTION);
  try {
    const log = {
      system: {
        pid: process.pid
      },
      sprops: {},
      nprops: {},
      tags: [],
      message: action,
      type: 'coreLogger',
      '@timestamp': moment().toISOString()
    };

    yield call(fetch, 'someLoggingApiUrl', log);
  } catch(err) {
    yield put({type: LOGGING_ACTION_ERROR, err});
  }
}
