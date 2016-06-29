module.exports = function (repository) {
    return {
        courses: function *(id) { // eslint-disable-line object-shorthand
            this.body = yield repository.getCourseById(id);
        },
        availableCourses: function *() { // eslint-disable-line object-shorthand
            this.body = yield repository.availableCourses();
        }
    };
};
