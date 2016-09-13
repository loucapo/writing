module.exports = function (pgasync, config, util) {
  return function() {
    const fu = new pgasync.default(config.postgres.config);
    return {
      async row(sql) {
        return await fu.row(sql);
        // return await "hello ma";
      },
      async query(sql) {
        return await fu.query(sql);
      }
    }
  }
};
