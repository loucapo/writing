import {combineReducers} from 'redux';
import local from './../modules/index';

const reducers = combineReducers({
  ...local
});

export default reducers;
