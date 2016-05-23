/* global require,
   beforeEach, afterEach, xit, it, describe,
   console, setTimeout, Promise */
// the 4 branches to pull to are sel-162, sel-162, rc7, r55

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

after(function(done) {
  doc.close();
  done();
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

describe('When a user already existing on the TP but not associated ', function() {
  describe('attempts to enroll in a course existing in moodle but not stemeco from Blackboard, ', function() {
    xit('the association happens correctly and the user is shown an appropriate error.', function() {
      doc.title(test, "Enroll in a course existing in Moodle but not STEMECO.");
    });
  });
  describe('attempts to enroll in a course existing in stemeco but not moodle from Blackboard, ', function() {
    xit('the association happens correctly and the user is shown an appropriate error.', function() {
      doc.title(test, "Enroll in a course existing in STEMECO but not Moodle.");
    });
  });

  describe('attempts to associate to an existing course from Blackboard ', function() {
    describe('by paying with an invalid (already used) access code', function() {
      it('the association happens correctly, access to the course is denied, and the user is shown an appropriate error.', function(done) {
        var test = this;
        doc.title(test, "Existing user paying for a course with an already used access code.");
        done();
      });
    });

    describe('by paying with an invalid (nonexisting) access code ', function() {
      // xit('the association happens correctly, access to the course is denied, and the user is shown an appropriate error.', function() {
      //   var test = this;
      //   doc.title(test, "Existing user paying for existing course with invalid (nonexistent) access code");
      //   doc.steps(test, "Create a basic user in the moodle instance.");
      //   doc.steps(test, "Create a basic course in the moodle instance, ensuring enrolment is enabled for it.");
      //   doc.steps(test, "Create (or ensure there exist) unused access codes in the STEMECO db.");
      //   return Promise.join(
      //     fixtures.writeTemplates('moodle.User', ['basic']),
      //     fixtures.writeTemplates('moodle.Course', ['basic']),
      //     fixtures.writeTemplates('eco.AccessCode', ['basic']),
      //     function(user, course, code) {
      //       gd.newUser = user;
      //       gd.course = course;
      //       gd.accessCode = code;
      //     }).then(function() {
      //       return fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', gd.course.dataValues.id]);
      //     }).then(function(enr) {
      //       gd.enrolment = enr;
      //       doc.steps(test, "Create or ensure exists entries in the STEMECO db for the basic course marking it" +
      //                 "as a dynamicBooks course which can only be paid for with access codes.")
      //       return fixtures.writeTemplates('eco.Course', ['dynamicBooks'], ['codeOnly'], ['forCourse', gd.course.dataValues.id]);
      //     }).then(function(ecoC) {
      //       gd.ecoCourse = ecoC;
      //       doc.steps(test, "Login to blackboard with the test1 credentials (listed in the blackboard helper.)");
      //       doc.steps(test, "In blackboard go to the 'qa-stem-eco: qa stemeco course' and under content click the 'dynamicBooks/course/2 link'");
      //       return login_as_and_goto_course_and_content(bro, 'test1', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
      //     }).then(function() {
      //       doc.expected(test, "A new tab should open, with focus.  You should be on the moodle association page, being asked to login or create a new account.");
      //       return bro.wait(until.elementLocated(assoc.login_header), 5000, 'ph assoc.login_header');
      //     }).then(function() {
      //       return Promise.all([
      //         doc.expected(test, 'Username and password fields (under register new account) should be empty'),
      //         expect(bro.findElement(assoc.register_username).getText()).to.eventually.equal(''),
      //         expect(bro.findElement(assoc.register_password).getText()).to.eventually.equal(''),
      //         doc.expected(test, 'Username and password fields (under register new account) should have appropriate labels'),
      //         expect(bro.isElementPresent(assoc.register_username_label)).to.eventually.be.true,
      //         expect(bro.isElementPresent(assoc.register_password_label)).to.eventually.be.true,
      //         expect(bro.isElementPresent(assoc.register_fields1)).to.eventually.be.true,
      //         expect(bro.findElement(assoc.register_city).getText()).to.eventually.equal(''),
      //       ]);
      //     }).then(function() {
      //       return Promise.all([
      //         doc.expected(test, "Under register new account, first and lastname fields should contain the names " +
      //                      "registered to the user under Blackboard."),
      //         doc.expected(test, "Under register new account, first and lastname fields should be disabled, preventing " +
      //                      "the data from being changed."),
      //         expect(bro.findElement(assoc.register_firstname).getAttribute('value')).to.eventually.equal(bro.bb.first),
      //         expect(bro.findElement(assoc.register_firstname).getAttribute('disabled')).to.eventually.equal('true'),
      //         expect(bro.findElement(assoc.register_lastname).getAttribute('value')).to.eventually.equal(bro.bb.last),
      //         expect(bro.findElement(assoc.register_lastname).getAttribute('disabled')).to.eventually.equal('true'),
      //         doc.expected(test, 'The email and email confirmation inputs should contain the email address registered to' +
      //                      ' the blackboard user and be disabled, preventing the email from being changed.'),
      //         expect(bro.findElement(assoc.register_email).getAttribute('value')).to.eventually.equal(bro.bb.email),
      //         expect(bro.findElement(assoc.register_email).getAttribute('disabled')).to.eventually.equal('true'),
      //         expect(bro.findElement(assoc.register_email_confirm).getAttribute('value')).to.eventually.equal(bro.bb.email),
      //         expect(bro.findElement(assoc.register_email_confirm).getAttribute('disabled')).to.eventually.equal('true'),
      //       ]);
      //     }).then(function() {
      //       // fill in user and pass (new account, gd.new_user)
      //       doc.steps(test, "Fill in the LOGIN username and password boxes with the proper values of the user created at" +
      //                 "the beginning of this test, and click the login button.");
      //       bro.findElement(assoc.login_username).sendKeys(gd.newUser.dataValues.username);
      //       bro.findElement(assoc.login_password).sendKeys(c4t.realpassword);
      //       return bro.findElement(assoc.login_button).click();
      //     }).then(function() {
      //       doc.steps(test, "Wait for the payment page to load.")
      //       return bro.wait(until.elementLocated(payment.header), 8000, 'ph payment.header');
      //     }).then(function() {
      //       return Promise.all([
      //         //are we on the payment page?  everything look correct?
      //         doc.expected(test, "Verify we are on the payment page.  Correct username should be displayed in the header and footer."),
      //         expect(bro.findElement(moo.header_username).getText()).to.eventually.equal(gd.newUser.dataValues.firstname + ' ' + gd.newUser.dataValues.lastname),
      //         expect(bro.findElement(moo.footer_username).getText()).to.eventually.equal(gd.newUser.dataValues.firstname + ' ' + gd.newUser.dataValues.lastname),
      //         doc.expected(test, "Payment header should be displayed."),
      //         doc.expected(test, "Full name of the course being purchased and its accurate price in USD should be displayed."),
      //         expect(bro.isElementPresent(payment.header)).to.eventually.equal(true),
      //         expect(bro.findElement(payment.purchase_name).getText()).to.eventually.match(new RegExp("$")),
      //         expect(bro.findElement(payment.purchase_name).getText()).to.eventually.match(new RegExp(gd.course.dataValues.fullname)),
      //         expect(bro.isElementPresent(payment.access_code_label)).to.eventually.equal(true),
      //         doc.expected(test, "The access code input box should be empty."),
      //         expect(bro.findElement(payment.access_code_input).getText()).to.eventually.equal(''),
      //         //TODO: verify the credit card label is /not/ there?
      //         //doc.expected(test, "The credit card payment header and zip code input box and form should not be displayed."),
      //         //expect(bro.isElementPresent(payment.credit_card_label)).to.eventually.equal(true),
      //       ]);
      //     }).then(function() {
      //       doc.steps(test, "Input a string known to not be a valid access code (e.g., 'BADBADNOTGOOD') and submit the form.");
      //       //give a bad access code, submit
      //       bro.findElement(payment.access_code_input).sendKeys('BADBADNOTGOOD');
      //       return bro.findElement(payment.access_code_submit).click();
      //     }).then(function() {
      //       //verify the invalid access code message
      //       return Promise.all([
      //         doc.expected(test, "You should still see a normal moodle page, with the correct headers and footers."),
      //         doc.expected(test, "You should also see an appropriate error message indicating that the access code used was invalid and not consumed."),
      //         expect(bro.findElement(moo.header_username).getText()).to.eventually.equal(gd.newUser.dataValues.firstname + ' ' + gd.newUser.dataValues.lastname),
      //         expect(bro.findElement(moo.footer_username).getText()).to.eventually.equal(gd.newUser.dataValues.firstname + ' ' + gd.newUser.dataValues.lastname),
      //         expect(bro.isElementPresent(payment.bad_access_code)).to.eventually.equal(true),
      //       ]);
      //     }).then(function() {
      //       //goto users moodle home page
      //       doc.steps(test, "Return to the new user's home page in Moodle.");
      //       return new wd.ActionSequence(bro).
      //         click(bro.findElement(moo.user_menu)).
      //         click(bro.findElement(moo.user_menu_home)).
      //         perform();
      //     }).then(function() {
      //       bro.wait(until.elementLocated(mhome.course_overview_content), 5000, "ph mhome.course_overview_content");
      //     }).then(function() {
      //       //verifying we were actually not enrolled in any course
      //       doc.expected(test, 'User should be enrolled in zero courses.');
      //       return expect(bro.findElement(mhome.course_overview_content).getText()).to.eventually.equal("No course information to show.");
      //     }).then(function() {
      //       //go back to blackboard
      //       doc.steps(test, 'Close the moodle browser window.');
      //       return bro.bb.jumpBase();
      //     }).then(function() {
      //       return bro.bb.logOut();
      //     }).then(function() {
      //       //go back through and click the same link again
      //       doc.steps(test, 'Repeat the earlier steps of logging in to Blackboard (as the same user), going to the same course, and clicking the same link.');
      //       return login_as_and_goto_course_and_content(bro, 'test1', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
      //     }).then(function() {
      //       doc.expected(test, 'Association should have been successful, and the login/register page will be skipped.');
      //       doc.expected(test, 'In the new window opened from the link in Blackboard, you should see the payment page exactly as earlier displayed.');
      //       return bro.wait(until.elementLocated(payment.header), 5000, 'ph payment.header');
      //     }).then(function() {
      //       // verifying the association happened, and we're whisked straight to the payment page, skipping the login page.
      //       return Promise.all([
      //         //are we on the payment page?  everything look correct?
      //         expect(bro.findElement(moo.header_username).getText()).to.eventually.equal(gd.newUser.dataValues.firstname + ' ' + gd.newUser.dataValues.lastname),
      //         expect(bro.findElement(moo.footer_username).getText()).to.eventually.equal(gd.newUser.dataValues.firstname + ' ' + gd.newUser.dataValues.lastname),
      //         expect(bro.isElementPresent(payment.header)).to.eventually.equal(true),
      //         expect(bro.findElement(payment.purchase_name).getText()).to.eventually.match(new RegExp("$")),
      //         expect(bro.findElement(payment.purchase_name).getText()).to.eventually.match(new RegExp(gd.course.dataValues.fullname)),
      //         expect(bro.isElementPresent(payment.access_code_label)).to.eventually.equal(true),
      //         expect(bro.findElement(payment.access_code_input).getText()).to.eventually.equal(''),
      //         //TODO: verify the credit card label is /not/ there?
      //         //doc.expected(test, "The credit card payment header and zip code input box and form should not be displayed."),
      //         //expect(bro.isElementPresent(payment.credit_card_label)).to.eventually.equal(true),
      //       ]);
      //     });
      // });
    });
  });
});
