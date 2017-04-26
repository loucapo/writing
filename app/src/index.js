var config = require('config');
var DBMigrate = require( 'db-migrate' );
var pingDB = require('./pingDB');

module.exports = async function() {
    console.log('==========BEGIN ping db"=========');
    await pingDB();
    console.log('==========end ping db"=========');

    try {
        var dbmigrate = DBMigrate.getInstance(true, {config: {[process.env.MIGRATE_ENV]: config.postgres.config}});
        console.log('==========BEGIN Schema Load"=========');
        await dbmigrate.up();
        console.log('==========END Schema Load=========');
    } catch (ex) {
        console.log('==========exception=========');
        console.log(ex);
        console.log('==========END exception=========');
    }
}();
