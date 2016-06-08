var Chance = require('chance');
var chance = new Chance();

var json2csv = require('json2csv');

//var _ = require('lodash');
var Promise = require('bluebird');
var fs = require('fs');

var fixtures = require('../../data/fixtures');

// This will
//   create a course in moodle
//   create the corresponding course in ECO
//   associate the course with an institution
//   create and enroll a batch of students in the course

var total_students = 5000;
var students_per_course = 100;
var courses_per_institution = 5; // almost meaningless for current testing, simple and maybe useful later.

// just for restarting mid-run
// var offset_course = 0; // just a counter in the name, unrelated to any id
var offset_student = 0;

// var current_inst_id = null;
// var current_course_id = null;
// var current_student_id = null;

var counter = {
  course: 0,
  enrolment: 0,
  context: 0,
  student: 0,
  eco_course: 0,
  institution: 0
};

var current = {
  course: null,
  enrolment: null,
  context: null,
  student: null,
  eco_course: null,
  institution: null,
  instructor: null
};

var enrollment_rows = [];
var erow = null;

function student_setup() {
  return Promise.try(function() {
    if (counter.student % 500 === 0) { console.log('Student counter now: ', counter.student); }
    if (counter.student % students_per_course === 0) {
      // create a new course and make it current
      return course_setup();
    } else { return; }
  }).then(function() {
    // create a student and enroll them in the current course
    return fixtures.writeTemplates('moodle.User', ['basic'], ['withUsername', 'qa_doom_' + zeroPad(counter.student + offset_student, 7)]);
  }).then(function(derp) {
    current.student = derp.dataValues;
    return fixtures.writeTemplates('moodle.UserEnrolment', ['basic', {enrolid: current.enrolment.id, userid: current.student.id}]);
  }).then(function() {
    return fixtures.writeTemplates('moodle.RoleAssignment', ['basic', {roleid: 5, contextid: current.context.id, userid: current.student.id}]);
  }).then(function() {
    counter.student += 1;
    return;
  });
}

function course_setup() {
  return Promise.try(function() {
    if (current.instructor === null) {
      return instructor_setup();
    } else { return; }
  }).then(function() {
    if (counter.course % courses_per_institution === 0) {
      return institution_setup();
    } else { return; }
  }).then(function() {
    // create a new course and its enrollments and whatever junk
    return fixtures.writeTemplates('moodle.Course', ['basic']);
  }).then(function(c) {
    current.course = c.dataValues;
    return Promise.join(
      fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', current.course.id]),
      fixtures.writeTemplates('moodle.Context', ['simpleCourse', current.course.id]),
      function(enr, ct) {
        current.enrolment = enr.dataValues;
        current.context = ct.dataValues;
        return fixtures.upsert('moodle.Context', {id: current.context.id, path: '/1/' + current.context.id});
      });
  }).then(function() {
    return fixtures.writeTemplates('eco.Course',
                                   ['bu_barebones'],
                                   ['bt_and_ac'],
                                   ['single_price', 309.74 ],
                                   ['forCourse', current.course.id ]);
  }).then(function(eco_course) {
    current.eco_course = eco_course.dataValues;
    return fixtures.writeTemplates('eco.CourseByInstitution', ['basic', current.institution.id, current.eco_course.id]);
  }).then(function() {
    return fixtures.writeTemplates('moodle.RoleAssignment', ['basic', {roleid: 1, contextid: current.context.id, userid: current.instructor.id}]);
  }).then(function() {
    return fixtures.writeTemplates('moodle.UserEnrolment', ['basic', {enrolid: current.enrolment.id, userid: current.instructor.id}]);
  }).then(function() {
    counter.course += 1;
    return;
  });
}

function institution_setup() {
  return Promise.try(function() {
    return fixtures.writeTemplates('eco.Institution', ['basic', chance.first()]);
  }).then(function(inst) {
    // dont actually ever need this?
    current.institution = inst.dataValues;
    return;
  });
}

function instructor_setup() {
  return Promise.try(function() {
    return fixtures.writeTemplates('moodle.User', ['basic']);
  }).then(function(instruc) {
    current.instructor = instruc.dataValues;
    return;
  });
}

// var argv = require('yargs')
//     .usage('Usage: $0 -c [num] -p [num]')
//     .demand(['c'])
//     .describe('c', 'Total count of Moodle course to create')
//     .describe('p', 'Percentage of the Moodle courses that should have a corresponding ECO course (as rand weighting, not actual guarantee)')
//     .default('p', 0)
//     .describe('q', 'Percentage of the ECO Courses that should have am associates Institution (as rand weighting, not actual guarantee)')
//     .default('q', 0)
//     .argv;

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

function writeEnrollments() {
  var efields = ['username', 'course'];
  json2csv({ data: enrollment_rows, fields: efields }, function(err, csv) {
    if (err) {console.log(err); }
    fs.writeFile('generated_enrollmentssss.csv', csv, function(err) {
      if (err) {throw err; }
      console.log('file saved');
    });
  });
}

// console.log('yo');
// console.log(counter)

(function loop(value) {
  if (value != total_students) {
    // console.log('value: ', value);
    // console.log('total: ', total_students);
    return Promise.try(function() {
      //
      return student_setup();
    }).then(function() {
      erow = {};
      erow['username'] = current.student.username;
      erow['course'] = current.course.id;
      enrollment_rows.push(erow);
      if (value === (total_students - 1)) {
        writeEnrollments();
      }
      return value + 1;
    }).then(loop);
  }
  return Promise.resolve(value);
})(0);
  //})(counter.student);
