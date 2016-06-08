/**
 * Created by rharik on 5/11/16.
 */

import Course from './../components/Course.js'
import {} from './../models/course'
import container from './containerFactory'


const transform = ({ courses, currentCourse}) => courses[currentCourse];

const CourseContainer = container(['courses', 'currentCourse'], transform)(Course);

export {transform, CourseContainer};

