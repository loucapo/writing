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
      dbControl.reset('gateway', 'mnv_gateway', './fixtures/sql_dumps/functional-gateway.sql'),
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

describe('When a user not existing on the TP ', function() {
  describe('attempts to register and enroll in a nonexistent course from Blackboard, ', function() {
    it('the registration and association happen correctly and the user is shown an appropriate error.', function() {
      var test = this;
      doc.title(test, "Nonexisting user paying for nonexistent course");
      return Promise.join(
        fixtures.templates('moodle.User', ['basic']),
        function(user, course, code) {
          gd.userData = user;
        }).then(function() {
          return login_as_and_goto_course_and_content(bro, 'test1', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
        }).then(function() {
          console.log('********');
          console.log(gd);
          return bro.wait(until.elementLocated(assoc.login_header), 5000, 'ph assoc.login_header');
        //})
        //.then(verify.vap([bro, assoc, gd]).bind(this))
        //.then(verify.vap(bro, assoc, gd, doc, expect, test))
        //.then(verifyAssociationPage_registerSection_populatedFullyByBlackboard)
        }).then(function() {
          //verify association page stuffs
          return Promise.all([
            // verify all the points on the association / login page
            expect(bro.findElement(assoc.register_username).getText()).to.eventually.equal(''),
            expect(bro.findElement(assoc.register_password).getText()).to.eventually.equal(''),
            expect(bro.isElementPresent(assoc.register_username_label)).to.eventually.be.true,
            expect(bro.isElementPresent(assoc.register_password_label)).to.eventually.be.true,
            expect(bro.isElementPresent(assoc.register_fields1)).to.eventually.be.true,
            expect(bro.findElement(assoc.register_city).getText()).to.eventually.equal(''),
            expect(bro.findElement(assoc.register_firstname).getAttribute('value')).to.eventually.equal(bro.bb.first),
            expect(bro.findElement(assoc.register_firstname).getAttribute('disabled')).to.eventually.equal('true'),
            expect(bro.findElement(assoc.register_lastname).getAttribute('value')).to.eventually.equal(bro.bb.last),
            expect(bro.findElement(assoc.register_lastname).getAttribute('disabled')).to.eventually.equal('true'),
            expect(bro.findElement(assoc.register_email).getAttribute('value')).to.eventually.equal(bro.bb.email),
            expect(bro.findElement(assoc.register_email).getAttribute('disabled')).to.eventually.equal('true'),
            expect(bro.findElement(assoc.register_email_confirm).getAttribute('value')).to.eventually.equal(bro.bb.email),
            expect(bro.findElement(assoc.register_email_confirm).getAttribute('disabled')).to.eventually.equal('true'),
          ]);
        })
      .then(function() {
          //login as new user
          bro.findElement(assoc.register_username).sendKeys(gd.userData.username);
          bro.findElement(assoc.register_password).sendKeys(c4t.realpassword);
          return bro.findElement(assoc.register_submit).click();
        }).then(function() {
          //verify no such course message
          return bro.wait(until.elementLocated(payment.error_header), 7500, 'ph payment.error_header');
        }).then(function() {
          return Promise.all([
            expect(bro.isElementPresent(payment.error_header)).to.eventually.equal(true),
            expect(bro.isElementPresent(payment.no_such_course)).to.eventually.equal(true),
          ]);
        }).then(function() {
          //go to users home page and verify no course
          return new wd.ActionSequence(bro).
            click(bro.findElement(moo.user_menu)).
            click(bro.findElement(moo.user_menu_home)).
            perform();
        }).then(function() {
          return bro.wait(until.elementLocated(mhome.course_overview_content), 5000, 'ph mhome.course_overview_content');
        }).then(function() {
          return expect(bro.findElement(mhome.course_overview_content).getText()).to.eventually.equal("No course information to show.");
        }).then(function() {
          //go back to blackboard and relaunch to verify the assoc happened
          return bro.bb.jumpBase();
        }).then(function() {
          return bro.bb.logOut();
        }).then(function() {
          //go back through and click the same link again
          return login_as_and_goto_course_and_content(bro, 'test1', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
        }).then(function() {
          //and now we should go straight to the 'no such course' on payment
          return bro.wait(until.elementLocated(payment.error_header), 5000, 'ph payment.error_header');
        }).then(function() {
          return Promise.all([
            expect(bro.findElement(moo.header_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last),
            expect(bro.findElement(moo.footer_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last),
            expect(bro.isElementPresent(payment.error_header)).to.eventually.equal(true),
            expect(bro.isElementPresent(payment.no_such_course)).to.eventually.equal(true),
          ]);
        });
    });
  });

  describe('attempts to associate to an existing course from Blackboard ', function() {
    describe('by paying with an invalid (already used) access code ', function() {
      it('the registration and association happen correctly, access to the course is denied, and the user is shown an appropriate error.', function() {
        var test = this;
        doc.title(test, "Nonexisting user paying for a course with an already used access code.");
      });
    });

    describe('by paying with an invalid (nonexisting) access code ', function() {
      it('the registration and association happen correctly, access to the course is denied, and the user is shown an appropriate error.', function() {
        var test = this;
        doc.title(test, "Nonexisting user paying for a course with a nonexisting access code.");
        return Promise.join(
          fixtures.templates('moodle.User', ['basic']),
          fixtures.writeTemplates('moodle.Course', ['basic']),
          function(user, course) {
            gd.newUser = user;
            gd.course = course;
          }).then(function() {
            return fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', gd.course.dataValues.id]);
          }).then(function(enr) {
            gd.enrolment = enr;
            return fixtures.writeTemplates('eco.Course', ['dynamicBooks'], ['codeOnly'], ['forCourse', gd.course.dataValues.id]);
          }).then(function(ecoC) {
            gd.ecoCourse = ecoC;
          }).then(function() {
            return login_as_and_goto_course_and_content(bro, 'test1', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
          }).then(function() {
            return bro.wait(until.elementLocated(assoc.login_header), 5000, 'ph assoc.login_header');
          }).then(function() {
            return Promise.all([
              // verify all the points on the association / login page
              expect(bro.findElement(assoc.register_username).getText()).to.eventually.equal(''),
              expect(bro.findElement(assoc.register_password).getText()).to.eventually.equal(''),
              expect(bro.isElementPresent(assoc.register_username_label)).to.eventually.be.true,
              expect(bro.isElementPresent(assoc.register_password_label)).to.eventually.be.true,
              expect(bro.isElementPresent(assoc.register_fields1)).to.eventually.be.true,
              expect(bro.findElement(assoc.register_city).getText()).to.eventually.equal(''),
            ]);
          }).then(function() {
            return Promise.all([
              expect(bro.findElement(assoc.register_firstname).getAttribute('value')).to.eventually.equal(bro.bb.first),
              expect(bro.findElement(assoc.register_firstname).getAttribute('disabled')).to.eventually.equal('true'),
              expect(bro.findElement(assoc.register_lastname).getAttribute('value')).to.eventually.equal(bro.bb.last),
              expect(bro.findElement(assoc.register_lastname).getAttribute('disabled')).to.eventually.equal('true'),
              expect(bro.findElement(assoc.register_email).getAttribute('value')).to.eventually.equal(bro.bb.email),
              expect(bro.findElement(assoc.register_email).getAttribute('disabled')).to.eventually.equal('true'),
              expect(bro.findElement(assoc.register_email_confirm).getAttribute('value')).to.eventually.equal(bro.bb.email),
              expect(bro.findElement(assoc.register_email_confirm).getAttribute('disabled')).to.eventually.equal('true'),
            ]);
          }).then(function() {
            bro.findElement(assoc.register_username).sendKeys(gd.newUser.username);
            bro.findElement(assoc.register_password).sendKeys(c4t.realpassword);
            return bro.findElement(assoc.register_submit).click();
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
          }).then(function() {
            //give a bad access code, submit
            bro.findElement(payment.access_code_input).sendKeys('BADBADNOTGOOD');
            return bro.findElement(payment.access_code_submit).click();
          }).then(function() {
            //verify the invalid access code message
            return Promise.all([
              expect(bro.findElement(moo.header_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last),
              expect(bro.findElement(moo.footer_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last),
              expect(bro.isElementPresent(payment.bad_access_code)).to.eventually.equal(true),
            ]);
          }).then(function() {
            //goto users moodle home page
            return new wd.ActionSequence(bro).
              click(bro.findElement(moo.user_menu)).
              click(bro.findElement(moo.user_menu_home)).
              perform();
          }).then(function() {
            return bro.wait(until.elementLocated(mhome.course_overview_content));
          }).then(function() {
            //verifying we were actually not enrolled in any course
            return expect(bro.findElement(mhome.course_overview_content).getText()).to.eventually.equal("No course information to show.");
          }).then(function() {
            //go back to blackboard
            return bro.bb.jumpBase();
          }).then(function() {
            return bro.bb.logOut();
          }).then(function() {
            //go back through and click the same link again
            return login_as_and_goto_course_and_content(bro, 'test1', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
          }).then(function() {
            return bro.wait(until.elementLocated(payment.header), 5000, 'ph payment.header');
          }).then(function() {
            // verifying the association happened, and we're whisked straight to the payment page, skipping the login page.
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
      });
    });

    describe('by paying with a valid access code ', function() {
      describe(' where Blackboard provides their name and email to the TP, ', function() {
        it('the registration and association happen correctly, and the user can access appropriate resources of the course.', function() {
          var test = this;
          doc.title(test, "Nonexisting user paying for a course with a valid (existing, unused) access code.");
          return Promise.join(
            fixtures.templates('moodle.User', ['basic']),
            fixtures.writeTemplates('moodle.Course', ['basic']),
            fixtures.writeTemplates('eco.AccessCode', ['basic']),
            function(user, course, code) {
              gd.newUser = user;
              gd.course = course;
              gd.access = code;
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
                expect(bro.findElement(assoc.register_username).getText()).to.eventually.equal(''),
                expect(bro.findElement(assoc.register_password).getText()).to.eventually.equal(''),
                expect(bro.isElementPresent(assoc.register_username_label)).to.eventually.be.true,
                expect(bro.isElementPresent(assoc.register_password_label)).to.eventually.be.true,
                expect(bro.isElementPresent(assoc.register_fields1)).to.eventually.be.true,
                expect(bro.findElement(assoc.register_city).getText()).to.eventually.equal(''),
              ]);
            }).then(function() {
              return Promise.all([
                expect(bro.findElement(assoc.register_firstname).getAttribute('value')).to.eventually.equal(bro.bb.first),
                expect(bro.findElement(assoc.register_firstname).getAttribute('disabled')).to.eventually.equal('true'),
                expect(bro.findElement(assoc.register_lastname).getAttribute('value')).to.eventually.equal(bro.bb.last),
                expect(bro.findElement(assoc.register_lastname).getAttribute('disabled')).to.eventually.equal('true'),
                expect(bro.findElement(assoc.register_email).getAttribute('value')).to.eventually.equal(bro.bb.email),
                expect(bro.findElement(assoc.register_email).getAttribute('disabled')).to.eventually.equal('true'),
                expect(bro.findElement(assoc.register_email_confirm).getAttribute('value')).to.eventually.equal(bro.bb.email),
                expect(bro.findElement(assoc.register_email_confirm).getAttribute('disabled')).to.eventually.equal('true'),
              ]);
            }).then(function() {
              bro.findElement(assoc.register_username).sendKeys(gd.newUser.username);
              bro.findElement(assoc.register_password).sendKeys(c4t.realpassword);
              return bro.findElement(assoc.register_submit).click();
            }).then(function() {
              return bro.wait(until.elementLocated(payment.header), 5000, 'ph payment.header');
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
            }).then(function() {
              //give a bad access code, submit
              bro.findElement(payment.access_code_input).sendKeys(gd.access.dataValues.access_code);
              return bro.findElement(payment.access_code_submit).click();
            }).then(function() {
              // test should continue to:
            }).then(function() {
              // verify looking at the course page
              expect(bro.findElement(moo.header_title).getText()).to.eventually.match(new RegExp(gd.course.dataValues.fullname));
              expect(bro.findElement(moo.breadcrumbs).getText()).to.eventually.match(new RegExp(gd.course.dataValues.shortname));
              expect(bro.findElement(moo.header_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last);
              expect(bro.findElement(moo.footer_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last);
            }).then(function() {
              //go to users home page and verify no course
              return new wd.ActionSequence(bro).
                click(bro.findElement(moo.user_menu)).
                click(bro.findElement(moo.user_menu_home)).
                perform();
            }).then(function() {
              return bro.wait(until.elementLocated(mhome.course_overview_content), 5000, 'ph mhome.course_overview_content');
            }).then(function() {
              return expect(bro.findElement(mhome.course_overview_content).getText()).to.eventually.match(new RegExp(gd.course.dataValues.fullname));
            }).then(function() {
              //go back to blackboard, and relaunch to verify association and enrolment
              return bro.bb.jumpBase();
            }).then(function() {
              return bro.bb.logOut();
            }).then(function() {
              //go back through and click the same link again
              return login_as_and_goto_course_and_content(bro, 'test1', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
            }).then(function() {
              // verify looking at the course page
              return Promise.all([
                expect(bro.findElement(moo.header_title).getText()).to.eventually.match(new RegExp(gd.course.dataValues.fullname)),
                expect(bro.findElement(moo.breadcrumbs).getText()).to.eventually.match(new RegExp(gd.course.dataValues.shortname)),
                expect(bro.findElement(moo.header_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last),
                expect(bro.findElement(moo.footer_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last),
              ]);
            });
        });
      });

      describe(' where Blackboard provides their name but not email to the TP, ', function() {
        it('the registration and association happen correctly, and the user can access appropriate resources of the course.', function() {
          var test = this;
          doc.title(test, "Nonexisting user buying existing course - Blackboard provides name but not email to TP.");
          return Promise.join(
            fixtures.templates('moodle.User', ['basic']),
            fixtures.writeTemplates('moodle.Course', ['basic']),
            fixtures.writeTemplates('eco.AccessCode', ['basic']),
            function(user, course, code) {
              gd.newUser = user;
              gd.course = course;
              gd.access = code;
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
              return login_as_and_goto_course_and_content(bro, 'test2', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
            }).then(function() {
              return bro.wait(until.elementLocated(assoc.login_header), 5000, 'ph assoc.login_header');
            }).then(function() {
              return Promise.all([
                // verify all the points on the association / login page
                expect(bro.findElement(assoc.register_username).getText()).to.eventually.equal(''),
                expect(bro.findElement(assoc.register_password).getText()).to.eventually.equal(''),
                expect(bro.isElementPresent(assoc.register_username_label)).to.eventually.be.true,
                expect(bro.isElementPresent(assoc.register_password_label)).to.eventually.be.true,
                expect(bro.isElementPresent(assoc.register_fields1)).to.eventually.be.true,
                expect(bro.findElement(assoc.register_city).getText()).to.eventually.equal(''),
              ]);
            }).then(function() {
              return Promise.all([
                expect(bro.findElement(assoc.register_firstname).getAttribute('value')).to.eventually.equal(bro.bb.first),
                expect(bro.findElement(assoc.register_firstname).getAttribute('disabled')).to.eventually.equal('true'),
                expect(bro.findElement(assoc.register_lastname).getAttribute('value')).to.eventually.equal(bro.bb.last),
                expect(bro.findElement(assoc.register_lastname).getAttribute('disabled')).to.eventually.equal('true'),
                expect(bro.findElement(assoc.register_email).getAttribute('value')).to.eventually.equal(''),
                expect(bro.findElement(assoc.register_email).getAttribute('disabled')).to.eventually.be.null,
                expect(bro.findElement(assoc.register_email_confirm).getAttribute('value')).to.eventually.equal(''),
                expect(bro.findElement(assoc.register_email_confirm).getAttribute('disabled')).to.eventually.be.null,
              ]);
            }).then(function() {
              bro.findElement(assoc.register_username).sendKeys(gd.newUser.username);
              bro.findElement(assoc.register_email).sendKeys(gd.newUser.email);
              bro.findElement(assoc.register_email_confirm).sendKeys(gd.newUser.email);
              bro.findElement(assoc.register_password).sendKeys(c4t.realpassword);
              return bro.findElement(assoc.register_submit).click();
            }).then(function() {
              return bro.wait(until.elementLocated(payment.header), 6000, 'ph payment.header');
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
            }).then(function() {
              //give an access code, submit
              bro.findElement(payment.access_code_input).sendKeys(gd.access.dataValues.access_code);
              return bro.findElement(payment.access_code_submit).click();
            }).then(function() {
              // test should continue to:
            }).then(function() {
              // verify looking at the course page
              expect(bro.findElement(moo.header_title).getText()).to.eventually.match(new RegExp(gd.course.dataValues.fullname));
              expect(bro.findElement(moo.breadcrumbs).getText()).to.eventually.match(new RegExp(gd.course.dataValues.shortname));
              expect(bro.findElement(moo.header_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last);
              expect(bro.findElement(moo.footer_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last);
            }).then(function() {
              //go to users home page and verify no course
              return new wd.ActionSequence(bro).
                click(bro.findElement(moo.user_menu)).
                click(bro.findElement(moo.user_menu_home)).
                perform();
            }).then(function() {
              return bro.wait(until.elementLocated(mhome.course_overview_content), 5000, 'ph mhome.course_overview_content');
            }).then(function() {
              return expect(bro.findElement(mhome.course_overview_content).getText()).to.eventually.match(new RegExp(gd.course.dataValues.fullname));
            }).then(function() {
              //go back to blackboard, and relaunch to verify association and enrolment
              return bro.bb.jumpBase();
            }).then(function() {
              return bro.bb.logOut();
            }).then(function() {
              //go back through and click the same link again
              return login_as_and_goto_course_and_content(bro, 'test2', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
            }).then(function() {
              // verify looking at the course page
              return Promise.all([
                expect(bro.findElement(moo.header_title).getText()).to.eventually.match(new RegExp(gd.course.dataValues.fullname)),
                expect(bro.findElement(moo.breadcrumbs).getText()).to.eventually.match(new RegExp(gd.course.dataValues.shortname)),
                expect(bro.findElement(moo.header_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last),
                expect(bro.findElement(moo.footer_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last),
              ]);
            });
        });
      });

      describe(' where Blackboard provides their name and an email already registered to a different user on the TP, to the TP, ', function() {
        it('after a warning and then providing a different email address, the registration and association happen correctly, and the user can access appropriate resources of the course.', function() {
          var test = this;
          doc.title(test, "Nonexisting user buying existing course - Blackboard provides name and an email already used by other user to TP.");
          return Promise.join(
            fixtures.templates('moodle.User', ['basic']),
            fixtures.writeTemplates('moodle.Course', ['basic']),
            fixtures.writeTemplates('eco.AccessCode', ['basic']),
            fixtures.writeTemplates('moodle.User', ['basic'], ['withEmail', Blackboard.users['test1'].email]),
            function(user, course, code, existingUser) {
              gd.userData = user;
              gd.course = course;
              gd.access = code;
              gd.existingUser = existingUser;
              return;
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
              return fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', gd.course.dataValues.id]);
            }).then(function(enr) {
              gd.enrolment = enr;
              return fixtures.writeTemplates('eco.Course', ['dynamicBooks'], ['codeOnly'], ['forCourse', gd.course.dataValues.id]);
            }).then(function(ecoC) {
              gd.ecoCourse = ecoC;
            }).then(function() {
              return login_as_and_goto_course_and_content(bro, 'test1', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
            }).then(function() {
              return bro.wait(until.elementLocated(assoc.login_header), 5000, 'ph assoc.login_header');
            }).then(function() {
              return Promise.join(
                // verify all the points on the association / login page
                expect(bro.findElement(assoc.register_username).getText()).to.eventually.equal(''),
                expect(bro.findElement(assoc.register_password).getText()).to.eventually.equal(''),
                expect(bro.isElementPresent(assoc.register_username_label)).to.eventually.be.true,
                expect(bro.isElementPresent(assoc.register_password_label)).to.eventually.be.true,
                expect(bro.isElementPresent(assoc.register_fields1)).to.eventually.be.true,
                expect(bro.findElement(assoc.register_city).getText()).to.eventually.equal(''),
                function() {});
            }).then(function() {
              return Promise.join(
                expect(bro.findElement(assoc.register_firstname).getAttribute('value')).to.eventually.equal(bro.bb.first),
                expect(bro.findElement(assoc.register_firstname).getAttribute('disabled')).to.eventually.equal('true'),
                expect(bro.findElement(assoc.register_lastname).getAttribute('value')).to.eventually.equal(bro.bb.last),
                expect(bro.findElement(assoc.register_lastname).getAttribute('disabled')).to.eventually.equal('true'),
                expect(bro.findElement(assoc.register_email).getAttribute('value')).to.eventually.equal(bro.bb.email),
                expect(bro.findElement(assoc.register_email).getAttribute('disabled')).to.eventually.equal('true'),
                expect(bro.findElement(assoc.register_email_confirm).getAttribute('value')).to.eventually.equal(bro.bb.email),
                expect(bro.findElement(assoc.register_email_confirm).getAttribute('disabled')).to.eventually.equal('true'),
                function() {});
            }).then(function() {
              return Promise.all([
                bro.findElement(assoc.register_username).sendKeys(gd.userData.username),
                bro.findElement(assoc.register_password).sendKeys(c4t.realpassword),
                bro.findElement(assoc.register_submit).click(),
              ]);
            }).then(function() {
              return bro.wait(until.elementLocated(assoc.error_flash_email), 2500, 'ph assoc.error_flash_email');
            }).then(function() {
              return expect(bro.findElement(assoc.error_flash_email).getText()).to.eventually.match(new RegExp("This email address is already registered."));
            }).then(function() {
              return Promise.all([
                bro.findElement(assoc.register_email).clear(),
                bro.findElement(assoc.register_email_confirm).clear(),
              ]);
            }).then(function() {
              return new wd.ActionSequence(bro).
                click(bro.findElement(assoc.register_email)).
                sendKeys(gd.userData.email).
                click(bro.findElement(assoc.register_email_confirm)).
                sendKeys(gd.userData.email).
                click(bro.findElement(assoc.register_submit)).
                perform();
            }).then(function() {
              return bro.wait(until.elementLocated(payment.header), 7000, 'ph payment.header');
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
            }).then(function() {
              //give an access code, submit
              bro.findElement(payment.access_code_input).sendKeys(gd.access.dataValues.access_code);
              return bro.findElement(payment.access_code_submit).click();
            }).then(function() {
              // verify looking at the course page
              expect(bro.findElement(moo.header_title).getText()).to.eventually.match(new RegExp(gd.course.dataValues.fullname));
              expect(bro.findElement(moo.breadcrumbs).getText()).to.eventually.match(new RegExp(gd.course.dataValues.shortname));
              expect(bro.findElement(moo.header_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last);
              expect(bro.findElement(moo.footer_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last);
            }).then(function() {
              //go to users home page and verify no course
              return new wd.ActionSequence(bro).
                click(bro.findElement(moo.user_menu)).
                click(bro.findElement(moo.user_menu_home)).
                perform();
            }).then(function() {
              return bro.wait(until.elementLocated(mhome.course_overview_content), 5000, 'ph mhome.course_overview_content');
            }).then(function() {
              return expect(bro.findElement(mhome.course_overview_content).getText()).to.eventually.match(new RegExp(gd.course.dataValues.fullname));
            }).then(function() {
              //go back to blackboard, and relaunch to verify association and enrolment
              return bro.bb.jumpBase();
            }).then(function() {
              return bro.bb.logOut();
            }).then(function() {
              //go back through and click the same link again
              return login_as_and_goto_course_and_content(bro, 'test1', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
            }).then(function() {
              // verify looking at the course page
              return Promise.all([
                expect(bro.findElement(moo.header_title).getText()).to.eventually.match(new RegExp(gd.course.dataValues.fullname)),
                expect(bro.findElement(moo.breadcrumbs).getText()).to.eventually.match(new RegExp(gd.course.dataValues.shortname)),
                expect(bro.findElement(moo.header_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last),
                expect(bro.findElement(moo.footer_username).getText()).to.eventually.equal(bro.bb.first + ' ' + bro.bb.last),
              ]);
            });
        });
      });
    });
  });
});
