module.exports = function(config, knex) {
  return function() {

    const _knex = knex({
      client: 'pg',
      connection: config.postgres.config,
      pool: {min: 0, max: 7}
    });

    return _knex('information_schema.tables')
      .where({
        table_schema: 'writer_key',
        table_catalog: 'writer_key',
        table_type: 'BASE TABLE'
      })
      .select('table_name')
      .then(result => result.map(x => x.table_name))
      .then(function(tables) {
        tables = tables.filter(table => table !== `migrations`);
        return _knex.raw(`TRUNCATE ${tables.join()} RESTART IDENTITY CASCADE`);
      }).then(() => {
        _knex.destroy();
        console.log('BLASTED!');
      });

  };
};
