module.exports = function () {
    return {
        swagger: function *() { // eslint-disable-line object-shorthand
            this.body = require('./../swagger/swagger_spec.json'); // eslint-disable-line global-require
        }
    };
};
