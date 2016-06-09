import Course from './../components/Course.js';
import {} from './../models/course';
import container from './containerFactory';


const transform = ({ courses, currentCourse }) => courses[currentCourse];
export default container(['courses', 'currentCourse'], transform)(Course);
