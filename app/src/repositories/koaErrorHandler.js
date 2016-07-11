module.exports = function () {
    return function () {
        return function *error(next) {
            try {
                yield next;
                if (this.response.status === 404 && !this.response.body) this.throw(404);
            } catch (err) {
                this.status = err.status || 500;

                // application
                this.app.emit('error', err, this);

                this.body = {
                    status: this.status,
                    success: false,
                    errors: [{ message: err.message }]
                };
            }
        };
    };
};
