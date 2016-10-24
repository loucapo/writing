require('babel-polyfill');
require('babel-register');

const data = require('./src/index').generateDB;
//horrible @#$@## hack
setTimeout( data(), 5000);
