module.exports = function (slsData, Promise) {
    return {
        getCourseByExternalId(id) {
            const course = slsData.cache.courses[id];
            // TODO should probably centralize and standardize error message
            if (!course) { throw new Error(`No course with id: ${id} found!`); }
            return Promise.resolve(course);
        },
        coursesAvailableByUID() {
            var courses = slsData.cache.courses;
            var result = Reflect.ownKeys(courses).map(x => ({
                id: courses[x].id,
                externalId: courses[x].externalId,
                title: courses[x].title }));
            return Promise.resolve(result);
        }
    };
};
