/*global module, require, sequelize, console, __dirname*/
var cfg = require('../config/config');
var fs = require('fs');
var Promise = require('bluebird');
var _ = require('lodash');
var Sequelize = require('sequelize');

function initConn(bizunit) {
  var conn = new Sequelize(null, bizunit.user, bizunit.password, {
    host: bizunit.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: false,
    define: {
      timestamps: false,
    }
  });
  return conn;
}

function dropDatabase(bizunit, database) {
  var sequelize = initConn(bizunit);
  return sequelize.query('DROP DATABASE IF EXISTS `' + database + '`');
}

function createDatabase(bizunit, database) {
  var sequelize = initConn(bizunit);
    return sequelize.query('CREATE DATABASE IF NOT EXISTS `' + database + '`');
}

function parseFileIntoSQLArray(file) {
  var cmds = [];
  cmds = fs.readFileSync(file, {encoding: 'utf-8'});
  cmds = cmds.split('\n');
  return cmds;
}

function arrToCommands(arr) {
  var cmds = [];
  var temp = '';
  _.each(arr, function(line) {
    if ((line[0] === line[1]) && (line[0] === '-')) {
      return;
    } else if (line === '') {
      return;
    } else if (line[line.length - 1] === ';') {
      temp = temp + line;
      cmds.push(temp);
      temp = '';
      return;
    } else {
      temp = temp  + line;
      return;
    }
  });
  return cmds;
}

function dropDB(dbcfg, database) {
  return dropDatabase(dbcfg, database);
}

function createDB(dbcfg, database) {
  return createDatabase(dbcfg, database);
}

function loadSQL(dbcfg, file) {
  var sequelize = initConn(dbcfg);
  // TODO: oh no a hard coded path!
  file = __dirname + '/sql/' + file;
  var goodcmds = arrToCommands(parseFileIntoSQLArray(file));

  return Promise.each(goodcmds, function(cmd) {
    return sequelize.query(cmd);
  }, {concurrency: 1});
}

function reset(dbcfg, scenario) {
  return Promise.try(function() {
    console.log('dropping ', scenario);
    return dropDB(dbcfg, scenario.schema);
  }).then(function() {
    console.log('creating ', scenario);
    return createDB(dbcfg, scenario.schema);
  }).then(function() {
    console.log('loading ', scenario);
    return loadSQL(dbcfg, scenario.file);
  });
}

module.exports.loadSQL = loadSQL;
module.exports.createDB = createDB;
module.exports.dropDB = dropDB;
module.exports.reset = reset;
