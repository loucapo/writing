import { SELECT_COURSE_FROM_MENU } from './../constants';


// Fetches a page of starred repos by a particular user.
// Relies on the custom API middleware defined in ../middleware/api.js.
function navigateToCourse(courseId) {
    return {
        courseId,
        type: SELECT_COURSE_FROM_MENU
    };
}

export {
    navigateToCourse
};

