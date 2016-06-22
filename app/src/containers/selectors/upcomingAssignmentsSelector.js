import moment from 'moment';
import { cache } from './../../utilities/cache';

export default (state) => {
    const result = { assignments: [] };

    const { chapters, assignments } = state;
    const course = state.courses[state.currentCourse];
    // check if object is cachable and if so does it need to be refreshed
    // if needs to be refreshed then dispatch action that refreshes

    if (cache.needsCacheRefresh(state, course)) {
        return result;
    }

    const filter = a => (moment.unix(a.closeDate) < moment() && a.badge === 'TO DO' ? a : null);

    const allAssIds = course.chapters
        .map(chapterId => chapters[chapterId])
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
