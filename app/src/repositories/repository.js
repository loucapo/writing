module.exports = function (pgasync, config, puresql, pgformat) {
  function makeAdapter (connection, debug) {
    return {
      query: function (query) {
        if (debug) {
          console.log('\n\nPuresql MSSQL adapter: ');
          console.log(query)
        }
        return new connection.query(query)
      },
      escape: function (parameter) {
        if (+parameter === parameter) {
          return parameter
        } else {
          return pgformat.literal(parameter)
        }
      }
    }
  }

  return function (queriesFile, query, event) {
    const pg = new pgasync.default(config.postgres.config);
    var adapter = makeAdapter(pg,true);
    var queries = puresql.loadQueries(queriesFile);

    return queries[query](event, adapter)
      .then((result)=> {
        return result.rows
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
};
