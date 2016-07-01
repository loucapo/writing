module.exports = function (repository) {
    return {
        courses: function *() { // eslint-disable-line object-shorthand
            this.body = yield repository.getCourseById(this.params.id);
        },
        coursesAvailableByUID: function *() { // eslint-disable-line object-shorthand
            this.body = yield repository.coursesAvailableByUID();
        }
    };
};
