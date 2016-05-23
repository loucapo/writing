/*global require, module, console*/
var Chance = require('chance');
var chance = new Chance();
var _ = require('lodash');
var mo = require('moment');

var Templates = {};

Templates.Course = {
  basic: function(h) {
    return {};
  },
  bt_and_ac: function(h) {
    return {
      accept_access_code : 1,
      accept_braintree   : 1,
      course_cost: 50
    };
  },
  required: function() {
    return {};
  },
  bu_barebones: function() {
    return { business_unit: 2};
  },
  bu_dynamicBooks: function() {
    return { business_unit: 1 };
  },
  forCourse: function(cid) {
    return { course_id: cid };
  },
  codeOnly: function() {
    return {
      accept_access_code : 1,
      accept_braintree   : 0,
      course_cost: 3
    };
  },
  btOnly: function() {
    return {
      accept_access_code : 0,
    };
  },
  single_price: function(cost) {
    var opts = {course_cost: cost};
    return opts;
  },
  multi_price: function(h, cost) {
    var opts = {course_cost_multi: cost};
    return _.merge({}, opts, h);
  },
};

Templates.AccessCode = {
  required: function() {
    return {access_code: chance.guid()};
  },
  withTagID: function(h) {
    return {
      access_code: chance.guid(),
      business_unit: 2,
      // when called without date_used, defaults to current.  so creation REQUIRES us to set null,
      //  or the code is essentially created as already used.
      date_used: null,
      tag_id: h
    };
  },
};

Templates.Tag = {
  required: function() {
    return {}
  },
  basic: function(h) {
    //TODO: remove hard coded business unit ids with a select based on the cfg.BUUT
    var opts = {
      business_unit: 2,
      tag_name: 'default-should-be-overwritten'
    };
    return _.merge({}, opts, h);
  },
};

Templates.Institution = {
  required: function() { return {}; },
  basic: function(name) {
    var name = name.charAt(0).toUpperCase() + name.slice(1);
    var names = [
      function(n) { return chance.state({ full: true }) + ' ' + name + ' University'; },
      function(n) { return name + ' Technical College'; },
      function(n) { return 'College of ' + name + ' ' + chance.state({ full: true }); },
      function(n) { return 'New ' + name + ' School of ' + chance.word();},
      function(n) { return 'College of the Holy ' + chance.suffix() + ' ' + name; },
      function(n) { return chance.state({ full: true }) + ' Institute of ' + name + ' Technology'; },
      function(n) { return 'Eastern ' + chance.state({ full: true }) + ' Baptist University'},
      function(n) { return 'Mc' + chance.name() + ' Culinary Academy';},
      function(n) { return 'Digital College of ' + name + ' at ' + chance.city(); }
    ];
    name = _.sample(names).call(name);
    return {'name': name};
  },
};

Templates.CourseByInstitution = {
  required: function() { return {}; },
  basic: function(inst, course) {
    return {'institution_id': inst, 'eco_course_id': course};
  }
};

module.exports = Templates;
