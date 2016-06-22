import { cache } from './../../utilities/cache';

export default (state) => {
    const result = { chapters: [] };

    const course = state.courses[state.currentCourse];
    // check if object is cachable and if so does it need to be refreshed
    // if needs to be refreshed then dispatch action that refreshes

    if (cache.needsCacheRefresh(state, course)) {
        return result;
    }
    result.chapters = course.chapters.map(chapterId => state.chapters[chapterId]);

    return result;
};
