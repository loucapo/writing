module.exports = function(pgasync, config, puresql, humps, pgformat) {

  function makeAdapter(connection, debug) {
    return {
      query: query => {
        if (debug) {
          console.log('\n\nPuresql MSSQL adapter: ');
          console.log(query);
        }
        return new connection.query(query);
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

  return function(queriesFile, query, event) {
    const pg = new pgasync.default(config.postgres.config);
    let adapter = makeAdapter(pg);
    let queries = puresql.loadQueries(queriesFile);

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
