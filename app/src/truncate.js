var config = require('config');
var _ = require('lodash');

var knex = require('knex')({
    client: 'pg',
    connection: config.postgres.config
});

async function getTables(conn) {
  return conn('information_schema.tables')
        .where({
          table_schema: 'writer_key',
          table_catalog: 'writer_key',
          table_type: 'BASE TABLE'})
        .select('table_name').
    then(result => _.map(result, 'table_name'));
    //qqq gotta catch
}

module.exports = () => {
  return getTables(knex).then(function(tables) {
    return Promise.all(_.map(tables, function(t) {
      // can't just use .truncate() b/c FK constraints
      // also note very PG specific
      console.log("BLASTING ", t, "!");
      return knex.raw("TRUNCATE " + t + " RESTART IDENTITY CASCADE");
    }));
  }).then(function() {
    console.log("BLASTED!");
  })
};
