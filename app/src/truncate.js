var config = require('config');

// var DBMigrate = require( 'db-migrate' );
// var pingDB = require('./pingDB');
// var repository = require('./repository');

var knex = require('knex')({
    client: 'pg',
    connection: config.postgres.config
});

knex.select().table('activity')
    .then(function(t) {
        console.log(t);
    });

knex('information_schema.tables')
    .where({
        table_schema: 'writer_key',
        table_catalog: 'writer_key',
        table_type: 'BASE TABLE'})
    .select('table_name')
    .then(function(k) {
        console.log("Tables in wk schema:");
        for (var v in k) {
            console.log(k[v].table_name);
        }
    }).then(process.exit);
