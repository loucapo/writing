import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga1 from './../sagas/requestSaga';
require('babel-polyfill');

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, createLogger()),
      DevTools.instrument()
    )
  );

  sagaMiddleware.run(mySaga1);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
