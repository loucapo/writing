module.exports = function(config, defaultData, sqlfixtures, knex) {
  return async function() {
    const _knex = knex({
      client: 'pg',
      connection: config.postgres.config,
      pool: {min: 0, max: 7}
    });
    const fixtureCreator = new sqlfixtures(_knex);
    const options = {showWarning: false};

    try {
      console.log(`==========loadData=========`);
      await fixtureCreator.create(defaultData(), options);
      console.log(`==========END loadData=========`);
    } catch (err) {
      console.log(`==========err=========`);
      console.log(err);
      console.log(`==========END err=========`);
    }
  };
};
