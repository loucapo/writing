import format from 'string-format-obj';

export default (state, { params }) => ({
    courseTitle: state.courses[params.id] ? state.courses[params.id].courseTitle : '',
    url: format('{api}' + state.swagger.paths.getCourseById.path, { api: '/api', id: params.id }),
    id: params.id
});
