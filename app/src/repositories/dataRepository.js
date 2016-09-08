module.exports = function (pgasync) {
    return {
        async row(sql) {
            return await pgasync.row(sql);
            // return await "hello ma";
        }
    };
};
