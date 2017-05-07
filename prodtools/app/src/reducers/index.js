import {combineReducers} from 'redux';
import local from './../modules/index';
import {routerReducer as routing} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  ...local,
  routing,
  form: formReducer
});

export default reducers;
