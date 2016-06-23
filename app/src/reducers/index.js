import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { sectionReducer } from './sectionReducers';
import { assignmentReducer } from './assignmentReducer';
import { courses } from './navigationReducers';
import { currentCourse } from './currentCourseReducer';
import { swagger } from './swaggerSpecReducer';

const reducers = combineReducers({
    routing,
    auth: (state = {}) => state,
    courses,
    sections: sectionReducer,
    assignments: assignmentReducer,
    currentCourse,
    headerMenuCourses: (state = {}) => state,
    headerMenuHelp: (state = {}) => state,
    swagger
});

export default reducers;
