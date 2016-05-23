var _ = require('lodash');
var Promise = require('bluebird');
//var fs = require('fs');
// var fixtures = require('../../fixtures/fixtures');
var wd = require('selenium-webdriver');
var until = wd.until;

// This will
// get a list of users
// for each user
//  open blackboard
//  login to blackboard
//  navigate to the course, content
//  launch a moodle course
//  login to moodle
//  verify we're looking at the course page

var Pants = require('../../helpers/pants');
var pants = new Pants;

var Blackboard = require('../../helpers/blackboard2');
var wdHelpers  = require('../../helpers/webdriver');

//var po = require('../../helpers/page_objects');
//var assoc   = po.page_objects.association_page; //ugh

starting_value = 10;
max_value = 1120;
//max_value = 9;

// function newBrowser(thing) {
//   return Promise.try(function() {
//     return thing.bro = new wd.Builder().withCapabilities(wd.Capabilities.chrome()).build();
//   }).then(function() {
//     return thing.blackboard = new Blackboard(thing.bro, 'test1');
//   }).then(function() {
//     return thing.bro.getWindowHandle();
//   });
// }

(function loop(value) {
  username = 'bblarge' + zeroPad(value, 4);
  console.log('starting user ' + username);
  if (value != max_value) {
    Promise.try(function() {
      pants.bro = new wd.Builder().withCapabilities(
        wd.Capabilities.chrome()).build();
      pants.blackboard = new Blackboard(pants.bro, 'test1');
      return pants.bro.getWindowHandle();
    }).then(pants.blackboard.loginAndGoToContent.bind(pants.blackboard, {
      username: username,
      course: 'GWQA3: GatewayQA 3',
      link: 'Gateway - Staging',
      password: username
    })).then(function() {
      return pants.bro.wait(until.elementLocated({xpath : '//h3[text() = "Gateway -> TP User Association Request"]'}), 5000, 'not on assoc page?');
    }).then(function() {
      return pants.bro.findElement({id : 'btnSubmitUnknown'}).click();
    }).then(function() {
      return pants.bro.wait(until.elementLocated({xpath: '//h1[contains(text(), "Successful Tool Launch")]'}), 8000, 'bazinga?');
      //return pants.bro.sleep(3000);
    //   return pants.bro.wait(until.elementLocated({xpath: "//input[@id='username'] | //a[text()='My courses']"}), 8000, 'bazinga?');
    // }).then(function() {
    //   return pants.bro.isElementPresent({xpath: "//input[@id='username']"});
    // }).then(function(isNotAssociated) {
    //   if (isNotAssociated) {
    //     return Promise.try(function() {
    //       return pants.loginToMoodle(username, username); })
    //       .then(function() {
    //         return pants.bro.wait(until.elementLocated({linkText: 'My courses'}), 7000, 'looking for \'My Courses\' link');
    //       });
    //   } else {
    //     return pants.bro.wait(until.elementLocated({linkText: 'My courses'}), 7000, 'looking for \'My Courses\' link');
    //   }
    }).then(function() {
      return pants.bro.quit();
    }).then(function() {
      return value + 1;
    }).then(loop);
  }
  return Promise.resolve(starting_value);
})(starting_value);

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

// //TODO: make some INTS named constants, like the roleids, maybe the context types
// //TODO: abstract the names of sql dumps away from the filenames, so the filename can change and we only have to update one place, not every test,
// // but can keep many many dumps.
