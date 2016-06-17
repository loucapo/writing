module.exports = function () {
    return {
        swagger: function *() { // eslint-disable-line object-shorthand
            this.body = require('./../swagger/swagger_deref.json'); // eslint-disable-line global-require
        }
    };
};
