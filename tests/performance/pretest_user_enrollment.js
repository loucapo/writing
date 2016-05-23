//var _ = require('lodash');
var json2csv = require('json2csv');
//var chance = require('chance').Chance();
var Promise = require('bluebird');
var fs = require('fs');
var fixtures = require('../../fixtures/fixtures');
// This will
//   create a course in moodle
//   create a moodle user
//   enroll that user in that course
//   add that user to a new blackboard csv users file
//   add that user to a new blackboard csv user course enrollment file

// But all we actually need it to do is
//   generate a user with a particular username prefix
//   enroll them in a particular (static id 78) course
//   output a csv file with filename using username prefix, containing username and password

// NOTE: that you will likely not have to re-import the student users or their enrollments into blackboard.
// this file is kept around for reference, and in case changes have to be made, but for the imaginable future,
// you should not have to reimport these users.

// enrollment
// Course IDRequired, UsernameRequired, Course Role, System Availability, Course Availability
// ex: Course1, user_a

// users
// UsernameRequired, Last NameRequired, First NameRequired, Email, PasswordRequired, Student ID, Middle Name, Job Title, Department, Company, Street 1, Street 2, City, State / Province, Zip / Postal Code, Country, Work Phone, Home Phone, Work Fax, Mobile Phone, Website, Primary Institution Role, System Availability,Other Name,Suffix,Title
// ex: qa_gs_0001,doe,joe,some@enail.com,Password123!

var userCount = 3000;
var startingValue = 0;
var courseID = 'qa-stem-eco';

//TODO: blackboard actually does not want the header rows in the csv, so we can take them out
// though it does seem to accept the rest of the entries, so whatever.

var user_rows = [];
var enrollment_rows = [];
var urow = null;
var erow = null;

var course = null;
var enrolment = null;
var assn = null;
var prof = null;
var context = null;

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

function courseSetup() {
  return Promise.try(function() {
    return fixtures.writeTemplates('moodle.Course', ['basic']);
  }).then(function(c) {
    course = c;
    return Promise.join(
      fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', course.dataValues.id]),
      fixtures.writeTemplates('moodle.Context', ['simpleCourse', course.dataValues.id]),
      //fixtures.writeTemplates('moodle.GradeItem', ['basic', {course: course.dataValues.id}]),
      function(enr, ct) {
        enrolment = enr;
        //assn = gi;
        context = ct;
        return fixtures.upsert('moodle.Context', {id: context.dataValues.id, path: '/1/' + context.dataValues.id});
      });
  // }).then(function(c) {
  //   course = c;

  }).then(function() {
    //assn = gi;
    return fixtures.writeTemplates('moodle.User', ['basic']);
  }).then(function(pf) {
    prof = pf;
    return; // fixtures.writeTemplates('moodle.Context', ['simpleCourse', course.dataValues.id]);
  }).then(function() {
    return fixtures.writeTemplates('moodle.RoleAssignment', ['basic', {roleid: 1, contextid: context.dataValues.id, userid: prof.dataValues.id}]);
  }).then(function() {
    return fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', course.dataValues.id]);
  }).then(function() {
    return fixtures.writeTemplates('moodle.UserEnrolment', ['basic', {enrolid: enrolment.dataValues.id, userid: prof.dataValues.id}])
  }).then(function() {
    return fixtures.writeTemplates('moodle.Assign', ['basic', {course: course.dataValues.id}]);
  }).then(function(gi) {
    assn = gi;
    return fixtures.writeTemplates('moodle.GradeItem', ['basic', {courseid: course.dataValues.id, itemname: assn.dataValues.name}]);
  });
}

//TODO: make some INTS named constants, like the roleids, maybe the context types
//TODO: abstract the names of sql dumps away from the filenames, so the filename can change and we only have to update one place, not every test,
// but can keep many many dumps.

(function loop(value) {
  var user = {};
  var urow = {};
  var erow = {};
  if (value != userCount) {
    return Promise.try(function() {
      if (value == startingValue) {
        return courseSetup();
      } else {
        return;
      }
    }).then(function() {
      return fixtures.writeTemplates('moodle.User', ['basic'], ['withUsername', 'qa_gs_' + zeroPad(value, 4)]);
    }).then(function(derr) {
      user = derr.dataValues;
      return fixtures.writeTemplates('moodle.UserEnrolment', ['basic', {enrolid: enrolment.dataValues.id, userid: user.id}]);
    }).then(function() {
      return fixtures.writeTemplates('moodle.RoleAssignment', ['basic', {roleid: 5, contextid: context.dataValues.id, userid: user.id}]);
    }).then(function() {
      return fixtures.writeTemplates('moodle.GradeGrade', ['basic', {
        itemid: assn.dataValues.id,
        userid: user.id,
        usermodified: prof.dataValues.id,
        finalgrade: 34.12
      }]);
      // then enroll the user in the course
      // then assign the user a grade
    }).then(function() {
      urow.Username = 'qa_gs_' + zeroPad(value, 4);
      urow['First Name'] = user.firstname;
      urow['Last Name'] = user.lastname;
      urow.Email = user.email;
      urow.Password = 'Password123!';

      erow['Course ID'] = courseID;
      erow['Username'] = urow.Username;

      user_rows.push(urow);
      enrollment_rows.push(erow);
      return urow;
    }).then(function() {
      if (value == (userCount - 1)) {
        writeUsers();
        writeEnrollments();
      }
      return value + 1;
    }).then(loop);
  }
  return Promise.resolve(value);
})(startingValue);

// restore moodle
// upgrade plugins
// dump moodle
//
// create a course
// insert an assignment
// enroll each user as created
// and assign them a mdl_grade_grades

var writeUsers = function() {
  var ufields = ['Username', 'Last Name', 'First Name', 'Email', 'Password'];
  json2csv({ data: user_rows, fields: ufields }, function(err, csv) {
    if (err) console.log(err);
    fs.writeFile('generated_users.csv', csv, function(err) {
      if (err) throw err;
      console.log('file saved');
    });
  });
}

var writeEnrollments = function() {
  var efields = ['Course ID', 'Username'];
  json2csv({ data: enrollment_rows, fields: efields }, function(err, csv) {
    if (err) console.log(err);
    fs.writeFile('generated_enrollments.csv', csv, function(err) {
      if (err) throw err;
      console.log('file saved');
    });
  });
}
