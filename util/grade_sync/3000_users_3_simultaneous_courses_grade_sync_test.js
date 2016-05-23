/* global require, console */
var _ = require('lodash');
//var chance = require('chance').Chance();
var Promise = require('bluebird');
//var fs = require('fs');
var fixtures = require('../../fixtures/fixtures');

// This will
//  load the many users sql to gateway
//  load the many users sql to eco
//  load the default sql to moodle
//  create a professor as user
//  3 times:
//   create a course
//   give it an enrolment
//   give it a context
//   give the professor a role assignment
//   SKIP? give the course another enrolment
//   give the profesor a userenrolment
//   give the course an assign
//   give the course a grade item
// 3000 times:
//  create a user
//  for each course:
//   give the user a userenrolment
//   give the user a roleassignment
//   give the user a gradegrade
//  spawn a browser
//  login as the manager
// ACTUALLY:
// the rest of this is basically right, but it would be a lot nicer to do it in multiple tabs
//  for each course:
//   go to the main gradebook page, and wait for it to be fixed up
//  for each course:
//   start a gradesync job and ensure it has started, and that there is no message about a job currently in progress
//  for each course:
//   attempt to start a gradesync job, and ensure there is a message about it currently being in progress
//  for each course:
//   attempt to start a gradesync job, and wait for

function courseSetup(course, prof) {
  return Promise.try(function() {
    return fixtures.writeTemplates('moodle.Course', ['basic']);
  }).then(function(c) {
    course.course = c.dataValues;
    return Promise.join(
      fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', course.course.id]),
      fixtures.writeTemplates('moodle.Context', ['simpleCourse', course.course.id]),
      function(enr, ct) {
        course.enrolment = enr.dataValues;
        course.context = ct.dataValues;
        return fixtures.upsert('moodle.Context', {id: course.context.id, path: '/1/' + course.context.id});
      });
  }).then(function() {
    return fixtures.writeTemplates('moodle.RoleAssignment', ['basic', {roleid: 1, contextid: course.context.id, userid: manager.id}]);
  }).then(function() {
    return fixtures.writeTemplates('moodle.UserEnrolment', ['basic', {enrolid: course.enrolment.id, userid: manager.id}]);
  });
}

var wd = require('selenium-webdriver');
var until = wd.until;
var Pants = require('../../helpers/pants');
var pants = new Pants;

var Blackboard = require('../../helpers/blackboard2');
var wdHelpers  = require('../../helpers/webdriver');

var po = require('../../helpers/page_objects');
var assoc   = po.page_objects.association_page; //ugh

var moodle_root = "http://172.20.0.21";

// Object.getOwnPropertyNames(pants.bro).forEach(function(val, idx, array) {
//   console.log(val + ' -> ' + pants.bro[val]);
// });

function createAndEnrolUser(userNum, courseArr) {
  //  create a user
  //  for each course:
  //   give the user a userenrolment
  //   give the user a roleassignment
  //   give the user a gradegrade
  return Promise.try(function() {
    return fixtures.writeTemplates('moodle.User', ['basic'], ['withUsername', 'qa_gs_' + zeroPad(userNum, 4)]);
  }).then(function(derp) {
    var user = derp.dataValues;
    _.each(courseArr function(thisco) {
      return Promise.try(function() {
        console.log("thisco", thisco);
        console.log("user", user);
        return fixtures.writeTemplates('moodle.UserEnrolment', ['basic', {enrolid: thisco.enrolment.id, userid: user.id}]);
      }).then(function() {
        return fixtures.writeTemplates('moodle.RoleAssignment', ['basic', {roleid: 5, contextid: thisco.context.id, userid: user.id}]);
      });
    });
  });
}

var assignedGrade = 99.66;
var startingUser = 0;
var finalUser = 3;
var courses = {
  courseA: {},
  courseB: {},
  courseC: {}
};

var courses2 = [{}, {}, {}];

var manager = {};

Promise.try(function() {
  // create the user that will be manager
  return fixtures.writeTemplates('moodle.User', ['basic']);
}).then(function(mgr) {
  manager = mgr.dataValues;
  return;
}).then(function() {
  // for each, create a course, assign the manager, create enrolments
  // return Promise.join(
  //   courseSetup(courses.courseA, manager),
  //   courseSetup(courses.courseB, manager),
  //   courseSetup(courses.courseC, manager),
  //   function() {
  //     //console.log(courses);
  //     return;
  //   });

  //return Promise.all(courses)

  courses2 = _.each(courses2, function(c) {
    return courseSetup(c, manager);
  });
  return Promise.join(courses2);
}).then(function() {
  var users = [];
  for (var i = startingUser; i <= finalUser; ++i) {
    //users.push(createAndEnrolUser(i, [courses.courseA, courses.courseB, courses.courseC]));
    users.push(createAndEnrolUser(i, courses2));
  }
  return Promise.each(users, function(u) {
    return u;
  });
}).catch(function(e) {
  console.log('dont give a fuck bout your ', e);
}).then(function() {
  return Promise.all([
    // addAssignmentToCourse(manager, courses.courseA, {name: 'all-star', desc: 'flim-flam jamboree'}),
    // addAssignmentToCourse(manager, courses.courseB, {name: 'hordy gordy', desc: 'oompa loompa fuckathon'}),
    // addAssignmentToCourse(manager, courses.courseC, {}),
    addAssignmentToCourse(manager, courses2[0], {name: 'all-star', desc: 'flim-flam jamboree'}),
    addAssignmentToCourse(manager, courses2[1], {name: 'hordy gordy', desc: 'oompa loompa fuckathon'}),
    addAssignmentToCourse(manager, courses2[2], {}),
  ]);
});

function addAssignmentToCourse(manager, course, assignment) {
  var bro = new wd.Builder().withCapabilities(
    wd.Capabilities.chrome()).build();

  return Promise.try(function() {
    return loginAs(bro, manager);
  }).then(function() {
    return gotoCourse(bro, course.course);
  }).then(function() {
    var x = fixtures.templates('moodle.Assign', ['basic']);
    console.log(x);
    return addAssignment(bro, x);
  }).then(function() {
    return bro.wait(1200);
  });
}

function addAssignment(bro, assignment) {
  // assumes you're at the front page of a course, and are logged in with editing privileges
  return Promise.try(function() {
    //TODO: assumes editing is not already on.
    return bro.findElement({xpath: "//input[@value='Turn editing on']"}).click();
  }).then(function() {
    return bro.wait(until.elementLocated({xpath: '//li[@id="section-0"]//span[@class="section-modchooser-link"]/a'}));
  }).then(function() {
    return bro.findElement({xpath: '//li[@id="section-0"]//span[@class="section-modchooser-link"]/a'}).click();
  }).then(function() {
    return bro.wait(until.elementLocated({id: 'module_assign'}));
  }).then(function() {
    return bro.findElement({id: 'module_assign'}).click();
  }).then(function() {
    return bro.findElement({xpath: '//input[@name="submitbutton"]'}).click();
  }).then(function() {
    return bro.wait(until.elementLocated({id: 'id_name'}));
  }).then(function() {
    return bro.findElement({id: 'id_name'}).sendKeys(assignment.name);
  }).then(function() {
    return bro.findElement({id: 'id_introeditor'}).sendKeys(assignment.intro);
  }).then(function() {
    return bro.wait(until.elementLocated({id: 'id_submitbutton2'}));
  }).then(function() {
    return bro.findElement({id: 'id_submitbutton2'}).click();
  }).then(function() {
    return bro.wait(until.elementLocated({linkText: assignment.name}));
  });
}

function gotoCourse(bro, course) {
  //assumes we're at the home page
  return Promise.try(function() {
    //return bro.getWindowHandle();
  //}).then(function() {
    return bro.wait(until.elementLocated({xpath: '//a[text()="' + course.fullname + '"]'}, "4500", "yesno?"));
  }).then(function() {
    return bro.findElement({xpath : '//a[text()="' + course.fullname + '"]'}).click();
  }).then(function() {
    return bro.wait(until.elementLocated({xpath: "//h1[text()='" + course.fullname + "']"}));
  });
}

function loginAs(bro, manager) {
  return Promise.try(function() {
    //return bro.getWindowHandle();
  //}).then(function() {
    return bro.get(moodle_root);
  }).then(function(x) {
    return bro.wait(until.elementLocated({linkText: 'Log in'}), 10000, 'not loading home page');
  }).then(function() {
    return bro.findElement({linkText: 'Log in'}).click();
  }).then(function() {
    return bro.wait(until.elementLocated({id: 'username'}));
  }).then(function() {
    return bro.findElement({id: 'username'}).sendKeys(manager.username);
  }).then(function() {
    return bro.findElement({id: 'password'}).sendKeys('Password123!');
  }).then(function() {
    return bro.findElement({id: 'loginbtn'}).click();
  }).then(function() {
    // TODO: might need a fix for where there is no courses?
    return bro.wait(until.elementLocated({xpath: '//div[@id="frontpage-course-list"]/h2[text()="Available courses"]'}));
  });
}


function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

// function courseSetup() {
//   return Promise.try(function() {
//     return fixtures.writeTemplates('moodle.Course', ['basic']);
//   }).then(function(c) {
//     course = c;
//     return Promise.join(
//       fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', course.dataValues.id]),
//       fixtures.writeTemplates('moodle.Context', ['simpleCourse', course.dataValues.id]),
//       function(enr, ct) {
//         enrolment = enr;
//         context = ct;
//         return fixtures.upsert('moodle.Context', {id: context.dataValues.id, path: '/1/' + context.dataValues.id});
//       });
//   }).then(function() {
//     return fixtures.writeTemplates('moodle.User', ['basic']);
//   }).then(function(pf) {
//     prof = pf;
//     return;
//   }).then(function() {
//     return fixtures.writeTemplates('moodle.RoleAssignment', ['basic', {roleid: 1, contextid: context.dataValues.id, userid: prof.dataValues.id}]);
//   }).then(function() {
//     return fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', course.dataValues.id]);
//   }).then(function() {
//     return fixtures.writeTemplates('moodle.UserEnrolment', ['basic', {enrolid: enrolment.dataValues.id, userid: prof.dataValues.id}])
//   }).then(function() {
//     return fixtures.writeTemplates('moodle.Assign', ['basic', {course: course.dataValues.id}]);
//   }).then(function(gi) {
//     assn = gi;
//     return fixtures.writeTemplates('moodle.GradeItem', ['basic', {courseid: course.dataValues.id, itemname: assn.dataValues.name}]);
//   });
// }

// function addAssignmentToCourse(course) {
//   var course = course
//   // open a browser
//   // login as the manager
//   // go to the course main page
//   // turn on editing
//   // add a thing to the course
//   // select assignment
//   // give it a name and shit
//   // save it
//   // go to the gradebook
//   var x = Promise.try(function() {
//     return new wd.Builder().withCapabilities(wd.Capabilities.chrome()).build();
//   }).then(function(bro) {
//     pants.bro = bro;
//     //   return bro.getWindowHandle();
//     // }).then(function(wh) {
//     //console.log("=== ", wh, "===");
//     // return pants.bro.sleep(3000);
//     // }).then(function(areyoutheproblem) {
//     return pants.bro.get(moodle_root);
//   }).then(function(loadedpage) {
//     console.log('---course', course.id);
//     console.log("===  uhhh?", loadedpage);
//     return pants.bro.wait(until.elementLocated({linkText: 'Log in'}));
//   }).then(function() {
//     return pants.bro.findElement({linkText: 'Log in'}).click();
//   });
// }

    // }).then(function() {
    //   return fixtures.writeTemplates('moodle.Assign', ['basic', {course: course.course.id}]);
    // }).then(function(assn) {
    //   course.assn = assn.dataValues;
    //   return fixtures.writeTemplates('moodle.Context', ['simpleAssign', course.assn.id]);
    // }).then(function(asscx) {
    //   course.assignmentContext = asscx.dataValues;
    //   return fixtures.upsert('moodle.Context', {id: course.assignmentContext.id, path: '/1/' + course.context.id + '/' + course.assignmentContext.id});
    // }).then(function(asscx) {
    //   course.assignmentContext = asscx.dataValues;
    //   console.log('bing');
    //   return fixtures.writeTemplates('moodle.GradeCategory', ['basic', {
    //     courseid: course.course.id,
    //     depth: 1,
    //     //fullname: '?',
    //     aggregation: 13,
    //     aggregateonlygraded: '1',
    //   }]);
    // }).then(function(gc) {
    //   console.log('bong');
    //   course.gradeCategory = gc.dataValues;
    //   return fixtures.upsert('moodle.GradeCategory', {id: course.gradeCategory.id, path: '/' + course.gradeCategory.id + '/'});
    // }).then(function(gc) {
    //   console.log('bang');
    //   course.gradeCategory = gc.dataValues;
    //   return fixtures.writeTemplates('moodle.GradeItem', ['basic', {
    //     courseid: course.course.id,
    //     itemname: course.assn.name,
    //     iteminstance: course.assn.id}]);

//TODO: make some INTS named constants, like the roleids, maybe the context types
//TODO: abstract the names of sql dumps away from the filenames, so the filename can change and we only have to update one place, not every test,
// but can keep many many dumps.


// Notice: Undefined property: stdClass::$path in /var/www/html/lib/grade/grade_category.php on line 2004

// Notice: Undefined property: stdClass::$id in /var/www/html/lib/grade/grade_category.php on line 2004

// Notice: Undefined property: stdClass::$id in /var/www/html/lib/grade/grade_category.php on line 2006
// Attempt to obtain a grade_category's associated grade_item without the category's ID being set.
// line 2117 of /lib/grade/grade_category.php: call to debugging()
// line 2103 of /lib/grade/grade_category.php: call to grade_category->get_grade_item()
// line 212 of /lib/grade/grade_category.php: call to grade_category->load_grade_item()
// line 2008 of /lib/grade/grade_category.php: call to grade_category->update()
// line 1448 of /lib/grade/grade_category.php: call to grade_category->get_children()
// line 425 of /lib/grade/grade_category.php: call to grade_category->auto_update_weights()
// line 1054 of /lib/gradelib.php: call to grade_category->pre_regrade_final_grades()
// line 119 of /grade/report/grader/index.php: call to grade_regrade_final_grades()
// Can not regrade non existing category
// line 396 of /lib/grade/grade_category.php: call to debugging()
// line 235 of /lib/grade/grade_category.php: call to grade_category->qualifies_for_regrading()
// line 2008 of /lib/grade/grade_category.php: call to grade_category->update()
// line 1448 of /lib/grade/grade_category.php: call to grade_category->get_children()
// line 425 of /lib/grade/grade_category.php: call to grade_category->auto_update_weights()
// line 1054 of /lib/gradelib.php: call to grade_category->pre_regrade_final_grades()
// line 119 of /grade/report/grader/index.php: call to grade_regrade_final_grades()
// Can not update grade object, no id!
