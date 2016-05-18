/**
 * Created by rharik on 5/11/16.
 */

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import {headerMenuCourses,headerMenuHelp} from './headerMenuReducer'
import {expandChapter} from './chapterReducers'

const reducers = combineReducers({
    routing,
    auth: (state = {}) => state,
    courses: (state = {}) => state,
    chapters: expandChapter,
    assignments: (state = {}) => state,
    currentCourse: (state = {}) => state,
    headerMenuCourses,
    headerMenuHelp
});

export default reducers;