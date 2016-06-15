module.exports = function (authentication) {
    var signIn = function *() {
        console.log('arrived at login'); // eslint-disable-line object-shorthand
        var token = yield authentication.matchUser();// send creds from request here);
        if (token) {
            this.body = { token };
        } else {
            this.status = 401;
        }
    };

    var checkAuth = function *() {
        if (this.passport.user) {
            this.body = { user: this.passport.user };
            this.status = 200;
        } else {
            this.status = 401;
        }
    };

    var signOut = function *() {
        this.logout();
        this.status = 204;
    };

    return {
        signIn,
        signOut,
        checkAuth
    };
};
