const pgasync = require('pg-async');
const config = require('config');
const puresql = require('puresql');
const pgformat = require('pg-format');

var debug = true;

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

module.exports =  function (queriesFile, query, event) {
  const pg = new pgasync.default(config.postgres.config);
  var adapter = makeAdapter(pg);
  var queries = puresql.loadQueries(queriesFile);

  queries[query](event, adapter)
        .then((rows)=> {
            console.log("HOOO AHHH");
      return rows
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
