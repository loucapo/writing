module.exports = function(config, defaultData, newFixture, sqlfixtures, knex) {
  return async function(fixt) {
    const _knex = knex({
      client: 'pg',
      connection: config.postgres.config,
      pool: {min: 0, max: 2}
    });
    const fixtureCreator = new sqlfixtures(_knex);
    const options = {showWarning: false};
    let res = false;
    try {
      console.log(`=======>>> loadFixture =========`);
      let data = await newFixture(fixt);
      if (!data) {
        res = undefined;
      } else {
        console.log(`loading "${fixt}"`);
        res = await fixtureCreator.create(data, options);
      }
      console.log(`========== loadFixture >>>======`);
    } catch (err) {
      console.log(`=======>>> error =========`);
      console.log(err);
      console.log(`========== error >>>======`);
    } finally {
      _knex.destroy();
    }
    return res;
  };
};
