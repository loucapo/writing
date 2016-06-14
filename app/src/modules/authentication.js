

"use strict";

module.exports = function(co, bcrypt_thunk, jsonwebtoken) {
    var createPassword = function (_password) {
        return co(function*() {
            try {
                var salt = yield bcryp_thunk.genSalt();
                var hash = yield bcryp_thunk.hash(_password, salt);
                return hash;
            }
            catch (err) {
                throw err;
            }
        });
    };

    var comparePassword = function *(candidatePassword, realPassword) {
        return yield bcryp_thunk.compare(candidatePassword, realPassword);
    };

    var matchUser = function *(username, password) {
        var user = yield readstorerepository.query('user', {'username': username.toLowerCase()});
        if (!user) {
            throw new Error('User not found');
        }

        if (yield comparePassword(password, user.password)) {
            return jsonwebtoken.sign(user, secret, { expiresInMinutes: 60*5 });
        }

        throw new Error('Password does not match');
    };

    return {
        createPassword: createPassword,
        comparePassword: comparePassword,
        matchUser: matchUser
    };
};