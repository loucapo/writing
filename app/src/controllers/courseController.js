module.exports = function (repository) {
    return {
        courses: function *() { // eslint-disable-line object-shorthand
            this.body = {
                success: true,
                status: 200,
                payload: yield repository.getCourseById(this.params.id)
            };
        },
        coursesAvailableByUID: function *() { // eslint-disable-line object-shorthand
            this.body = {
                status: 200,
                success: true,
                payload: yield repository.coursesAvailableByUID()
            };
        }
    };
};
