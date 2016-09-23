var pgasync = require('pg-async');
var data = require('./data');
var fs = require('fs'); 
var config = require('config');


module.exports = function() {
    return async function () {
        console.log('=========="inside data func"=========');
        console.log("inside data func");
        console.log('==========END "inside data func"=========');
        try {
            var pg = new pgasync.default(config.postgres.config);
            var schema = fs.readFileSync(__dirname + '/schema.sql').toString();
            var _data = data();

            await pg.query(schema);
            await pg.query(_data);
        } catch (ex) {
            console.log('==========ex=========');
            console.log(ex);
            console.log('==========END ex=========');
        }
    };
}

