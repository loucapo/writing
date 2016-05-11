/**
 * Created by rharik on 5/11/16.
 */

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

const routerReducer = combineReducers({
    routing,
    auth: (state = {}) => state,
    course: (state = {}) => state
});

export default routerReducer;