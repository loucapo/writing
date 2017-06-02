module.exports = function(config, defaultData, sqlfixtures, knex) {
  return async function() {
    const _knex = knex({
      client: 'pg',
      connection: config.postgres.config,
      pool: {min: 0, max: 5}
    });
    const fixtureCreator = new sqlfixtures(_knex);
    const options = {showWarning: false};

    try {
      console.log(`==========loadData=========`);
      await fixtureCreator.create(defaultData(), options);
      _knex.destroy();
      console.log(`==========END loadData=========`);
    } catch (err) {
      console.log(`==========err=========`);
      console.log(err);
      console.log(`==========END err=========`);
    }
  };
};
