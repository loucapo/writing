import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { sections } from './sectionReducers';
import { assignments } from './assignmentReducer';
import { headerMenuCourses } from './headerMenuCoursesReducer';
import { courses } from './navigationReducers';
import { swagger } from './swaggerSpecReducer';
import { startUp } from './startUpReducer';

const reducers = combineReducers({
  routing,
  auth: (state = {}) => state,
  courses,
  sections,
  assignments,
  headerMenuCourses,
  headerMenuHelp: (state = {}) => state,
  swagger,
  startUp
});

export default reducers;

