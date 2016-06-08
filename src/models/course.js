/**
 * Created by rharik on 5/16/16.
 */

import { Schema, arrayOf } from 'normalizr';

const course = new Schema('courses');
const chapter = new Schema('chapters');
const assignment = new Schema('assignments');


course.define({
    units: arrayOf(chapter)
}, { idAttribute: 'm_course_id' });

chapter.define({
    activities: arrayOf(assignment)
}, { idAttribute: 'section' });

assignment.define({

});

// function getChaptersForCourse(state, courseId){
//     return state.courses[courseId].chapters.map(c=> getChapterById(state,c));
// }
//
// function getChapterById(state, id){
//     return Object.assign({}, state.chapters[id]);
// }
//
// function getAssignmentsForChapter(state, chapterId){
//     return state.chapters[chapterId].assignments.map(a => getAssignmentsById(state, a));
// }
//
// function getAssignmentsById(state, id){
//     return state.Assignments[id];
// }
//
// function getCurrentCourse(state){
//     var course = Object.assign({}, state.courses[state.currentCourse]);
//     course.chapters = Object.assign({},course.chapters.map(c=>getChaptersForCourse(c)));
//     course.chapters.map(c=> c.assignments = getAssignmentForChapter(c));
//     return course;
// }

export {
    // getCurrentCourse,
    course,
    chapter,
    assignment //,
    // getAssignmentsForChapter
};