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

var dbControl  = require('../../../data/db_control');
var fixtures   = require('../../../data/fixtures');
var scenarios  = yaml.safeLoad(fs.readFileSync(__dirname + '/../../../data/scenarios.yaml', 'utf8'));

//the way it's currently built, just requiring the helper extends webdriver, no need to assign.  acceptable?
require('../../../helpers/webdriver');

//semi-arbitrary?  gets rid of pointless warnings, thus far.
process.setMaxListeners(50);

var Pants = require('../../../helpers/pants');
var pants = {};

before(function() {
  pants = new Pants();
  return Promise.try(function() {
    return pants.freshenBrowser();
  }).then(function(x) {
    return database_setup();
    // }).then(function() {
    //   return process.exit();\
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
  return;
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

// function addStep(test, steps) {
//   steps.unshift(test.setup);
//   if (test.hasOwnProperty('parent')) {
//     addStep(test.parent, steps);
//   } else {
//     return steps;
//   }
//   return steps; //should really never get here?
// }

// function runSetup(f) {
//   var steps = addStep(f, []);
//   steps = steps.filter(function(i) { return i !== undefined});
//   return steps.reduce(function(prev, curr, i) {
//     return prev.then(curr);
//   }, Promise.resolve());
// }

describe('When a user has no previous credits or purchases ', function() {
  pants.gd = {};
  this.setup = function(fn) {
    return Promise.try(function() {
      log.progress('Spawning a new browser');
      return pants.freshenBrowser();
    }).then(function() {
      log.progress('Creating a new moodle user');
      pants.gd = {}; // generated data
      return fixtures.writeTemplates('moodle.User', ['basic']);
    }).then(function(user) {
      pants.gd.newUser = user.dataValues;
      return;
    }).then(function(x) {
      pants.gd.single_price = chance.floating({min: 0, max: 1000, fixed: 2});
      pants.gd.zip = chance.zip();

      return;
    }).then(function(x) {
      return pants.createInstitution(chance.first());
    }).then(function(uni) {
      pants.gd.institution = uni.dataValues;
      pants.gd.newTag = chance.city();
      return pants.makeTags([{tag_name: pants.gd.newTag, business_unit_id: 2}]);
    }).then(function(x) {
      log.progress('Creating a basic course in moodle and eco accepting access codes only');
      return pants.makeABasicCourseWithEnrolment({
        course      : {gdv : 'course', val : [['basic']]},
        enrolment   : {gdv : 'enrolment'},
        ecoCourse   : {gdv : 'ecoCourse', val : [['bu_barebones'], ['bt_and_ac'], ['single_price', pants.gd.single_price]]},
        institution : pants.gd.institution
      });
    }).then(function(x) {
      return pants.tagEcoCourse({
        tag_name: pants.gd.newTag,
        course_id: pants.gd.ecoCourse.id,
        primary: true
      });
    }).then(function() {
      return pants.makeAccessCode({
        gdv      : 'accessCode',
        tag_name : pants.gd.newTag });
    }).then(function() {
      return pants.calcTotalPrice(cfg.BUUT.name, pants.gd.zip, pants.gd.single_price);
    }).then(function(amounts) {
      Object.assign(pants.gd, amounts);
      return;
    }).then(function() {
      return pants.jumpto('login');
    }).then(function() {
      return pants.waitToFind(pants.po.login.header, 'Waited for login page to load');
    }).then(function() {
        return pants.loginToMoodleAs(pants.gd.newUser.username);
    }).then(function() {
      return pants.waitToFind(pants.po.moodle_common.footer_username, 'Waited for home page to load');
    }).then(function() {
      return pants.waitToFind(pants.po.blocks.course_catalog_link, 'Waited for Course Catalog block to load');
    }).then(function() {
      return pants.gotoCourseCatalog();
    }).then(function() {
      return pants.waitToFind(pants.po.instpicker.header, 'Waited for institution picker header to load');
    }).then(function() {
        return pants.pickInstitution(pants.gd.institution);
      }).then(function() {
        return pants.validateCourseSaleListing({
          courses : [pants.gd.course],
          institution : pants.gd.institution
        });
      }).then(function() {
        return pants.coursePickerSelectCourse(pants.gd.course.id);
      });
  };

  describe('and purchases a single_course with a credit card ', function() {
    this.setup = function() {
      return Promise.try(function() {
        return pants.waitToFind(pants.po.payment.payment_options_prompt(pants.gd.course.dataValues.fullname),
                                'Waited for Payment options page to load');
      }).then(pants.chooseToPayWith.bind(pants, 'braintree'))
        .then(function() {
          return pants.waitToFind(pants.po.payment.bt_options_prompt(pants.gd.course.fullname),
                                  'Timed out waiting to see bt purchase options header.');
        }).then(function() {
          return pants.validatePaymentPageBraintreeOptions(pants.gd.course.fullname, 'single', pants.gd.single_price);
        }).then(function() {
          return pants.enterPaymentOptions(null, pants.gd.zip);
        }).then(pants.waitToFind(pants.po.bt_purchase.header, 'Waited to see the braintree purchasing header'))
        .then(function() {
          return pants.validateBTPurchasePage(pants.gd.course.fullname, pants.gd.single_price,
                                              pants.gd.zip, pants.gd.tax, pants.gd.total);
        }).then(function() {
          return pants.populateAndSubmitBTPurchase();
        }).then(function() {
          // FIXME: why is waitToFind failing here?  what (?multiples?) should we be looking for?
          return pants.bro.sleep(3500);
        }).then(function() {
          return pants.getTXidFromReceipt();
        }).then(function(txid) {
          pants.gd.txid = txid;
          return;
        }).then(function() {
          //TODO: don't hardcode, use cfg.BUUT
          return pants.validatePaymentReceipt({
            method: 'braintree',
            txid: pants.gd.txid,
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
        .then(pants.gotoMoodleUserHome.bind(pants));
    };

    describe('and views their transaction history ', function() {
      var self = this;
      this.setup = function() {
        return Promise.try(function() {
          return pants.waitToFind(pants.po.moodle_common.footer_username);
        }).then(function() {
          return pants.gotoMoodleUserProfile();
        }).then(function() {
          return pants.waitToFind(pants.po.moodle_common.footer_username);
        });
      };

      before(function() { return pants.runSetup(self)});

      it('should show no existing credit', function() {
        return expect(pants.bro.isElementPresent(pants.po.txblk.credit_unavail))
          .to.eventually.be.true;
      });

      it('should not show existing credit', function() {
        return expect(pants.bro.isElementPresent(pants.po.txblk.credit_avail))
          .to.eventually.be.false;
      });

      it('should show the credits available header', function() {
        return expect(pants.bro.isElementPresent(pants.po.txblk.credits_header))
          .to.eventually.be.true;
      });

      it('should show one and only one total transaction', function() {
        return expect(pants.bro.findElements(pants.po.txblk.all_txs)
                      .then(function(els) { return els.length; }))
          .to.eventually.equal(1);
      });

      it('should show zero credit transactions', function() {
        return expect(pants.bro.findElements(pants.po.txblk.credit_txs)
                      .then(function(els) { return els.length; }))
          .to.eventually.equal(0);
      });

      it('should show zero access code transactions', function() {
        return expect(pants.bro.findElements(pants.po.txblk.ac_txs)
                      .then(function(els) { return els.length; }))
          .to.eventually.equal(0);
      });

      it('should show one and only one credit card transaction', function() {
        return expect(pants.bro.findElements(pants.po.txblk.cc_txs)
                      .then(function(els) { return els.length; }))
          .to.eventually.equal(1);
      });
      it('should show one and only one course with attached transactions', function() {
        return expect(pants.bro.findElements(pants.po.txblk.all_txs)
                      .then(function(els) { return els.length; }))
          .to.eventually.equal(1);
      });

      // @todo: this is not as easy as it may seem.  we can verify that we're loading the icon sheet,
      // and even that the css is pointing to the 'correct' background-position, but if the icon sheet
      // changes, we're just giving a false positive.  leaving it pending, should be done manually for now.
      it('the braintree entry should display the correct icon');

      it('the braintree entry should display the correct transaction ID', function() {
        return expect(pants.bro.findElement(pants.po.txblk.txid_for_course(pants.gd.course.dataValues.id)).getText())
          .to.eventually.equal(pants.gd.txid);
      });

      it('the braintree entry should display the correct date of the transaction');

      it('the braintree entry should display the correct total charged', function() {
        // console.log(Object.getOwnPropertyNames(pants.gd));
        return expect(pants.bro.findElement(pants.po.txblk.total_for_course(pants.gd.course.dataValues.id)).getText())
          .to.eventually.equal('$' + pants.gd.total);
      });
      it('should show the correct course name as a link', function() {
        return expect(pants.bro.findElement(pants.po.txblk.course_name(pants.gd.course.dataValues.id)).getText())
          .to.eventually.equal(pants.gd.course.fullname);
      });

      it('and the course link should redirect to the proper page', function() {
        return Promise.try(function() {
          return pants.bro.findElement(pants.po.txblk.course_link(pants.gd.course.dataValues.id)).click();
        }).then(function() {
          // wait - which _basically_ is a verify you're on the course page, but could be better.
          return pants.waitToFind(pants.po.moodle_course.header(pants.gd.course.dataValues.fullname),
                                 'Waited to verify tx hist link took us to the proper course page');
        }).then(function() {
          // go back
          return pants.bro.navigate().back();
        });
      });
    });
  });

  describe('and purchases a single_course with an access code ', function() {
    var self = this;
    this.setup = function() {
      return Promise.try(function() {
        return pants.waitToFind(pants.po.payment.payment_options_prompt(pants.gd.course.dataValues.fullname),
                                'Waited for Payment options page to load');
      }).then(pants.chooseToPayWith.bind(pants, 'access_code'))
        .then(pants.waitToFind.bind(pants, pants.po.payment.ac_entry_header),
              'Waited to find Access Code payment - entry header')
        //.then(pants.validatePaymentPageGeneric.bind(pants))
        //.then(pants.validatePaymentPageAccessCode.bind(pants))
        //.then(pants.validatePaymentPageNoBraintree.bind(pants)) //TODO: not implemented?
        .then(function() {
          return pants.payWithAccessCode(pants.gd.accessCode.access_code);
        }).then(function() {
          return pants.waitToFind(pants.po.receipt.ac_header,
                                  'Waited to find the receipt header');
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
    };

    describe('and views their transaction history ', function() {
      var self = this;
      this.setup = function() {
        return Promise.try(function() {
          return pants.waitToFind(pants.po.moodle_common.footer_username);
        }).then(function() {
          return pants.gotoMoodleUserProfile();
        }).then(function() {
          return pants.waitToFind(pants.po.moodle_common.footer_username);
        });
      };
      pants.bro

      before(function() { return pants.runSetup(self)});
      //before(function() { return runSetup(self); });

      it('should show no existing credit'); //, function() {
      // @todo: fix pending
      // expect(pants.isElementPresent(pants.po.txblk.credit_unavail))
      //   .to.eventually.be.true;
      // });

      it('should show the credits available header', function() {
        return expect(pants.bro.isElementPresent(pants.po.txblk.credits_header))
          .to.eventually.be.true;
      });

      it('should show one and only one total transaction', function() {
        return expect(pants.bro.findElements(pants.po.txblk.all_txs)
                      .then(function(els) { return els.length; }))
          .to.eventually.equal(1);
      });

      it('should show zero credit transactions', function() {
        return expect(pants.bro.findElements(pants.po.txblk.credit_txs)
                      .then(function(els) { return els.length; }))
          .to.eventually.equal(0);
      });

      it('should show one and only one access code transaction', function() {
        return expect(pants.bro.findElements(pants.po.txblk.ac_txs)
                      .then(function(els) { return els.length; }))
          .to.eventually.equal(1);
      });

      it('should show zero credit card transactions', function() {
        return expect(pants.bro.findElements(pants.po.txblk.cc_txs)
                      .then(function(els) { return els.length; }))
          .to.eventually.equal(0);
      });
      it('should show one and only one course with attached transactions');
      it('should show the correct course name as a link');
      it('and the course link should redirect to the proper page');
      it('the access code entry should display the correct icon');
      it('the access code entry should display the access code');
      it('the access code entry should display the correct date of the transaction');
    });
  });
});

  // describe('When a user has purchased 2 courses once each with braintree, access-codes, and existing-credit ', function() {
  //   // full db reset
  //   // create courses and users for scenario 1
  //   // 2 courses, buy each one way, unenroll both, repeat for all 3 purchase types.
  //   describe('and has no other credit ', function() {
  //     describe('and that user views the transaction history block on their own profile page ', function() {
  //       // drive to their page
  //       it('each course link should go to the proper course.');
  //       it('');
  //     });
  //     describe('and an admin views the transaction history block on that user\'s profile page ', function(){
  //       // drive to their page
  //       it('each course link should go to the correct course.');
  //       it('there should be 6 and only 6 total links');
  //       it('each existing-credit entry should display the correct icon');
  //       it('each existing-credit entry should UHHHH');
  //       it('each braintree entry should display the correct icon');
  //       it('each braintree entry should display the correct transaction ID');
  //       it('each braintree entry should display the correct total charged');
  //       it('each course should have its associated transactions displayed in order of most to least recent');
  //       it('all courses should be displayed sorted by comparison of their own most recent transaction, most to least recent')
  //       // NULL date_used makes an access_code a credit to be used
  //       // NULL batch_id makes an access_code spent a credit spent
  //     });
  //     describe('and a different student attempts to view the transaction history on the first user\'s profile page', function() {
  //       // drive to their page
  //       it('each course link should go to the proper course.');
  //       it('');
  //     });
  //   });
  // });


  // test as student
  // test as admin
  // suspend the student
  // test as student
  // test as admin
  // delete the student
  // test as student
  // test as admin
