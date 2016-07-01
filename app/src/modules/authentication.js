module.exports = function (co, bcryptThunk) { // }, jsonwebtoken) {
    const createPassword = (_password) =>
        co(function*() {
            try {
                const salt = yield bcryptThunk.genSalt();
                return yield bcryptThunk.hash(_password, salt);
            } catch (err) {
                throw err;
            }
        });

    const comparePassword = function *(candidatePassword, realPassword) {
        return yield bcryptThunk.compare(candidatePassword, realPassword);
    };

    // const matchUser = function *(username, password) {
    //     const user = yield readstorerepository.query('user', { username: username.toLowerCase() });
    //     if ( !user ) {
    //         throw new Error('User not found');
    //     }
    //
    //     if (yield comparePassword(password, user.password)) {
    //         return jsonwebtoken.sign(user, secret, { expiresInMinutes: 60 * 5 });
    //     }
    //
    //     throw new Error('Password does not match');
    // };

    return {
        createPassword,
        comparePassword // ,
        // matchUser
    };
};
