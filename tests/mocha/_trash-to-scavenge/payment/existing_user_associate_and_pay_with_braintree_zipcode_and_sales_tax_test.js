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

var c4t = require('../config4test');

var Documenter = require('../helpers/testrail_documenter');
var doc = new Documenter(c4t);

var Promise = require('bluebird');
var _ = require('lodash');

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
var btpay   = po.page_objects.btpay;
var mhome   = po.page_objects.moodle_home;

//require('../helpers/moodle_verifications');

var bro = null;
var gd = {}; //Generated Data

//semi-arbitrary?  gets rid of pointless warnings, thus far.
process.setMaxListeners(50);

function verifyAssociationPage_registerSection_populatedFullyByBlackboard() {
  return Promise.all([
    doc.expected(test, 'Username and password fields (under register new account) should be empty'),
    expect(bro.findElement(self.assoc.register_username).getText()).to.eventually.equal(''),
    expect(bro.findElement(assoc.register_password).getText()).to.eventually.equal(''),
    doc.expected(gd.test, 'Username and password fields (under register new account) should have appropriate labels'),
    expect(bro.isElementPresent(assoc.register_username_label)).to.eventually.be.true,
    expect(bro.isElementPresent(assoc.register_password_label)).to.eventually.be.true,
    expect(bro.isElementPresent(assoc.register_fields1)).to.eventually.be.true,
    expect(bro.findElement(assoc.register_city).getText()).to.eventually.equal(''),
    doc.expected(gd.test, 'The firstname field should contain the firstname registered to the used blackboard user'),
    expect(bro.findElement(assoc.register_firstname).getAttribute('value')).to.eventually.equal(bro.bb.first),
    doc.expected(gd.test, 'The firstname field should be disabled, preventing the name from being changed'),
    expect(bro.findElement(assoc.register_firstname).getAttribute('disabled')).to.eventually.equal('true'),
    doc.expected(gd.test, 'The lastname field should contain the lastname registered to the used blackboard user'),
    expect(bro.findElement(assoc.register_lastname).getAttribute('value')).to.eventually.equal(bro.bb.last),
    doc.expected(gd.test, 'The lastname field should be disabled, preventing the name from being changed'),
    expect(bro.findElement(assoc.register_lastname).getAttribute('disabled')).to.eventually.equal('true'),
    doc.expected(gd.test, 'The email and email confirmation inputs should contain the email address registered to' +
                 ' the blackboard user and be disabled, preventing the email from being changed.'),
    expect(bro.findElement(assoc.register_email).getAttribute('value')).to.eventually.equal(bro.bb.email),
    expect(bro.findElement(assoc.register_email).getAttribute('disabled')).to.eventually.equal('true'),
    expect(bro.findElement(assoc.register_email_confirm).getAttribute('value')).to.eventually.equal(bro.bb.email),
    expect(bro.findElement(assoc.register_email_confirm).getAttribute('disabled')).to.eventually.equal('true'),
  ]);
}


before(function(done) {
  // reset dbs
  Promise.try(function() {
    return Promise.join(
      dbControl.reset('stemECO', 'eco', './fixtures/sql_dumps/stem-eco-current.sql'),
      dbControl.reset('dynamicBooks', 'moodle', './fixtures/sql_dumps/moodle-2.8-configured-and-with-plugin.sql'),
      dbControl.reset('gateway', 'mnv_gateway', './fixtures/sql_dumps/functional-gateway.sql'),
      function() {return;}); //dont care, no-op, just grouping the resets.
  }).delay(6000).then(function() {
    return dbControl.loadSQL('stemECO', './fixtures/sql_dumps/test-zipcodes.sql');
    //TODO: that's just a hacky number that won't even necessarily work in all environments.
    //  replace with polling to see if the moodle db is created (just created?  what about table contents?)
    //  before progressing.  So why do it?  bc sooo many things seem to not work... while we can delay
    //  attempting to write the data, can't seem to find a way to delay the model loading, which
    //  at least seems to be the problem.
    //TODO: implement actual logging with levels/tags, reenable a bunch of these type things
    //console.log('dbs reset');
    //done();
  }).then(function() {
    done();
  });
  // load zip code tables
  // create a course with x cost
});
//});

beforeEach(function(done) {
  gd = {};  //make sure we're not tracking mud in from the previous test
  Promise.try(function() {
    bro = new wd.Builder().withCapabilities(
      wd.Capabilities.chrome()).build();
    return bro.getWindowHandle();
  }).then(function() {
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

//TODO: file a bug: since we allow negative tax rates... instead of fixing those, how about
//  just preventing the total purchase price from over being less than the initial price.
//  or preventing the calculated tax from being negative.

describe('When a user already existing on the TP but not associated', function() {
  describe(' attempts to purchase a course after providing invalid zip code inputs', function() {
    xit(' an explanatory error message is shown and the user is prevented from being able to submit the form.', function() {
      var test = this;
      doc.title(test, "Existing user purchasing via BT entering invalid zip codes.");
    });
  });

  describe.only(' purchases a course after entering a zip code not listed individually or in any range in the tax tables', function() {
    it(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
      gd.test = this;
      var test = this;
      doc.title(test, "Existing user purchasing via BT entering valid zip codes not listed singly or as a range in STEMECO zipcode tables.");
      return Promise.join(
        doc.steps(test, "Create a basic user in the Moodle instance"),
        doc.steps(test, "Create a new basic course costing $50.79 that requires payment by braintree."),
        doc.steps(test, "Use 90001 as the test zip. (Should not correspond to any zip in the test tables.)"),
        fixtures.writeTemplates('moodle.User', ['basic']),
        fixtures.writeTemplates('moodle.Course', ['basic']),
        function(x, y, z, user, course) {
          gd.newUser = user;
          gd.course = course;
          gd.testZip = '90001';
          gd.courseCost = 59.79;
        }).then(function() {
          return Promise.join(
            fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', gd.course.dataValues.id]),
            fixtures.writeTemplates('moodle.Context', ['simpleCourse', gd.course.dataValues.id]),
            fixtures.writeTemplates('eco.Course', ['dynamicBooks'], ['btOnly'], ['forCourse', gd.course.dataValues.id], ['cost', gd.courseCost]),
            function(enr, context, ecoC) {
              gd.enrolment = enr;
              gd.ecoCourse = ecoC;
              return fixtures.upsert('moodle.Context', {id: context.dataValues.id, path: '/1/' + context.dataValues.id});
            });
        }).then(function() {
          doc.steps(test, "Login to blackboard with the test1 credentials (listed in the blackboard helper.)");
          doc.steps(test, "In blackboard go to the 'qa-stem-eco: qa stemeco course' and under content click the 'dynamicBooks/course/2 link'");
          return login_as_and_goto_course_and_content(bro, 'test1', 'qa-stem-eco: qa stemeco', 'dynamicBooks/course/2');
        }).then(function() {
          doc.expected(test, "A new tab should open, with focus.  You should be on the moodle association page, being asked to login or create a new account.");
          return bro.wait(until.elementLocated(assoc.login_header), 5000, 'ph assoc.login_header');
        }).then(function() {
          // fill in user and pass (new account, gd.new_user)
          doc.steps(test, "Fill in the LOGIN username and password boxes with the proper values of the user created at" +
                    "the beginning of this test, and click the login button.");
          bro.findElement(assoc.login_username).sendKeys(gd.newUser.dataValues.username);
          bro.findElement(assoc.login_password).sendKeys(c4t.realpassword);
          return bro.findElement(assoc.login_button).click();
        }).then(function() {
          doc.expected(test, "You should see the payment page");
          return bro.wait(until.elementLocated(payment.header), 8000, 'ph payment.header');
        }).then(function() {
          return bro.findElement(payment.zipcode).sendKeys(gd.testZip);
        }).then(function() {
          return bro.findElement(payment.enroll).click();
        }).then(function() {
          return Promise.all([
            doc.expected(test, "The correct price should be displayed, properly formatted."),
            doc.expected(test, "The correct tax ($0.00) should be displayed, properly formatted"),
            doc.expected(test, "The proper total, price + tax should be displayed, properly formatted"),
            expect(bro.findElement(btpay.calculated_price).getText()).to.eventually.equal("Price: $" + gd.courseCost),
            expect(bro.findElement(btpay.calculated_tax).getText()).to.eventually.equal("Price: $" + '0.00'),
            expect(bro.findElement(btpay.calculated_total).getText()).to.eventually.equal("Price: $" + gd.courseCost),
            // expect price
            // expect tax
            // expect total
          ]);
        }).then(function() {
          return Promise.all([
            bro.findElement(btpay.dropin_card).sendKeys('378282246310005'),
            bro.findElement(btpay.dropin_cvv).sendKeys('1234'),
            bro.findElement(btpay.dropin_expiration).sendKeys('222'),
            bro.findElement(btpay.dropin_postal_code).sendKeys('12345'),
          ]);
          // submit
        }).then(function() {
          // wait for success header
        }).then(function() {
          // expect things on success page
        }).then(function() {
          // click ok
        }).then(function() {
          // wait for course header
        }).then(function() {
          // verify shit on course page
        }).then(function() {
          // go back to bb and relaunch
        }).then(function() {
          // wait for course header
        }).then(function() {
          // verify shit on course page
        });
    });
  });

  describe(' purchases a course after entering a zip code in a zip-range, ', function() {
    describe(' with a non-zero-padded 4 digit zip when the tax tables are zero padded', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: enter 4 digit non-zero-padded zip when tax table ranges are 0-padded.");
        // 3
      });
    });

    describe(' with a non-zero-padded 2 digit zip when the tax tables are zero padded', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: enter 2 digit non-zero-padded zip when tax tables ranges are 0-padded.");
        // 3c
      });
    });

    describe(' with a zero-padded 4 digit zip when the tax tables are not zero padded', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: enter 0-padded 4 digit zip when tax tables ranges are not padded.");
        // 4
      });
    });

    describe(' with a zero-padded 2 digit zip when the tax tables are not zero padded', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: enter 0-padded 2 digit zip when tax tables are not padded.");
        // 4c
      });
    });

    describe(' listed as 0 tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code in a zip range with a tax of  '0'");
        // 5
      });
    });

    describe(' listed as 3.254 tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code in a zip range with a tax of  '3.254'");
        // 6
      });
    });

    describe(' listed as 117.76 tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code in a zip range with a tax of  '117.76'");
        // 7
      });
    });

    describe(' listed as -40.00 tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code in a zip range with a tax of  '-40.00'");
        // 8
      });
    });

    describe(' listed as .0625 tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code in a zip range with a tax of  '0.0625'");
        // 9
      });
    });

    describe(' listed as "FROG" tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code in a zip range with a tax of  'FROG'");
        // 10
      });
    });

    describe(' listed as NULL tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code in a zip range with a tax of  'NULL'");
        // 11
      });
    });

    describe(' listed as -0.04 tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code in a zip range with a tax of  '-0.04'");
        // 12
      });
    });
  });

  describe(' purchases a course after entering a zip code matching a single zip (non-range) , ', function() {
    describe(' with a non-zero-padded 4 digit zip when the tax tables are zero padded', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: enter 4 digit non-zero-padded zip when tax table zip is 0-padded.");
        // 3
      });
    });

    describe(' with a non-zero-padded 2 digit zip when the tax tables are zero padded', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: enter 2 digit non-zero-padded zip when tax table zip is 0-padded.");
        // 3c
      });
    });

    describe(' with a zero-padded 4 digit zip when the tax tables are not zero padded', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: enter 0-padded 4 digit zip when tax table zip is not padded.");
        // 4
      });
    });

    describe(' with a zero-padded 2 digit zip when the tax tables are not zero padded', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: enter 0-padded 2 digit zip when tax table zip is not padded.");
        // 4c
      });
    });

    describe(' listed as 0 tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code matching a zip with a tax of  '0'");
        // 5
      });
    });

    describe(' listed as 3.254 tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code matching a zip with a tax of  '3.254'");
        // 6
      });
    });

    describe(' listed as 117.76 tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code matching a zip with a tax of  '117.76'");
        // 7
      });
    });

    describe(' listed as -40.00 tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code matching a zip with a tax of  '-40.00'");
        // 8
      });
    });

    describe(' listed as .0625 tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code matching a zip with a tax of  '0.0625'");
        // 9
      });
    });

    describe(' listed as "FROG" tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code matching a zip with a tax of  'FROG'");
        // 10
      });
    });

    describe(' listed as NULL tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code matching a zip with a tax of  'NULL'");
        // 11
      });
    });

    describe(' listed as -0.04 tax', function() {
      xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
        var test = this;
        doc.title(test, "Buying with BT: use a zip code matching a zip with a tax of  '-0.04'");
        // 12
      });
    });
  });
});


//   describe(' purchases a course after entering a known zip code', function() {
//     describe(' listed as 0 tax', function() {
//       xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
//         //
//       });
//     });
//     describe(' listed as 3.254 tax', function() {
//       xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
//         //
//       });
//     });
//     describe(' listed as 117.76 tax', function() {
//       xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
//         //
//       });
//     });
//     describe(' listed as -40.00 tax', function() {
//       xit(' the transaction should successfully complete, charging and recording the proper tax amounts.', function() {
//         //
//       });
//     });
//   });
// });
