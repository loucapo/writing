module.exports = function (config) {
    return {
        index: function *() { // eslint-disable-line object-shorthand
            this.body = {
                version: '1',
                commit: '1',
                // frontend: config.frontend.ip,
                sitename: config.app.title
            };
        }
    };
};
