import { cache } from './../../utilities/cache';

export default (state, props) => {
    const result = { assignments: [] };

    const course = state.courses[state.currentCourse];
    // check if object is cachable and if so does it need to be refreshed
    // if needs to be refreshed then dispatch action that refreshes

    if (cache.needsCacheRefresh(state, course)) {
        return result;
    }
    result.assignments = state.chapters[props.id].assignments.map(assId => state.assignments[assId]);

    return result;
};
