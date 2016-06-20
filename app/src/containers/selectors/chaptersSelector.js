export default ({ courses, currentCourse, chapters }) =>
    ({ chapters: courses[currentCourse].chapters.map(chapterId => chapters[chapterId]) });
