module.exports = function(pgasync, config, puresql, pgformat, humps) {
  function makeAdapter(connection, debug) {
    return {
      query: query => {
        if (debug) {
          console.log('\n\nPuresql PGSQL adapter: ');
          console.log(query);
        }
        return connection.query(query);
      },
      escape: parameter => {
        if (+parameter === parameter) {
          return parameter;
        } else {
          return pgformat.literal(parameter);
        }
      }
    };
  }

  return function repository(queriesFile, query, event) {
    const pg = new pgasync.default(config.postgres.config);
    const adapter = makeAdapter(pg, true);
    const queries = puresql.loadQueries(queriesFile);

    return queries[query](event, adapter)
      .then(result => {
        return humps.camelizeKeys(result.rows);
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };
};
