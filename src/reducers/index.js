/**
 * Created by rharik on 5/11/16.
 */

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import {headerMenuCourses,headerMenuHelp} from './headerMenuReducer'
import {expandChapter} from './chapterReducers'

const routerReducer = combineReducers({
    routing,
    auth: (state = {}) => state,
    courses: (state = {}) => state,
    currentCourse: (state = {}) => state,
    headerMenuCourses,
    headerMenuHelp,
    expandChapter
});

export default routerReducer;