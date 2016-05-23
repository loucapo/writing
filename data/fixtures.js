/*global module, require, __dirname*/

//var c4t = require('../config4test');
var cfg = require('../config/config');
var _ = require('lodash');
var Sequelize = require('sequelize');
var log = require('../helpers/logger')(cfg);

console.log(this);
// doesn't seem to help worth a damn
//Sequelize.Promise.longStackTraces();

var logger = function(config) {
  if (config.db_logger === false) {
    return false;
  } else {
    if (log.hasOwnProperty(config.db_logger) && (typeof log[config.db_logger] === 'function')) {
      return log[config.db_logger];
    }
  }
  throw('Attempting to use not-a-function as the database logger');
}(cfg);

function seqConn(config) {
  //console.log(config);
  return new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: logger,
    define: {
      timestamps: false,
    }
  });
}

// inelegant, still ok and better than it was.
function importModel(model, project, container, db) {
  container[model] = db.import(__dirname + '/models/' + project + '/' + model + '.js');
  return;
}

var Templates = {};
Templates.moodle = require('./templates/moodle.js');
Templates.eco    = require('./templates/stemeco.js');

var Models = {};
Models.moodle = {};
Models.eco = {};

var tpMoodle = seqConn(cfg.BUUT.lmsdb);
//TODO: as soon as we have a single test that needs to touch multiple BUs... will this be a problem or not?
//TODO: don't mismatch singular and plural, go through and fix one or the other
var moodleModels = ['CourseModules', 'CourseSections', 'GradeItem', 'GradeGrade', 'GradeCategory',
                    'Course', 'Enrolment', 'UserEnrolment', 'LTI', 'User', 'Context',
                    'RoleAssignment', 'Assign', 'Group', 'GroupMember'];

_.each(moodleModels, function(m) {
  importModel(m, 'moodle', Models.moodle, tpMoodle);
});
// TODO: tech debt: implement GradeItemsHistory; 'real' LTI resources write something there when they're created.

var stemECO = seqConn(cfg.env.ecoapi.db);
var ecoModels = ['AccessCode', 'Course', 'BusinessUnit', 'BraintreeTransaction', 'Tag', 'CourseTag', 'String',
                 'ZipcodeTaxrate', 'BUTaxXref', 'Institution', 'CourseByInstitution'];
// TODO: existing tables that exist without models yet
// Batch, Book, BraintreeTransaction, BuTaxXref, CourseByInstitution, GradeSyncHistory,
// GradeToken, Institution, Job, ZipcodeTaxrate
_.each(ecoModels, function(m) {
  importModel(m, 'stemeco', Models.eco, stemECO);
});

//=====
//
// gets a hash from a particular template
// fixtures.template('moodle.Enrolment', 'basic');
// returns a hash
//
// Calling this with only a model will use 'required' as a default.
// Otherwise 'required' will NO LONGER be used as a base.
// This is for use in very specific scenarios when you really
// just want to know what a specific template will return (or of course by higher level functions.)
function template(model) {
  var domain   = model.split('.')[0];
  var model    = model.split('.')[1];
  var template = [].slice.call(arguments, 1, 2);
  var args = [].slice.call(arguments, 2);
  if (template.length === 0) { template = 'required'; };
  // console.log('=== call to template ===');
  // console.log('domain:', domain);
  // console.log('model:', model);
  // console.log('template:', template);
  if (Templates[domain][model][template] === undefined) {
    throw('Could not find any such template: Templates[' + domain + '][' + model + '][' + template + ']');
  }
  if (Templates[domain][model][template] instanceof Function) {
    return Templates[domain][model][template].apply(this, args);
  }
  return Templates[domain][model][template];
}

// gets a hash from a series of templates
// fixtures.templates('moodle.Enrolment', ['basic'], ['forCourse', 2]);
// returns a hash
//
// expects a 'domain.model' followed by 0 or more arrays
// if 0, will create a hash from the 'required' property of the model.
// each array must contain a string of the model property to access, followed
// by any arguments to pass to that property (which obv should be a function)
function templates(model) {
  var args = [].slice.call(arguments, 1);
  var prev = null;
  var curr = null;
  return _.reduce(args, function(prev, curr) {
    curr.unshift(model);
    return _.merge({}, prev, template.apply(this, curr));
  }, template(model));
}

// writes a hash to its associated db
// fixtures.write('eco.Foo', {name: 'somedude', title: 'heirophant'});
// returns a Promise-- the Sequelize .create return is directly returned
function write(model, hash) {
  var domain = model.split('.')[0];
  model = model.split('.')[1];
  if (Models[domain][model] == undefined) {
    throw('Could not find any such model: Models[' + domain + '][' + model + ']');
  }
  return Models[domain][model].create(hash);
}

// writes a hash from a series of templates to its associated db
// Likely the goto for most test scenarios, >90% of calls in here will be to this.
// Just combines .write and .templates
// Takes a domain/model name, a series of templates (and their optional arguments),
//   and returns a Promise from Sequelize .create.
function writeTemplates(model) {
  var toInsert = templates.apply(this, arguments);
  return write(model, toInsert);
}

var Promise = require('bluebird');

//update & insert
function upsert(model, hash) {
  var domain = model.split('.')[0];
  model = model.split('.')[1];
  if (Models[domain][model] === undefined) {
    throw('Could not find any such model: Models[' + domain + '][' + model + ']');
  }
  return Promise.try(function() {
    return Models[domain][model].findAll({id: hash.id});
  }).then(function(c) {
    return Models[domain][model].upsert(hash);
  });
}

//
//========

//TODO: do we actually need to export models for any reason here?  Isn't the point to hide them?
module.exports.Models = Models;
module.exports.template = template;
module.exports.templates = templates;
module.exports.write = write;
module.exports.writeTemplates = writeTemplates;
module.exports.upsert = upsert;
