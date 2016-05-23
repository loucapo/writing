/* global require,
   before, after, beforeEach, afterEach,
   xit, it, describe,
   console, setTimeout */

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
    pants.bro = new wd.Builder().withCapabilities(
      wd.Capabilities.chrome()).build();
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

describe('When a user already existing on the TP but not associated ', function() {
  describe('attempts to associate to an existing course from Blackboard ', function() {
    describe('by paying with a valid access code ', function() {
      it('the association happens correctly, and the user can access appropriate resources of the course.', function() {
        pants.blackboard = new Blackboard(pants.bro, 'qa0000');
        return Promise.join(
          fixtures.writeTemplates('moodle.User', ['basic']),
          function(user) {
            pants.gd.newUser = user;
            return;
          })
          .then(function() {
            pants.gd.newTag = chance.city();
            return pants.makeTags([{tag_name: pants.gd.newTag, business_unit_id: 2}])
          })
          .then(pants.makeABasicCourseWithEnrolment.bind(pants, {
            course    : {gdv : 'course', val : [['basic']]},
            enrolment : {gdv : 'enrolment'},
            ecoCourse : {gdv : 'ecoCourse'}
          }))
          .then(function() {
            return pants.tagEcoCourse({
              tag_name: pants.gd.newTag,
              course_id: pants.gd.ecoCourse.id,
              primary: true
            });
          })
          .then(pants.makeABasicAccessCode.bind(pants, {
            accesscode : {gdv : 'accessCode', val : [['basic']]}
          }))
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
            return pants.loginToMoodle(pants.gd.newUser.dataValues.username, cfg.BUUT.lms.realpassword); })
          .then(function() {
            return pants.bro.wait(until.elementLocated(pants.po.payment.header), 8000, 'ph payment.header');
          }).then(pants.validatePaymentPageGeneric.bind(pants))
          .then(pants.validatePaymentPageAccessCode.bind(pants))
          .then(pants.validatePaymentPageNoBraintree.bind(pants)) //TODO: not implemented?
          .then(function() {
            console.log(pants.gd.accessCode.dataValues.access_code);
            return pants.payWithAccessCode(pants.gd.accessCode.dataValues.access_code);
          }).then(function() {
            return pants.bro.wait(until.elementLocated(pants.po.receipt.header), 5000, 'ph payment.header');
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
            log.progress(' INDEED');
            return pants.validateUserHomeContainsCourse.bind(pants, pants.gd.course)();
          }).then(function() {
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

    describe('by paying with an invalid (already spent) access code ', function() {
      it.only('the association happens correctly, access to the course is denied, and the user is shown an appropriate error.', function() {
        pants.blackboard = new Blackboard(pants.bro, 'qa0000');
        return Promise.join(
          fixtures.writeTemplates('moodle.User', ['basic']),
          function(user) {
            pants.gd.newUser = user;
            return;
          })
          .then(function() {
            var tagname = chance.city();
            return pants.makeTag({gdv : 'tag', val : [['basic', {tag_name: tagname}]]});
          })
          .then(pants.makeABasicCourseWithEnrolment.bind(pants, {
            course    : {gdv : 'course', val : [['basic']]},
            enrolment : {gdv : 'enrolment'},
            ecoCourse : {gdv : 'ecoCourse'}
          }))
          .then(function() {
            return pants.tagEcoCourse({
              tag: pants.gd.tag,
              course_id: pants.gd.ecoCourse.id,
              primary: true
            });
          })
          .then(function() {
            return pants.makeABasicAccessCode({
              accesscode : {gdv : 'accessCode', val : [['withTagID', pants.gd.tag.id]]}})
          })
          .then(function() {
            return pants.markAccessCodeUsed(pants.gd.accessCode.id);
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
            return pants.loginToMoodle(pants.gd.newUser.dataValues.username, cfg.BUUT.lms.realpassword); })
          .then(function() {
            return pants.bro.wait(until.elementLocated(pants.po.payment.header), 8000, 'ph payment.header');
          })
          .then(pants.validatePaymentPageGeneric.bind(pants))
          .then(pants.validatePaymentPageAccessCode.bind(pants))
          .then(pants.validatePaymentPageNoBraintree.bind(pants)) //TODO: not implemented?
          .then(function() {
            console.log(pants.gd.accessCode.dataValues.access_code);
            return pants.payWithAccessCode(pants.gd.accessCode.dataValues.access_code);
          }).then(function() {
            //TODO: don't hardcode, use cfg.BUUT
            return pants.bro.wait(until.elementLocated(pants.po.payment.bad_access_code), 5000, 'Waiting for bad AC message');
          })
          .then(pants.gotoMoodleUserHome.bind(pants))
          .then(function() {
            return pants.validateUserHomeContainsCourse(false);
          }).then(function() {
            log.progress('Verifying that relaunching the course from Blackboard skips the association phase and goes directly to requesting payment');
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
            return pants.bro.wait(until.elementLocated(pants.po.payment.header), 8000, 'ph payment.header');
          });
      });
    });

    describe('by paying with an invalid (nonexisting) access code ', function() {
      it('the association happens correctly, access to the course is denied, and the user is shown an appropriate error.', function() {
        pants.blackboard = new Blackboard(pants.bro, 'qa0000');
        return Promise.join(
          fixtures.writeTemplates('moodle.User', ['basic']),
          function(user) {
            pants.gd.newUser = user;
            return;
          })
          .then(function() {
            pants.gd.newTag = chance.city();
            return pants.makeTags([{tag_name: pants.gd.newTag, business_unit_id: 2}]);
          })
          .then(pants.makeABasicCourseWithEnrolment.bind(pants, {
            course    : {gdv : 'course', val : [['basic']]},
            enrolment : {gdv : 'enrolment'},
            ecoCourse : {gdv : 'ecoCourse'}
          }))
          .then(function() {
            return pants.tagEcoCourse({
              tag_name: pants.gd.newTag,
              course_id: pants.gd.ecoCourse.id,
              primary: true
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
            return pants.loginToMoodle(pants.gd.newUser.dataValues.username, cfg.BUUT.lms.realpassword); })
          .then(function() {
            return pants.bro.wait(until.elementLocated(pants.po.payment.header), 8000, 'ph payment.header');
          })
          .then(pants.validatePaymentPageGeneric.bind(pants))
          .then(pants.validatePaymentPageAccessCode.bind(pants))
          .then(pants.validatePaymentPageNoBraintree.bind(pants)) //TODO: not implemented?
          .then(function() {
            return pants.payWithAccessCode(chance.guid());
          }).then(function() {
            //TODO: don't hardcode, use cfg.BUUT
            return pants.bro.wait(until.elementLocated(pants.po.payment.bad_access_code), 5000, 'Waiting for bad AC message');
          })
          .then(pants.gotoMoodleUserHome.bind(pants))
          .then(function() {
            return pants.validateUserHomeContainsCourse(false);
          }).then(function() {
            log.progress('Verifying that relaunching the course from Blackboard skips the association phase and goes directly to requesting payment');
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
            return pants.bro.wait(until.elementLocated(pants.po.payment.header), 8000, 'ph payment.header');
          });
      });
    });
  });

    describe('attempts to enroll in a course not existing in moodle or stemeco from Blackboard, ', function() {
    it('the association happens correctly and the user is shown an appropriate error.', function() {
      pants.blackboard = new Blackboard(pants.bro, 'qa0000');
      return Promise.join(
        fixtures.writeTemplates('moodle.User', ['basic']),
        function(user) {
          pants.gd.newUser = user;
          return;
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
          return pants.loginToMoodle(pants.gd.newUser.dataValues.username, cfg.BUUT.lms.realpassword); })
        .then(function() {
          return pants.bro.wait(until.elementLocated(pants.po.payment.no_such_course), 8000, 'Waiting for no such course error.');
        })
        .then(pants.gotoMoodleUserHome.bind(pants))
        .then(function() {
          return pants.validateUserHomeContainsCourse(null);
        }).then(function() {
          log.progress('Verifying that relaunching the course from Blackboard skips the association phase and goes directly to no such course');
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
          return pants.bro.wait(until.elementLocated(pants.po.payment.no_such_course), 8000, 'Waiting for no such course error.');
        });
    });
  });
});
