module.exports = function (courseDataGenerator, Promise) {
    return {
        getCourseById(id) {
            const course = courseDataGenerator.getCourseById(id);
            return course ? Promise.resolve(course) : Promise.reject(course);
        }
    };
};
