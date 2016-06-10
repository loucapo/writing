import Course from './../components/Course.js';
import {} from './../models/course';
import container from './containerFactory';
import courseSelector from './selectors/courseSelector';

const CourseContainer = container(['courses', 'currentCourse'], courseSelector)(Course);

export default CourseContainer;

