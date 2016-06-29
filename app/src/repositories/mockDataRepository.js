module.exports = function (slsData, Promise) {
    return {
        getCourseById(id) {
            const course = slsData.cahce.courses[id];
            return course ? Promise.resolve(course) : Promise.reject(course);
        },
        availableCourses() {
            var result = slsData.cahce.courses.map(x => ({ id: x.id, title: x.title }));
            return Promise.resolve(result);
        }
    };
};
