var data = require('./data');
var config = require('config');
var DBMigrate = require( 'db-migrate' );
var pingDB = require('./pingDB');
var repository = require('./repository');

var generateDB = async function() {
    console.log('==========BEGIN ping db"=========');
    await pingDB();
    console.log('==========end ping db"=========');

    try {
        var dbmigrate = DBMigrate.getInstance(true, {config: {[process.env.NODE_ENV]: config.postgres.config}});
        console.log('==========BEGIN Schema Load"=========');
        await dbmigrate.reset();
        await dbmigrate.up();
        console.log('==========END Schema Load=========');
    } catch (ex) {
        console.log('==========exception=========');
        console.log(ex);
        console.log('==========END exception=========');
    }

    try {
        for (let x of data().activities) {
            await repository(`${__dirname}/sql/activity.sql`, 'create_new_activity_from_jwt', x);
        }
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
