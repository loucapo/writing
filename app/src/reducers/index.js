import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { expandChapter } from './chapterReducers';
import { courses } from './navigationReducers';
import { currentCourse } from './courseReducer';

const reducers = combineReducers({
    routing,
    auth: (state = {}) => state,
    courses,
    chapters: expandChapter,
    assignments: (state = {}) => state,
    currentCourse,
    headerMenuCourses: (state = {}) => state,
    headerMenuHelp: (state = {}) => state
});

export default reducers;
