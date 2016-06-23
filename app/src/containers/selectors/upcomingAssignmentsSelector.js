import moment from 'moment';

export default (state) => {
    const result = { assignments: [] };

    const { sections, assignments } = state;
    const course = state.courses[state.currentCourse];

    const filter = a => (moment.unix(a.closeDate) < moment() && a.badge === 'TO DO' ? a : null);

    const allAssIds = course.sections
        .map(sectionId => sections[sectionId])
        .map(chap => chap.assignments)
        .reduce((a, b) => a.concat(b), []);

    result.assignments = allAssIds
        .map(id => assignments[id])
        .filter(filter)
        .map(ass => ({
            ...ass,
            isUpcoming: 'UPCOMING',
            tableSummary: 'A list of upcoming course content and assigments',
            tableCaption: 'Upcoming Assignments'
        }));

    return result;
};
