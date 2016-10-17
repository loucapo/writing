
module.exports = function (pgasync, config) {
  return function () {
    const pg = new pgasync.default(config.postgres.config);
    return {
      async createInstructorFromLTILaunch(user) {
        var query;
        if (id) {
          query = 'UPDATE "' + table + '" SET document = \'' + JSON.stringify(document) + '\' where Id = \'' + id + '\'';
        } else {
          query = 'INSERT INTO "' + table + '" ("id", "document") VALUES (\'' + document.id + '\',\'' + JSON.stringify(document) + '\')';
        }
        logger.debug(query);
        return await pg.query(sql);
      }
    }
  }
};
