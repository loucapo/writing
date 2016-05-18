/**
 * Created by rharik on 5/16/16.
 */

import { normalize, Schema, arrayOf } from 'normalizr';

const course = new Schema('courses');
const chapter = new Schema('chapters');
const assignment = new Schema('assignments');


course.define({
    chapters: arrayOf(chapter)
});

chapter.define({
    assignments: arrayOf(assignment)
});


function getChaptersForCourse(state, courseId){
    return state.courses[courseId].chapters.map(c=> getChapterById(state,c));
}

function getChapterById(state, id){
    return object.assign({}, state.chapters[id]);
}

function getAssignmentsForChapter(state, chapterId){
    return state.chapters[chapterId].assignments.map(a => getAssignmentsById(state, a));
}

function getAssignmentsById(state, id){
    return state.Assignments[id];
}

function getCurrentCourse(state){
    var course = object.assign({}, state.courses[state.currentCourse]);
    course.chapters = object.assign({},course.chapters.map(c=>getChaptersForCourse(c)));
    course.chapters.map(c=> c.assignments = getAssignmentForChapter(c));
    return course;
}

export {
    getCurrentCourse,
    course,
    chapter,
    assignment
}