import format from 'string-format-obj';

export default (state) => ({
    courseTitle: state.courses[state.currentCourse] ? state.courses[state.currentCourse].courseTitle : '',
    url: format('{api}' + state.swagger.paths.getCourseById.path, { api: '/api', id: state.currentCourse }),
    id: state.currentCourse
});
