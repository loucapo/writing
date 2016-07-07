import format from 'string-format-obj';

export default (state, { params }) => {
  const id = params.id;
  const course = state.courses[id];
  return ({
    courseTitle: course ? course.title : '',
    url: format('{api}' + state.swagger.paths.getCoursesById.path, { api: '/api', id }),
    id,
    isFetching: state.isFetching && !course,
    errorMessage: (state.courses.error && state.courses.error.message)
      ? state.courses.error.message
      : undefined
  });
};

