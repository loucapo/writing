import { cache } from './../../utilities/cache';

export default (state) => {
    const course = state.courses[state.currentCourse];
    // check if object is cachable and if so does it need to be refreshed
    // if needs to be refreshed then dispatch action that refreshes

    return cache.needsCacheRefresh(state, course) ? [] : course;
};
