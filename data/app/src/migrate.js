module.exports = function(config, dbmigrate, pingDB) {
  return async () => {
    console.log('==========BEGIN ping db"=========');
    console.log('&&& config in migrate &&&');
    console.log(config);
    console.log('&&&&&&&&&&&&&&&&');
    await pingDB();
    console.log('==========end ping db"=========');

    try {
      const _dbmigrate = dbmigrate.getInstance(true, {config: {[process.env.MIGRATE_ENV]: config.postgres.config}});
      console.log('==========BEGIN Schema Load"=========');
      await _dbmigrate.up();
      console.log('==========END Schema Load=========');
    } catch (ex) {
      console.log('==========exception=========');
      console.log(ex);
      console.log('==========END exception=========');
    }
  };
};
