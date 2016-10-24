module.exports = function (pgasync, config, util) {
  return function () {
    const pg = new pgasync.default(config.postgres.config);
    return {
      async row(sql) {
          return await pg.row(sql);
        // return await "hello ma";
      },
      async rows(sql) {
        return await pg.rows(sql);
        // return await "hello ma";
      },
      async query(sql) {
        return await pg.query(sql);
      }
    }
  }
};
