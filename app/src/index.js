var config = require('config');
var DBMigrate = require( 'db-migrate' );
var pingDB = require('./pingDB');
var truncate = require('./truncate');
var loadData = require('./load');

var generateDB = async function() {
    console.log('==========BEGIN ping db"=========');
    await pingDB();
    console.log('==========end ping db"=========');

    try {
        var dbmigrate = DBMigrate.getInstance(true, {config: {[process.env.NODE_ENV]: config.postgres.config}});
        console.log('==========BEGIN Schema Load"=========');
        await dbmigrate.up();
        console.log('==========END Schema Load=========');
    } catch (ex) {
        console.log('==========exception=========');
        console.log(ex);
        console.log('==========END exception=========');
    }

  try {
    console.log('==========BEGIN truncate=========');
    await truncate();
    console.log('==========END truncate=========');
  } catch (ex) {
    console.log('==========exception=========');
    console.log(ex);
    console.log('==========END exception=========');
  }

    try {
        console.log('==========BEGIN Data Load=========');
        await loadData();
        console.log('==========END Data Load=========');
    } catch (ex) {
        console.log('==========exception=========');
        console.log(ex);
        console.log('==========END exception=========');
    }
};

module.exports = {
    generateDB
};
