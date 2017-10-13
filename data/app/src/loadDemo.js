module.exports = function(config, demo_env1, demo_env2, demo_env3, sqlfixtures, knex) {
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
      await fixtureCreator.create(demo_env1(), options);
      await fixtureCreator.create(demo_env2(), options);
      await fixtureCreator.create(demo_env3(), options);
      _knex.destroy();
      console.log(`==========END loadData=========`);
    } catch (err) {
      console.log(`==========err=========`);
      console.log(err);
      console.log(`==========END err=========`);
    }
  };
};
