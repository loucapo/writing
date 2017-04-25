module.exports = function(pgasync, config, puresql, humps, pgformat, moment) {

  // PureSql function for making query with generated sql
  function makeAdapter(connection, debug) {
    return {
      query: _query => {
        if (debug) {
          console.log('\n\nPuresql MSSQL adapter: ');
          console.log(_query);
        }
        return connection.query(_query);
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

  // client agnostic query. i.e. uses either trx client or new from pool
  function executeQuery(adapter, queriesFile, _query, event) {
    let queries = puresql.loadQueries(queriesFile);

    return queries[_query](event, adapter)
      .then(result => {
        // horrible crap should be refactored into strategies
        result.rows.forEach(r => {
          Object.keys(r).forEach(k => {
            if (k.toLowerCase().includes('date')) {
              r[k] = moment(r[k]).toJSON();
            }
          });
        });

        return humps.camelizeKeys(result.rows);
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  // regular query that pulls a new client from the pool each time
  function query(queriesFile, query, event, debug) { //eslint-disable-line no-shadow
    const adapter = makeAdapter(new pgasync.default(config.postgres.config), debug);
    return executeQuery(adapter, queriesFile, query, event);
  }

  // special function for executing queries in a transaction
  function transactionRepo(client) {
    return {
      query(queriesFile, query, event, debug) {  //eslint-disable-line no-shadow
        const adapter = makeAdapter(client, debug);
        return executeQuery(adapter, queriesFile, query, event);
      }
    };
  }

  function transaction(callback) {
    let pg = new pgasync.default(config.postgres.config);
    return pg.transaction(async client => {
      return callback(transactionRepo(client));
    });
  }

  return {
    query,
    transaction
  };
};
