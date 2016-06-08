import { combineReducers, compose } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { headerMenuCourses, headerMenuHelp } from './headerMenuReducer'
import {expandChapter} from './chapterReducers'
import {courses} from './navigationReducers'
import {currentCourse} from './courseReducer'

const reducers = combineReducers({
    routing,
    auth: (state = {}) => state,
    courses: courses,
    chapters: expandChapter,
    assignments: (state = {}) => state,
    currentCourse: currentCourse,
    headerMenuCourses,
    headerMenuHelp
});

export default reducers;