require('babel-polyfill');
require('babel-register');

const data = require('./src/index');
//horrible @#$@## hack
// setTimeout( data.generateDB(), 5000);
data.generateDB()