var pgasync = require('pg-async');
var data = require('./data');
var config = require('config');
var DBMigrate = require( 'db-migrate' );

var generateDB = async function(){
    var dbmigrate = DBMigrate.getInstance(true, {config: {[process.env.NODE_ENV]: config.postgres.config}});

    try {
        console.log('==========BEGIN Schema Load"=========');
        await dbmigrate.reset();
        await dbmigrate.up();
        console.log('==========END Schema Load=========');
    } catch (ex) {
        console.log('==========exception=========');
        console.log(ex);
        console.log('==========END exception=========');
    }

    var pg = new pgasync.default(config.postgres.config);
    // generate default data
    var _data = data();
    try {
        console.log('==========BEGIN Data Load=========');
        await pg.query(_data);
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
