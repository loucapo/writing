module.exports = function bcryptThunk(bcrypt) {
    var genSalt = (rounds, ignore) =>
        new Promise((resolve, reject) =>
            bcrypt.genSalt(rounds, ignore, (err, salt) =>
                err ? reject(err) : resolve(salt)));

    var hash = (data, salt) =>
        new Promise((resolve, reject) =>
            bcrypt.hash(data, salt, (err, _hash) =>
                err ? reject(err) : resolve(_hash)));

    var compare = (data, _hash) =>
        new Promise((resolve, reject) =>
            bcrypt.compare(data, _hash, (err, matched) =>
                err ? reject(err) : resolve(matched)));

    return {
        genSalt,
        hash,
        compare,
        // These do not need to be promisified
        genSaltSync: bcrypt.genSaltSync,
        hashSync: bcrypt.hashSync,
        compareSync: bcrypt.compareSync,
        getRounds: bcrypt.getRounds
    };
};
