import {combineReducers} from 'redux';
import local from './../modules/index';
import {routerReducer as routing} from 'react-router-redux';


const reducers = combineReducers({
  ...local,
  routing
});

export default reducers;
