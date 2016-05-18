/**
 * Created by rharik on 5/11/16.
 */

import Course from './../components/Course.js'
import {} from './../models/course'
import container from './containerFactory'


var transform = ({ courses, currentCourse}) => courses[currentCourse];
export default container(['courses', 'currentCourse'], transform)(Course);


