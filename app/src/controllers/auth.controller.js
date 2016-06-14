/**
 * Created by reharik on 7/26/15.
 */
"use strict";

module.exports = function(authentication){

    var  signIn = function *() {
        console.log("arrived at login");
        var token = yield authentication.matchUser();// send creds from request here);
        if (!token) {
          return  this.status = 401;
        }
        return json({token: token});
    };

    var  checkAuth = function *() {
        if (this.passport.user) {
            this.body = {user: this.passport.user};
            this.status = 200;
        } else{
            this.status = 401;
        }
    };

    var  signOut = function *() {
        this.logout();
        this.status = 204;
    };

    return {
        signIn:signIn,
        signOut:signOut,
        checkAuth:checkAuth
    }

};

