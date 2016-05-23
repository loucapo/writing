/* global require,
   beforeEach, afterEach, xit, it, describe,
   console, setTimeout, Promise */
// the 4 branches to pull to are sel-162, sel-162, rc7, r55

var wd = require('selenium-webdriver');
var until = wd.until;

var chai = require('chai');
var expect = chai.expect;
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

//TODO: file a bug: since we allow negative tax rates... instead of fixing those, how about
//  just preventing the total purchase price from over being less than the initial price.
//  or preventing the calculated tax from being negative.

describe('When a user already existing on the TP but not associated', function() {
  describe(' attempts to purchase a problem-free course with a credit card', function() {
    describe(' with no problems', function() {
      xit('xxx', function() {
        var test = this;
        doc.title(this, "Existing user buying a valid course with a valid credit card.");
        //
      });
    });
    //TODO: add test cases for charging 0, negative, and $0.99

    describe(' declined with processor response set to amount', function() {
      xit('xxx', function() {
        var test = this;
        doc.title(this, "Existing user buying a valid course with a credit card declined - processor response set to TX amount.");
        //
      });
    });
    describe(' declined with decline code set to amount', function() {
      xit('xxx', function() {
        var test = this;
        doc.title(this, "Existing user buying a valid course with a credit card declined - decline code set to TX amount.");
        //
      });
    });

    describe(' declined because of a fraud warning', function() {
      xit('xxx', function() {
        var test = this;
        doc.title(this, "Existing user buying a valid course with a credit card declined due to fraud warning.");
        //
      });
    });
  });

  describe(' attempts to purchase a course with a PayPal account', function() {
    describe(' ?? paypal settlement declined', function() {
      xit('xxx', function() {
        var test = this;
        doc.title(test, "Existing user buying a valid course with PayPal  - settlement declined.");
        //
      });
    });
    describe(' ?? paypal settlement pending', function() {
      xit('xxx', function() {
        var test = this;
        doc.title(test, "Existing user buying a valid course with PayPal  - settlement pending.");
        //
      });
    });
  });
});
