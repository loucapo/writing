import moment from 'moment';

export default (state, { params }) => {
  const id = params.id;
  const result = { assignments: [] };

  const { sections, assignments } = state;
  const course = state.courses[id];
  if (!course) {
    return result; }
  const isUpcomingFilter = assignment => {
    if (moment.unix(assignment.closeDate) < moment() && assignment.badge === 'TO DO') {
      return assignment;
    }
    return null;
  };

  const allAssIds = course.sections
    .map(sectionId => sections[sectionId])
    .map(chap => chap.assignments)
    .reduce((a, b) => a.concat(b), []);

  result.assignments = allAssIds
    .map(assId => assignments[assId])
    .filter(isUpcomingFilter)
    .map(ass => ({
      ...ass,
      isUpcoming: 'UPCOMING',
      tableSummary: 'A list of upcoming course content and assigments',
      tableCaption: 'Upcoming Assignments'
    }));

  return result;
};
