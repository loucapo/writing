var wd    = require('selenium-webdriver');
var until = wd.until;

var chai   = require('chai');
var expect = chai.expect;
var cap    = require('chai-as-promised');
chai.use(cap);

var Chance = require('chance');
var chance = new Chance();

var Promise = require('bluebird');
var fs      = require('fs');
var yaml    = require('js-yaml');

var cfg = require('../../../config/config');
var log = require('../../../helpers/logger')(cfg);

// var Documenter = require('../helpers/testrail_documenter');
// var doc = new Documenter(c4t);

var Blackboard = require('../../../helpers/blackboard2');
var dbControl  = require('../../../data/db_control');
var fixtures   = require('../../../data/fixtures');
var scenarios  = yaml.safeLoad(fs.readFileSync(__dirname + '/../../../data/scenarios.yaml', 'utf8'));

//the way it's currently built, just requiring the helper extends webdriver, no need to assign.  acceptable?
require('../../../helpers/webdriver');

//semi-arbitrary?  gets rid of pointless warnings, thus far.
process.setMaxListeners(50);

var Pants = require('../../../helpers/pants');
var pants = {};

before(function(done) {
  pants = new Pants();
  done();
});

beforeEach(function() {
  return Promise.try(function() {
    var capabilities = {
      'browser' : 'chrome',
      'chromeOptions' : {
        'args' : ['--disable-popup-blocking']
      }
    };
    pants.bro = new wd.Builder().
      withCapabilities(capabilities).
      forBrowser('chrome').
      build();
    return pants.bro.getWindowHandle();
  }).then(function() {
    return database_setup();
  });
});

function database_setup(scenario) {
  return Promise.join(
    dbControl.reset(cfg.env.ecoapi.db, scenarios.default.eco),
    dbControl.reset(cfg.BUUT.lmsdb, scenarios.default.moodle),
    function() {
      if (cfg.name === 'dev') {
        return dbControl.reset(cfg.env.gateway.db, scenarios.default.gateway);
      } else {
        //TODO: replace with the proper logger
        console.log('Not running in dev env, so not resetting the gateway database');
      }
      return;
    });
}

function gateway_disassociate(bu, user) {
  return;
}

function mass_gw_disassociate() {
  return;
}

//function database_teardown()

afterEach(function() {
  return Promise.try(function() {
    if (cfg.name != 'dev') {
      return mass_gw_disassociate();
      //clean up any gateway associations
    }
  }).then(function() {
    if (Boolean(cfg.leave_browsers_open_on_exit) === false) {
      //TODO: needs to be changed for multiple browsers?
      return pants.bro.quit();
    } else { return; }
  });
});

// after(function(done) {
//   done();
// });

describe('When a user arrives via LTI launch ', function() {
  describe('and already has an account on the LMS ', function() {
    describe('and attempts to pay with an Access Code (POSITIVE) ', function() {
      describe('for a course that only allows payment with Access Code ', function() {
        describe('when the user has no preexisting matching credit ', function() {
          it('the association happens correctly, and the user can access appropriate resources of the course.', function() {
            pants.blackboard = new Blackboard(pants.bro, 'qa0000');
            pants.gd = {};
            return Promise.join(
              fixtures.writeTemplates('moodle.User', ['basic']),
              function(user) {
                pants.gd.newUser = user;
                return;
              }).then(function() {
                pants.gd.newTag = chance.city();
                return pants.makeTags([{tag_name: pants.gd.newTag, business_unit_id: 2}]);
              }).then(pants.makeABasicCourseWithEnrolment.bind(pants, {
                course    : {gdv : 'course', val : [['basic']]},
                enrolment : {gdv : 'enrolment'},
                ecoCourse : {gdv : 'ecoCourse', val : [['bu_barebones'], ['codeOnly']]}
              })).then(function() {
                return pants.tagEcoCourse({
                  tag_name: pants.gd.newTag,
                  course_id: pants.gd.ecoCourse.id,
                  primary: true
                });
              }).then(function() {
                return pants.makeAccessCode({gdv : 'accessCode',
                                             tag_name : pants.gd.newTag});
              }).then(function() {
                return pants.tagAccessCode({
                  tag_name: pants.gd.newTag,
                  ac_id: pants.gd.accessCode.id
                });
              }).then(pants.blackboard.loginAndGoToContent.bind(pants.blackboard, {
                username: 'qa_gs_0000',
                password: cfg.BUUT.lms.realpassword,
                course: pants.iClickerCourse() + ': ' + pants.iClickerCourse(),
                //TODO: unhardcode link
                link: 'type:course/id:2'
              })).then(function() {
                return pants.bro.wait(until.titleIs('New account'), 8000, 'Page title should be \'New Account\''); })
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.association_page.login_header), 5000, 'ph association_page.login_header'); })
              .then(pants.validateAssociationPage.bind(pants))
              .then(function() {
                return pants.loginToMoodle(pants.gd.newUser.dataValues.username, cfg.BUUT.lms.realpassword); })
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.payment.ac_entry_header), 8000, 'payment.ac_entry_header');
              }).then(function() {
                return pants.validatePaymentPageAccessCode(pants.gd.course.dataValues.fullname);
              }).then(function() {
                return pants.payWithAccessCode(pants.gd.accessCode.access_code);
              }).then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.receipt.header), 5000, 'ph receipt.header');
              }).then(function() {
                //TODO: don't hardcode, use cfg.BUUT
                return pants.validatePaymentReceipt({method: 'access_code', name: pants.gd.course.dataValues.fullname, bu: 'barebones'});
              }).then(function() {
                log.progress('Clicking continue on the payment receipt page')
                return pants.bro.findElement(pants.po.receipt.continue_button).click();
              }).then(function() {
                log.progress('Verifying we were forwarded to the main page for the appropriate course');
                return pants.bro.wait(until.elementLocated(pants.po.moodle_course.header(pants.gd.course.dataValues.fullname)), 8000, 'Timed out waiting to see course header');
              }).then(pants.validateCourseHome.bind(pants))
              .then(pants.gotoMoodleUserHome.bind(pants))
              .then(function() {
                log.progress('Verifying that relaunching the course from Blackboard skips the association phase and goes directly to the now-enrolled-in course');
                return;
              }).then(pants.blackboard.jumpBase.bind(pants.blackboard))
              .then(pants.blackboard.logOut.bind(pants.blackboard))
              .then(pants.blackboard.loginAndGoToContent.bind(pants.blackboard, {
                username: 'qa_gs_0000',
                password: cfg.BUUT.lms.realpassword,
                course: pants.iClickerCourse() + ': ' + pants.iClickerCourse(),
                //TODO: unhardcode link
                link: 'type:course/id:2'
              })).then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.moodle_course.header(pants.gd.course.dataValues.fullname)), 8000, 'Timed out waiting to see course header');
              }).then(pants.validateCourseHome.bind(pants));
          });
        });

        describe('when the user has preexisting matching credit ', function() {
          it('the association happens correctly, and the user can access appropriate resources of the course.', function() {
            pants.blackboard = new Blackboard(pants.bro, 'qa0000');
            pants.gd = {};
            return Promise.join(
              fixtures.writeTemplates('moodle.User', ['basic']),
              function(user) {
                pants.gd.newUser = user.dataValues;
                return;
              }).then(function() {
                pants.gd.newTag = chance.city();
                return pants.makeTags([{tag_name: pants.gd.newTag, business_unit_id: 2}]);
              }).then(pants.makeABasicCourseWithEnrolment.bind(pants, {
                course    : {gdv : 'course', val : [['basic']]},
                enrolment : {gdv : 'enrolment'},
                ecoCourse : {gdv : 'ecoCourse', val : [['bu_barebones'], ['codeOnly']]}
              }))
              .then(function() {
                return pants.tagEcoCourse({
                  tag_name: pants.gd.newTag,
                  course_id: pants.gd.ecoCourse.id,
                  primary: true
                });
              })
              .then(function() {
                return pants.makeAccessCode({gdv      : 'accessCode',
                                             tag_name : pants.gd.newTag,
                                             user_id  : pants.gd.newUser.id});
              })
              .then(function() {
                return pants.tagAccessCode({
                  tag_name: pants.gd.newTag,
                  ac_id: pants.gd.accessCode.id
                });
              })
              .then(pants.blackboard.loginAndGoToContent.bind(pants.blackboard, {
                username: 'qa_gs_0000',
                password: cfg.BUUT.lms.realpassword,
                course: pants.iClickerCourse() + ': ' + pants.iClickerCourse(),
                //TODO: unhardcode link
                link: 'type:course/id:2'
              }))
              .then(function() {
                return pants.bro.wait(until.titleIs('New account'), 8000, 'Page title should be \'New Account\''); })
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.association_page.login_header), 5000, 'ph association_page.login_header'); })
              .then(pants.validateAssociationPage.bind(pants))
              .then(function() {
                return pants.loginToMoodle(pants.gd.newUser.username, cfg.BUUT.lms.realpassword); })
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.payment.existing_credit_prompt(pants.gd.course.fullname)), 8000, 'payment.existing_credit_prompt');
              })
              .then(pants.selectOtherPaymentOptions.bind(pants))
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.payment.payment_options_prompt(pants.gd.course.fullname)), 8000, 'payment.payment_options_prompt');
              })
              .then(pants.chooseToPayWith.bind(pants, 'access_code'))
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.payment.ac_entry_header), 8000, 'payment.ac_entry_header');
              })
              .then(function() {
                //console.log(pants.po.payment.header);
                return pants.bro.wait(until.elementLocated(pants.po.payment.header), 8000, 'ph payment.header');
              }).then(pants.validatePaymentPageGeneric.bind(pants))
              .then(pants.validatePaymentPageAccessCode.bind(pants))
              .then(pants.validatePaymentPageNoBraintree.bind(pants)) //TODO: not implemented?
              .then(function() {
                //console.log(pants.gd.accessCode.dataValues.access_code);
                return pants.payWithAccessCode(pants.gd.accessCode.dataValues.access_code);
              }).then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.receipt.header), 5000, 'ph receipt.header');
              }).then(function() {
                //TODO: don't hardcode, use cfg.BUUT
                return pants.validatePaymentReceipt({method: 'access_code', name: pants.gd.course.dataValues.fullname, bu: 'barebones'});
              }).then(function() {
                log.progress('Clicking continue on the payment receipt page')
                return pants.bro.findElement(pants.po.receipt.continue_button).click();
              }).then(function() {
                log.progress('Verifying we were forwarded to the main page for the appropriate course');
                return pants.bro.wait(until.elementLocated(pants.po.moodle_course.header(pants.gd.course.dataValues.fullname)), 8000, 'Timed out waiting to see course header');
              }).then(pants.validateCourseHome.bind(pants))
              .then(pants.gotoMoodleUserHome.bind(pants))
            // moodle is shitty and the course often takes an unknown time or reason to show up here.
            // doesn't really test anything unique or special for us that isn't duplicated later, so omitting.
            // .then(function() {
            //   return pants.validateUserHomeContainsCourse(pants.gd.course); })
              .then(function() {
                log.progress('Verifying that relaunching the course from Blackboard skips the association phase and goes directly to the now-enrolled-in course');
                return;
              })
              .then(pants.blackboard.jumpBase.bind(pants.blackboard))
              .then(pants.blackboard.logOut.bind(pants.blackboard))
              .then(pants.blackboard.loginAndGoToContent.bind(pants.blackboard, {
                username: 'qa_gs_0000',
                password: cfg.BUUT.lms.realpassword,
                course: pants.iClickerCourse() + ': ' + pants.iClickerCourse(),
                //TODO: unhardcode link
                link: 'type:course/id:2'
              }))
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.moodle_course.header(pants.gd.course.dataValues.fullname)), 8000, 'Timed out waiting to see course header');
              }).then(pants.validateCourseHome.bind(pants));
          });
        });
      });
      describe('for a course that only allows payment with Access Codes or Braintree', function() {
        describe('when the user has no preexisting matching credit ', function() {
          it('the association happens correctly, and the user can access appropriate resources of the course.', function() {
            pants.blackboard = new Blackboard(pants.bro, 'qa0000');
            pants.gd = {};
            return Promise.join(
              fixtures.writeTemplates('moodle.User', ['basic']),
              function(user) {
                pants.gd.newUser = user;
                return;
              }).then(function() {
                pants.gd.newTag = chance.city();
                return pants.makeTags([{tag_name: pants.gd.newTag, business_unit_id: 2}]);
              }).then(function() {
                return pants.makeABasicCourseWithEnrolment({
                  course    : {gdv : 'course', val : [['basic']]},
                  enrolment : {gdv : 'enrolment'},
                  ecoCourse : {gdv : 'ecoCourse', val : [['bt_and_ac'], ['bu_barebones']]},
                });
              }).then(function() {
                return pants.tagEcoCourse({
                  tag_name: pants.gd.newTag,
                  course_id: pants.gd.ecoCourse.id,
                  primary: true
                });
              }).then(function() {
                return pants.makeAccessCode({gdv : 'accessCode',
                                             tag_name : pants.gd.newTag});
              }).then(function() {
                return pants.tagAccessCode({
                  tag_name: pants.gd.newTag,
                  ac_id: pants.gd.accessCode.id
                });
              }).then(pants.blackboard.loginAndGoToContent.bind(pants.blackboard, {
                username: 'qa_gs_0000',
                password: cfg.BUUT.lms.realpassword,
                course: pants.iClickerCourse() + ': ' + pants.iClickerCourse(),
                //TODO: unhardcode link
                link: 'type:course/id:2'
              })).then(function() {
                return pants.bro.wait(until.titleIs('New account'), 8000, 'Page title should be \'New Account\'');
              }).then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.association_page.login_header), 5000, 'ph association_page.login_header'); })
              .then(pants.validateAssociationPage.bind(pants))
              .then(function() {
                return pants.loginToMoodle(pants.gd.newUser.dataValues.username, cfg.BUUT.lms.realpassword); })
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.payment.payment_options_prompt(pants.gd.course.dataValues.fullname)), 8000, 'payment.payment_options_prompt(coursename)');
              }).then(pants.chooseToPayWith.bind(pants, 'access_code'))
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.payment.ac_entry_header), 8000, 'payment.ac_entry_header');
              }).then(function() {
                return pants.validatePaymentPageAccessCode(pants.gd.course.fullname);
              }).then(function() {
                return pants.payWithAccessCode(pants.gd.accessCode.access_code);
              }).then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.receipt.header), 5000, 'ph receipt.header');
              }).then(function() {
                //TODO: don't hardcode, use cfg.BUUT
                return pants.validatePaymentReceipt({method: 'access_code', name: pants.gd.course.dataValues.fullname, bu: 'barebones'});
              }).then(function() {
                log.progress('Clicking continue on the payment receipt page')
                return pants.bro.findElement(pants.po.receipt.continue_button).click();
              }).then(function() {
                log.progress('Verifying we were forwarded to the main page for the appropriate course');
                return pants.bro.wait(until.elementLocated(pants.po.moodle_course.header(pants.gd.course.dataValues.fullname)), 8000, 'Timed out waiting to see course header');
              }).then(pants.validateCourseHome.bind(pants))
              .then(pants.gotoMoodleUserHome.bind(pants))
              .then(function() {
                log.progress('Verifying that relaunching the course from Blackboard skips the association phase and goes directly to the now-enrolled-in course');
                return;
              })
              .then(pants.blackboard.jumpBase.bind(pants.blackboard))
              .then(pants.blackboard.logOut.bind(pants.blackboard))
              .then(pants.blackboard.loginAndGoToContent.bind(pants.blackboard, {
                username: 'qa_gs_0000',
                password: cfg.BUUT.lms.realpassword,
                course: pants.iClickerCourse() + ': ' + pants.iClickerCourse(),
                //TODO: unhardcode link
                link: 'type:course/id:2'
              }))
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.moodle_course.header(pants.gd.course.dataValues.fullname)), 8000, 'Timed out waiting to see course header');
              }).then(pants.validateCourseHome.bind(pants));
          });
        });

        describe('when the user has preexisting matching credit ', function() {
          it('the association happens correctly, and the user can access appropriate resources of the course.', function() {
            pants.blackboard = new Blackboard(pants.bro, 'qa0000');
            pants.gd = {};
            return Promise.join(
              fixtures.writeTemplates('moodle.User', ['basic']),
              function(user) {
                pants.gd.newUser = user.dataValues;
                return;
              }).then(function() {
                pants.gd.newTag = chance.city();
                return pants.makeTags([{tag_name: pants.gd.newTag, business_unit_id: 2}]);
              }).then(pants.makeABasicCourseWithEnrolment.bind(pants, {
                course    : {gdv : 'course', val : [['basic']]},
                enrolment : {gdv : 'enrolment'},
                ecoCourse : {gdv : 'ecoCourse', val : [['bu_barebones'], ['bt_and_ac']]}
              })).then(function() {
                return pants.tagEcoCourse({
                  tag_name: pants.gd.newTag,
                  course_id: pants.gd.ecoCourse.id,
                  primary: true
                });
              }).then(function() {
                return pants.makeAccessCode({gdv      : 'accessCode',
                                             tag_name : pants.gd.newTag,
                                             user_id  : pants.gd.newUser.id});
              }).then(function() {
                return pants.tagAccessCode({
                  tag_name: pants.gd.newTag,
                  ac_id: pants.gd.accessCode.id
                });
              }).then(pants.blackboard.loginAndGoToContent.bind(pants.blackboard, {
                username: 'qa_gs_0000',
                password: cfg.BUUT.lms.realpassword,
                course: pants.iClickerCourse() + ': ' + pants.iClickerCourse(),
                //TODO: unhardcode link
                link: 'type:course/id:2'
              })).then(function() {
                return pants.bro.wait(until.titleIs('New account'), 8000, 'Page title should be \'New Account\'');
              }).then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.association_page.login_header), 5000, 'ph association_page.login_header');
              }).then(pants.validateAssociationPage.bind(pants))
              .then(function() {
                return pants.loginToMoodle(pants.gd.newUser.username, cfg.BUUT.lms.realpassword);
              }).then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.payment.existing_credit_prompt(pants.gd.course.fullname)), 8000, 'payment.existing_credit_prompt');
              }).then(pants.selectOtherPaymentOptions.bind(pants))
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.payment.payment_options_prompt(pants.gd.course.fullname)), 8000, 'payment.payment_options_prompt');
                // TODO: also validate the CC pay button is here?  and the existing credit button?
              }).then(pants.chooseToPayWith.bind(pants, 'access_code'))
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.payment.ac_entry_header), 8000, 'payment.ac_entry_header');
              }).then(function() {
                return pants.validatePaymentPageAccessCode(pants.gd.course.fullname);
              }).then(function() {
                return pants.payWithAccessCode(pants.gd.accessCode.access_code);
              }).then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.receipt.header), 5000, 'ph receipt.header');
              }).then(function() {
                //TODO: don't hardcode, use cfg.BUUT
                return pants.validatePaymentReceipt({method: 'access_code', name: pants.gd.course.dataValues.fullname, bu: 'barebones'});
              }).then(function() {
                log.progress('Clicking continue on the payment receipt page')
                return pants.bro.findElement(pants.po.receipt.continue_button).click();
              }).then(function() {
                log.progress('Verifying we were forwarded to the main page for the appropriate course');
                return pants.bro.wait(until.elementLocated(pants.po.moodle_course.header(pants.gd.course.dataValues.fullname)), 8000, 'Timed out waiting to see course header');
              }).then(pants.validateCourseHome.bind(pants))
              .then(pants.gotoMoodleUserHome.bind(pants))
            // moodle is shitty and the course often takes an unknown time or reason to show up here.
            // doesn't really test anything unique or special for us that isn't duplicated later, so omitting.
            // .then(function() {
            //   return pants.validateUserHomeContainsCourse(pants.gd.course); })
              .then(function() {
                log.progress('Verifying that relaunching the course from Blackboard skips the association phase and goes directly to the now-enrolled-in course');
                return;
              })
              .then(pants.blackboard.jumpBase.bind(pants.blackboard))
              .then(pants.blackboard.logOut.bind(pants.blackboard))
              .then(pants.blackboard.loginAndGoToContent.bind(pants.blackboard, {
                username: 'qa_gs_0000',
                password: cfg.BUUT.lms.realpassword,
                course: pants.iClickerCourse() + ': ' + pants.iClickerCourse(),
                //TODO: unhardcode link
                link: 'type:course/id:2'
              }))
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.moodle_course.header(pants.gd.course.dataValues.fullname)), 8000, 'Timed out waiting to see course header');
              }).then(pants.validateCourseHome.bind(pants));
          });
        });
      });
      describe('for a course that requires enrollment keys', function() {
        describe('when the user has no preexisting matching credit ', function() {
          it('the association happens correctly, and the user can access appropriate resources of the course.');
        });
        describe('when the user has preexisting matching credit ', function() {
          it('the association happens correctly, and the user can access appropriate resources of the course.');
        });
      });
    });
  });
});
