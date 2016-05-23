var Chance = require('chance');
var chance = new Chance();
//var _ = require('lodash');
var Promise = require('bluebird');
var fs = require('fs');

var fixtures = require('../../data/fixtures');

// This will
//   create a course in moodle
//   create the corresponding course in ECO
//   associate the course with an institution
//   create and enroll a batch of students in the course

var total_students = 103;
var students_per_course = 10;
var courses_per_institution = 5; // almost meaningless for current testing, simple and maybe useful later.

// just for restarting mid-run
var starting_course = 0; // just a counter in the name, unrelated to any id
var starting_student = 0;

var current_inst_id = null;
var current_course_id = null;
var current_student_id = null;

var course_per_institution_counter = 0;

var argv = require('yargs')
    .usage('Usage: $0 -c [num] -p [num]')
    .demand(['c'])
    .describe('c', 'Total count of Moodle course to create')
    .describe('p', 'Percentage of the Moodle courses that should have a corresponding ECO course (as rand weighting, not actual guarantee)')
    .default('p', 0)
    .describe('q', 'Percentage of the ECO Courses that should have am associates Institution (as rand weighting, not actual guarantee)')
    .default('q', 0)
    .argv;

var courseCount = argv.c;
var startingValue = 0;

var course = null;
var enrolment = null;
var inst = null;
var context = null;

function d100() {
  return chance.integer({min:0, max: 100});
}

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
};

function instSetup() {
  return Promise.try(function() {
    return fixtures.writeTemplates('eco.Institution', ['basic', chance.first()]);
  }).then(function(inst) {
    return inst.dataValues;
  });
};

function courseSetup() {
  return Promise.try(function() {
    return instSetup();
  }).then(function(i) {
    inst = i;
    return;
  }).then(function() {
    return fixtures.writeTemplates('moodle.Course', ['basic']);
  }).then(function(c) {
    course = c;
    return Promise.join(
      fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', course.dataValues.id]),
      fixtures.writeTemplates('moodle.Context', ['simpleCourse', course.dataValues.id]),
      function(enr, ct) {
        enrolment = enr;
        context = ct;
        return fixtures.upsert('moodle.Context', {id: context.dataValues.id, path: '/1/' + context.dataValues.id});
      });
  }).then(function() {
    var roll = d100();
    // console.log(roll);
    // console.log(argv.p);
    // console.log(roll > argv.p);
    if (d100() > argv.p) {
      //console.log('making a course')
      return fixtures.writeTemplates('eco.Course',
                                      ['bu_barebones'],
                                      ['bt_and_ac'],
                                      ['single_price', 309.74 ],
                                      ['forCourse', course.dataValues.id ]);
    } else {
      // console.log('NI!');
      return null; }
  }).then(function(didwe) {
    if ((d100() > argv.q) && (didwe !== null)) {
      ecoCourse = didwe;
      return fixtures.writeTemplates('eco.CourseByInstitution', ['basic', inst.id, ecoCourse.dataValues.id]);
    }
    didwe = false;
    return;
  });
}

(function loop(value) {
  if (value != courseCount) {
    return Promise.try(function() {
      return courseSetup();
    }).then(function() {
      return value + 1;
    }).then(loop);
  }
  return Promise.resolve(value);
})(startingValue);
