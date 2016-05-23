/* global require,
   beforeEach, afterEach, xit, it, describe,
   console, setTimeout, Promise */

var wd = require('selenium-webdriver');
var until = wd.until;

var chai = require('chai');
var expect = chai.expect;
//var should = chai.should();
//really doesn't seem to help the missing lineno issue, despite stackoverflows multiple arguments to the contrary
chai.config.includeStack = true;

var cap = require('chai-as-promised');
chai.use(cap);

var Promise = require('bluebird');
var _ = require('lodash');

var c4t = require('../config4test');

var Documenter = require('../helpers/testrail_documenter');
var doc = new Documenter(c4t);

var Blackboard = require('../helpers/blackboard');
var dbControl  = require('../fixtures/db_control');
var fixtures   = require('../fixtures/fixtures');
//the way it's currently set, just requiring the helper extends webdriver, var never used.
//might not be optimal, but is functional
var wdHelpers  = require('../helpers/webdriver');

var verify = require('../helpers/moodle_verifications');

var po = require('../helpers/page_objects');
var assoc   = po.page_objects.association_page; //ugh
var moo     = po.page_objects.moodle_common;
var payment = po.page_objects.payment;
var mhome   = po.page_objects.moodle_home;

var bro = null;
var gd = {}; //Generated Data

//semi-arbitrary?  gets rid of pointless warnings, thus far.
process.setMaxListeners(50);

beforeEach(function(done) {
  gd = {};  //make sure we're not tracking mud in from the previous test
  Promise.try(function() {
    bro = new wd.Builder().withCapabilities(
      wd.Capabilities.chrome()).build();
    return bro.getWindowHandle();
  }).then(function() {
    return Promise.join(
      dbControl.reset('stemECO', 'eco', './fixtures/sql_dumps/stem-eco-current.sql'),
      dbControl.reset('dynamicBooks', 'moodle', './fixtures/sql_dumps/moodle-2.8-configured-and-with-plugin.sql'),
      dbControl.reset('gateway', 'mnv_gateway', './fixtures/sql_dumps/gateway-current.sql'),
      //dbControl.reset('gateway', 'mnv_gateway', './fixtures/sql_dumps/functional-gateway.sql'),
      function() {return;}); //dont care, no-op, just grouping the resets.
  }).delay(6000).then(function() {
    //TODO: that's just a hacky number that won't even necessarily work in all environments.
    //  replace with polling to see if the moodle db is created (just created?  what about table contents?)
    //  before progressing.  So why do it?  bc sooo many things seem to not work... while we can delay
    //  attempting to write the data, can't seem to find a way to delay the model loading, which
    //  at least seems to be the problem.
    //TODO: implement actual logging with levels/tags, reenable a bunch of these type things
    //console.log('dbs reset');
    done();
  });
});

afterEach(function(done) {
  setTimeout(function() {
    //bro.quit();
    done();
  }, 100); //stub 4 debug & demo
});

//== IN PAGE HELPERS ==
//  as in, only used for this test.
//  when that's no longer true, refactor 'em out.
function login_as_and_goto_course_and_content(driver, profile, course, linktext) {
  driver.bb = new Blackboard(profile, driver);
  return driver.bb.login()
    .then(function() {
      return driver.bb.gotoCourses();
    }).then(function() {
      return driver.bb.gotoCourse(course);
    }).then(function() {
      return driver.bb.gotoCourseContents();
    }).then(function() {
      return Promise.join(
        driver.getAllWindowHandles(),
        driver.bb.gotoCourseContent(linktext),
        function(wh) { return wh.length; });
    }).then(function(windowHandleCount) {
      return driver.wait(function() {
        return driver.isThereANewTab(windowHandleCount, driver);
      }, 3000, 'couldnt find a new tab?');
    }).then(function() {
      return driver.getAllWindowHandles();
    }).then(function(el) {
      return driver.switchTo().window(el[(el.length - 1)]);
    }).then(function() {
      return driver.getWindowHandle();
    });
}

//
//
//== HELPERS ==

//TODO: logging out of blackboard still sometimes 'sticks': clicking the logout button needs
// some better checks or something, sometimes doesn't fire.

//TODO: add a test for a course that totally exists and is otherwise enrolable, but you can't pay via access code or braintree.
//  just checking for dat good error message.

describe("When a new user launches a course through gateway, registers, and then attempts to reuse the same gateway launch token, ", function() {
  it("user will be shown an appropriate error message.", function() {
    var test = this;
    doc.title(test, "User attempting to reuse already used gateway launch token");
    return Promise.join(
      fixtures.templates('moodle.User', ['basic']),
      fixtures.writeTemplates('moodle.Course', ['basic']),
      function(newUser, course) {
        gd.newUser = newUser;
        gd.course = course;
      }).then(function() {
        return Promise.join(
          fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', gd.course.dataValues.id]),
          fixtures.writeTemplates('moodle.Context', ['simpleCourse', gd.course.dataValues.id]),
          fixtures.writeTemplates('eco.Course', ['dynamicBooks'], ['codeOnly'], ['forCourse', gd.course.dataValues.id]),
          function(enr, context, ecoC) {
            gd.enrolment = enr;
            gd.ecoCourse = ecoC;
            return fixtures.upsert('moodle.Context', {id: context.dataValues.id, path: '/1/' + context.dataValues.id});
          });
      }).then(function() {
        return login_as_and_goto_course_and_content(bro, 'test1', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
      }).then(function() {
        return bro.wait(until.elementLocated(assoc.login_header), 5000, 'ph assoc.login_header');
      }).then(function() {
        return Promise.all([
          // verify all the points on the association / login page
          console.log(gd.newUser),
          expect(bro.findElement(assoc.login_username).getText()).to.eventually.equal(''),
          expect(bro.findElement(assoc.login_password).getText()).to.eventually.equal(''),
          expect(bro.isElementPresent(assoc.login_username_label)).to.eventually.be.true,
          expect(bro.isElementPresent(assoc.login_password_label)).to.eventually.be.true,
          expect(bro.isElementPresent(assoc.register_fields1)).to.eventually.be.true,
          expect(bro.findElement(assoc.register_city).getText()).to.eventually.equal(''),
        ]);
      }).then(function() {
        return Promise.all([
          console.log(gd.newUser),
          expect(bro.findElement(assoc.register_firstname).getAttribute('value')).to.eventually.equal(''),
          expect(bro.findElement(assoc.register_firstname).getAttribute('disabled')).to.eventually.equal('false'),
          expect(bro.findElement(assoc.register_lastname).getAttribute('value')).to.eventually.equal(''),
          expect(bro.findElement(assoc.register_lastname).getAttribute('disabled')).to.eventually.equal(null),
          expect(bro.findElement(assoc.register_email).getAttribute('value')).to.eventually.equal(''),
          expect(bro.findElement(assoc.register_email).getAttribute('disabled')).to.eventually.equal(null),
          expect(bro.findElement(assoc.register_email_confirm).getAttribute('value')).to.eventually.equal(''),
          expect(bro.findElement(assoc.register_email_confirm).getAttribute('disabled')).to.eventually.equal(null),
          ]);
      }).then(function() {
        //
        //
        //
        console.log(gd.newUser);
        bro.findElement(assoc.register_username).sendKeys(gd.newUser.username);
        bro.findElement(assoc.register_password).sendKeys(c4t.realpassword);
        bro.findElement(assoc.register_email).sendKeys(gd.newUser.email);
        bro.findElement(assoc.register_email_confirm).sendKeys(gd.newUser.email);
        bro.findElement(assoc.register_firstname).sendKeys(gd.newUser.firstname);
        bro.findElement(assoc.register_firstname).sendKeys(gd.newUser.lastname);
        return bro.findElement(assoc.register_submit).click();
        process.exit();
      }).then(function() {
        //verify no such course message
        return bro.wait(until.elementLocated(payment.header), 7500, 'ph payment.header');
      }).then(function() {
        return Promise.all([
          //are we on the payment page?  everything look correct?
          expect(bro.findElement(moo.header_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last),
          expect(bro.findElement(moo.footer_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last),
          expect(bro.isElementPresent(payment.header)).to.eventually.equal(true),
          expect(bro.findElement(payment.purchase_name).getText()).to.eventually.match(new RegExp("$")),
          expect(bro.findElement(payment.purchase_name).getText()).to.eventually.match(new RegExp(gd.course.dataValues.fullname)),
          expect(bro.isElementPresent(payment.access_code_label)).to.eventually.equal(true),
          expect(bro.findElement(payment.access_code_input).getText()).to.eventually.equal(''),
          expect(bro.isElementPresent(payment.credit_card_label)).to.eventually.equal(false),
        ]);
      });
        // open a browser to blackboard
        // create a course
        // launch that course
        // find the most recent token
        // register as a new user
        // find the most recent token,
        // expect that it's x++
        //
        // navigate to the association tester
        // enter the previous key and whatever else valid
        // go
        // sign in as an existing user
        // expect 503



        // fixtures.templates('moodle.User', ['basic']),
        // function(user, course, code) {
        // });
  });
});

    // request = request('http://172.20.0.21/local/stemlms');
    // request.post('/associate.php')
    //   .send({assoc_token: 'xxxx',
    //          tp_user_id: '',
    //          tc_user_id: 'ea918c08a3874091a2644e72109ea898',
    //          tc_role: 'urn:lti:role:ims/lis/Student',
    //          tc_first_name: 'bobby',
    //          tc_last_name: 'tables',
    //          tc_email: 'dropit@likeasthoughitwereheated.com'})
