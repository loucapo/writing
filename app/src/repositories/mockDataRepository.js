module.exports = function (slsData, Promise) {
    return {
        getCourseById(id) {
            const course = slsData.cache.courses[id];
            return course ? Promise.resolve(course) : Promise.reject(course);
        },
        coursesAvailableByUID() {
            var courses = slsData.cache.courses;
            var result = Reflect.ownKeys(courses).map(x => ({ id: courses[x].id, title: courses[x].title }));
            return Promise.resolve(result);
        }
    };
};
