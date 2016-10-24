require('babel-polyfill');
require('babel-register');

const data = require('./src/index').generateDB;
//horrible @#$@## hack
console.log('=========="running data"=========');
console.log(data);
console.log('==========END "running data"=========');
setTimeout( data(), 5000);
