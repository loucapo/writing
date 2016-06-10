import moment from 'moment';

export default ({ courses, currentCourse, chapters, assignments }) => {
    const course = courses[currentCourse];
    const filter = a => (moment.unix(a.closeDate) < moment() && a.badge === 'TO DO' ? a : null);

    const allAssIds = course.chapters
        .map(chapterId => chapters[chapterId])
        .map(chap => chap.assignments)
        .reduce((a, b) => a.concat(b), []);

    const upCommingAssignments = allAssIds
        .map(id => assignments[id])
        .filter(filter)
        .map(ass => ({
            ...ass,
            isUpcoming: 'UPCOMING',
            tableSummary: 'A list of upcoming course content and assigments',
            tableCaption: 'Upcoming Assignments'
        }));

    return { assignments: upCommingAssignments };
};
