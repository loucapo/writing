module.exports = function(pgasync, config, puresql, humps) {

  return function(queriesFile, query, event) {
    const pg = new pgasync.default(config.postgres.config);
    let adapter = puresql.adapters.pg(pg);
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
