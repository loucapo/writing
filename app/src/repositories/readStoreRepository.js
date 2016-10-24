module.exports = function (pgasync, config, util) {
  return function () {
    const pg = new pgasync.default(config.postgres.config);
    return {
      async row(sql) {
          return await pg.row(sql);
      },
      async rows(sql) {
        return await pg.rows(sql);
      },
      async query(sql) {
        return await pg.query(sql);
      }
    }
  }
};
