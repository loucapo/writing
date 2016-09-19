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
      },
      async getJsonById(id, table) {
        var query = ('SELECT * from "' + table + '" where "Id" = \'' + id + '\'');
        logger.debug(query);
        var row = await pg.row(sql);
        if (row) {
          return row.document;
        }
        return null;
      },

      async saveJsonDocument(table, document, id) {
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
