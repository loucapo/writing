module.exports = function(config, knex) {
  return function() {

    const _knex = knex({
      client: 'pg',
      connection: config.postgres.config,
      pool: {min: 0, max: 7}
    });

    function getTables(conn) {
      return conn('information_schema.tables')
        .where({
          table_schema: 'writer_key',
          table_catalog: 'writer_key',
          table_type: 'BASE TABLE'
        })
        .select('table_name').then(result => result.map(x => x.table_name));
      //qqq gotta catch
    }

    return getTables(_knex).then(tables => {
      return Promise.all(tables.map(t => {
        // can't just use .truncate() b/c FK constraints
        // also note very PG specific
        console.log(`BLASTING ${t}!`);
        return _knex.raw(`TRUNCATE ${t} RESTART IDENTITY CASCADE`);
      }));
    }).then(() => {
      _knex.destroy();
      console.log('BLASTED!');
    });
  };
};
