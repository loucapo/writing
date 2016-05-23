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

var phantom = require('phantomjs-server');

function database_setup(scenario) {
  return;
}

before(function() {
  // // // pants = new Pants();
  return Promise.try(function() {
    // @todo : specify browser choice somewhere else, probably in config.
    // of course, this can wait until phantom is actually working for us.
    var browser = 'chrome';
    // var browser = 'phantom';
    if (browser === 'chrome') {
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
    } else if (browser === 'phantom') {
      phantom.start();
      pants.bro = new wd.Builder()
        .usingServer(phantom.address())
        .withCapabilities({'browserName' : 'phantomjs'})
        .build();
    } else {
      throw 'Unrecognized browser';
    }
    return pants.bro.getWindowHandle();
  }).then(function() {
    return database_setup();
  });
});

function addStep(test, steps) {
  steps.unshift(test.setup);
  if (test.hasOwnProperty('parent')) {
    pants.addStep(test.parent, steps);
  } else {
    return steps;
  }
  return steps; //should really never get here?
}

function runSetup(f) {
  var steps = pants.addStep(f, []);
  steps = steps.filter(function(i) { return i !== undefined});
  return steps.reduce(function(prev, curr, i) {
    return prev.then(curr);
  }, Promise.resolve());
}

describe('When a user is going to purchase via Braintree', function() {
  var self = this;

  describe('a course that allows purchase only via Braintree', function() {
    var self = this;
    this.setup =

    describe('that has no groups (enrollment keys)', function() {
      var self = this;

      describe('and the user has an existing moodle account', function() {
        var self = this;

        describe('and the user has no matching credit', function() {
          var self = this;

          describe('and initiates the course purchase via external LTI launch (iclicker.blackboard.com)', function() {
            var self = this;
            before(function() { return runSetup(self); });
            it('should do whatever i guess', function() {
            });
          });
        });
        describe('and the user has matching credit', function() {
          var self = this;

          describe('and initiates the course purchase via external LTI launch (iclicker.blackboard.com)', function() {
            var self = this;
            before(function() { return runSetup(self); });
            it('should do another whatever i guess', function() {
            });
          });
        });
      });
    });
  });
  describe('a course that allows purchase via Braintree or AccessCode' , function() {
    //
  });
});

// describe('When a user arrives via LTI launch ', function() {
//   describe('and does not have an account on the LMS ', function() {
//     describe('and attempts to pay via Braintree ', function() {
//       it(' ');
//     });
//     describe('and attempts to pay via Access Code ', function() {
//       it(' ');
//     });
//     describe('and attempts to pay via existing credit ', function() {
//       it(' ');
//     });
//   });
// });

// FULL INTEGRATION TESTS FOR PREEXISTING CREDIT / MULTI PURCHASE
// since we're using access code fixtures for all the other tests, we should have a couple that do not mock up the credit,
// but actually purchase an original course, have the ecosystem natively generate the credits, and continue to enroll in the
// following courses that should accept said credit.
// Also note that multipurchase is not addressed in any of the other current payment tests, so full verification of those
// prompts during payment and the receipt is also necessary.
//
// Since there's nothing really new to the test (it's primary purpose is to verify that the full payment regression, which is using mocks
// is not giving false positives), we'll let this suffice with 2:
// ltilaunch, buy with accesscode
// coursepicker, buy with braintree
// each should buy like a 4 or 5 multicourse, let the first one generate real credits, and then immediately go spend those on the other
// corresponding courses.

// TAGGING TESTS

// TRASH INPUT TESTS
// invalid AC (trash input ui tests)
// zip code trash input tests
// enrollment key trash input ui test
