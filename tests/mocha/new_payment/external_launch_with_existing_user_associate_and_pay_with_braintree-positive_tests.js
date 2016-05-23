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
    describe('and attempts to pay via Braintree (POSITIVE) ', function() {
      describe('for a course that only allows payment via Braintree ', function() {
        describe('when the user has no preexisting matching credit ', function() {
          it.only('the association happens correctly, and the user can access appropriate resources of the course.', function() {
            pants.blackboard = new Blackboard(pants.bro, 'qa0000');
            pants.gd = {};
            return Promise.join(
              fixtures.writeTemplates('moodle.User', ['basic']),
              function(user) {
                pants.gd.newUser = user;
                return;
              }).then(function() {
                pants.gd.single_price = chance.floating({min: 0, max: 1000, fixed: 2});
                pants.gd.zip = chance.zip();
                return;
              }).then(function() {
                pants.gd.newTag = chance.city();
                return pants.makeTags([{tag_name: pants.gd.newTag, business_unit_id: 2}]);
              }).then(function() {
                return pants.makeABasicCourseWithEnrolment({
                  course    : {gdv : 'course', val : [['basic']]},
                  enrolment : {gdv : 'enrolment'},
                  ecoCourse : {gdv : 'ecoCourse', val : [['bu_barebones'], ['btOnly'], ['single_price', pants.gd.single_price]]},
                });
              }).then(function() {
                return pants.tagEcoCourse({
                  tag_name: pants.gd.newTag,
                  course_id: pants.gd.ecoCourse.id,
                  primary: true
                });
              }).then(function() {
                return pants.calcTotalPrice(cfg.BUUT.name, pants.gd.zip, pants.gd.single_price);
              }).then(function(amounts) {
                Object.assign(pants.gd, amounts);
                return;
              }).then(pants.blackboard.loginAndGoToContent.bind(pants.blackboard, {
                username: 'qa_gs_0000',
                password: cfg.BUUT.lms.realpassword,
                course: pants.iClickerCourse() + ': ' + pants.iClickerCourse(),
                //TODO: unhardcode link
                link: 'type:course/id:2'
              })).then(function() {
                return pants.bro.wait(until.titleIs('New account'), 8000, 'Page title should be \'New Account\''); })
              .then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.association_page.login_header),
                                      5000, 'ph association_page.login_header');
              }).then(pants.validateAssociationPage.bind(pants))
              .then(function() {
                return pants.loginToMoodle(pants.gd.newUser.dataValues.username, cfg.BUUT.lms.realpassword);
              }).then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.payment.bt_options_prompt(pants.gd.course.fullname)),
                                      8000, 'Timed out waiting to see bt purchase options header.');
              }).then(function() {
                // FIXME: that price for the course tho
                return pants.validatePaymentPageBraintreeOptions(pants.gd.course.fullname, 'single', pants.gd.single_price);
              }).then(function() {
                return pants.enterPaymentOptions(null, pants.gd.zip);
              }).then(function() {
                return pants.bro.wait(until.elementLocated(pants.po.bt_purchase.header),
                                      5000, 'ph braintree purchase header');
              }).then(function() {
                return pants.validateBTPurchasePage(pants.gd.course.fullname, pants.gd.single_price,
                                                    pants.gd.zip, pants.gd.tax, pants.gd.total);
              }).then(function() {
                return pants.populateAndSubmitBTPurchase();
              }).then(function() {
                // return pants.bro.wait(until.elementLocated(pants.po.bt_purchase.header),
                // 5000, 'ph braintree purchase header');
                // FIXME: need to scan for something more specific than the above
                return pants.bro.sleep(3500);
              }).then(function() {
                //TODO: don't hardcode, use cfg.BUUT
                return pants.validatePaymentReceipt({
                  method: 'braintree',
                  name: pants.gd.course.dataValues.fullname,
                  bu: 'barebones',
                  tax: pants.gd.tax,
                  total: pants.gd.total,
                  price: pants.gd.price
                });
              }).then(function() {
                log.progress('Clicking continue on the payment receipt page')
                return pants.bro.findElement(pants.po.receipt.continue_button).click();
              }).then(function() {
                log.progress('Verifying we were forwarded to the main page for the appropriate course');
                return pants.bro.wait(until.elementLocated(pants.po.moodle_course.header(pants.gd.course.dataValues.fullname)),
                                      8000, 'Timed out waiting to see course header');
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
                return pants.bro.wait(until.elementLocated(pants.po.moodle_course.header(pants.gd.course.dataValues.fullname)),
                                      8000, 'Timed out waiting to see course header');
              }).then(pants.validateCourseHome.bind(pants));
          });
        });
        describe('when the user has preexisting matching credit ', function() {
          it('the association happens correctly, and the user can access appropriate resources of the course.');
        });
      });
      describe('for a course that only allows payment with Access Codes or Braintree', function() {
        describe('when the user has no preexisting matching credit ', function() {
          it('the association happens correctly, and the user can access appropriate resources of the course.');
        });
        describe('when the user has preexisting matching credit ', function() {
          it('the association happens correctly, and the user can access appropriate resources of the course.');
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
