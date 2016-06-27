module.exports = function (repository) {
    return {
        course: function *(id) { // eslint-disable-line object-shorthand
            this.body = yield repository.getCourseById(id);
        }
    };
};
