/*global console, module, expect, require */

/**
 * @fileOverview
 * @author <a href="mailto:gabriel.wilkins@saplinglearning.com">Gabriel Wilkins</a>
 * @version 0.0.7
 */

var cfg     = require('../config/config');
var _       = require('lodash');
var wd      = require('selenium-webdriver');
var until   = wd.until;
var Promise = require('bluebird');
//var phantom = require('phantomjs-server');

var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var cap = require('chai-as-promised');
chai.use(cap);

var Chance = require('chance');
var chance = new Chance();
var _ = require('lodash');

var po = require('../helpers/page_objects');
// these are here for easy shorthand within the scope of this file.
// po is also exposed in the pants 'constructor' so the page objects don't have to be reloaded in every test as well.
// it's a tradeoff that's probably worthwhile, speaking for legibility's sake.
// @todo : automate this stupid stupid mapping
var assoc   = po.association_page; //ugh
var moo     = po.moodle_common;
var payment = po.payment;
var myhome  = po.moodle_myhome;
var receipt = po.receipt;
var course  = po.moodle_course;
var payment_options = po.payment_options;
var bt_purchase     = po.bt_purchase;
var login      = po.login;
var blocks     = po.blocks;
var instpicker = po.instpicker;

var Pants = function() {
  this.fixtures = require('../data/fixtures');
  this.gd = {};
  this.po = po;
};

var log = require('../helpers/logger')(cfg);

Pants.prototype.printgd = function(str) {
  console.log(str);
  console.log(this.gd);
  console.log(str);
  return;
};

/**
 * Actually, just for jsdoc, which doesn't list methods
 * if there isn't a parent class.  Don't use.
 * @todo Refactor pants so it actually does use this?
 * @constructor
 */
function Pants() {}

Pants.prototype.runSetup = function(f) {
  var steps = this.addStep(f, []);
  steps = steps.filter(function(i) { return i !== undefined});
  return steps.reduce(function(prev, curr, i) {
    return prev.then(curr);
  }, Promise.resolve());
};

Pants.prototype.addStep = function(test, steps) {
  steps.unshift(test.setup);
  if (test.hasOwnProperty('parent')) {
    this.addStep(test.parent, steps);
  } else {
    return steps;
  }
  return steps; //should really never get here?
};

/**
 * If pants has a browser currently open, closes it.
 * Either way creates a new one and assigns it to this.bro
 */
Pants.prototype.freshenBrowser = function(){
  var self = this;
  // @todo : specify browser choice somewhere else, probably in config.
  // of course, this can wait until phantom is actually working for us.
  var browser_type = 'chrome';
  var browser = null;

  // if a browser exists, kill it.
  if ((typeof self.bro !== 'undefined') && (typeof self.bro.quit == 'function')) {
    self.bro.quit();
  }
  Promise.try(function() {
    if (browser_type === 'chrome') {
      var capabilities = {
        'browser' : 'chrome',
        'chromeOptions' : {
          'args' : ['--disable-popup-blocking']
        }
      };
      browser = new wd.Builder().
        withCapabilities(capabilities).
        forBrowser('chrome').
        build();
    } else if (browser_type === 'phantom') {
      phantom.start();
      browser = new wd.Builder()
        .usingServer(phantom.address())
        .withCapabilities({'browserName' : 'phantomjs'})
        .build();
    } else {
      throw 'Attempted to create an unrecognized browser type';
    }
    return browser;
  }).then(function(bro) {
    self.bro = bro;
    return;
  });
  return;
};

/**
* Directs the browser to go to the LMS baseurl of the current business unit
* (indicated by cfg.BUUT.lms.baseurl)
**/
Pants.prototype.gotoMoodleHome = function() {
  var self = this;
  return self.bro.get(cfg.BUUT.lms.baseurl);
};

/**
 * Creates a course in ECO and Moodle (for the BUUT)<br/>
 * Automatically generates the necessary Moodle enrollment.
 * @param {Object} gendata
 * @param {Object} gendata.course
 * @param {String} gendata.course.gdv          The variable in pants.gd to populate with the returned course
 * @param {String} gendata.course.value        The options to pass to the Moodle course template during creation
 * @param {Object} gendata.enrolment
 * @param {String} gendata.enrolment.gdv       The variable in pants.gd to populate with the returned enrolment
 * @param {String} gendata.enrolment.value     The options to pass to the Moodle enrolment template during creation
 * @param {Object} gendata.ecoCourse
 * @param {String} gendata.ecoCourse.gdv       The variable in pants.gd to populate with the returned ecoCourse
 * @param {String} gendata.ecoCourse.value     The options to pass to the Moodle ecoCourse template during creation
 * @param {String} gendata.institution         A hash representing the ECO institution this course should be linked to
 * @todo - Add an option (or make it default) to link the course to ecoCourse via
 *   an institution and bu.
 * @todo - investigate whether we ever need this to create an alternate type of enrollment
**/
Pants.prototype.makeABasicCourseWithEnrolment = function(gendata) {
  var self = this;
  return Promise.try(function() {
    gendata.course.val.unshift('moodle.Course');
    gendata.ecoCourse.val.unshift('eco.Course');
    return;
  }).then(function() {
    return self.fixtures.writeTemplates.apply(self, gendata.course.val);
  }).then(function(course) {
    self.gd[gendata.course.gdv] = course;
    return;
  }).then(function() {
    return gendata.ecoCourse.val.push(['forCourse', self.gd.course.dataValues.id]);
  }).then(function() {
    return Promise.join(
      self.fixtures.writeTemplates('moodle.Enrolment', ['basic'], ['forCourse', self.gd.course.dataValues.id]),
      self.fixtures.writeTemplates('moodle.Context', ['simpleCourse', self.gd.course.dataValues.id]),
      self.fixtures.writeTemplates.apply(self, gendata.ecoCourse.val),
      function(enr, context, ecoC) {
        self.gd[gendata.enrolment.gdv] = enr;
        self.gd[gendata.ecoCourse.gdv] = ecoC;
        return self.fixtures.upsert('moodle.Context', {id: context.dataValues.id, path: '/1/' + context.dataValues.id});
      });
  }).then(function() {
    if (gendata.hasOwnProperty('institution')) {
      return self.fixtures.writeTemplates('eco.CourseByInstitution', ['basic', gendata.institution.id, self.gd.ecoCourse.dataValues.id]);
    }
    return;
  });
};

/**
 * @todo - document this
 * @todo - cache this?  then the problem is with invalidating it, but we don't
 *   even have any tests that use multiple at this point, so deferring.
**/
Pants.prototype.getBUID = function(name) {
  var self = this;
  return Promise.try(function() {
    return self.fixtures.Models.eco.BusinessUnit.findOne({where: {'business_unit': name}});
  }).then(function(bu) {
    return bu.dataValues.id;
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.iClickerCourse = function() {
  var self = this;
  var course = 'ECOQAA-' + cfg.name.toUpperCase() + '-' + cfg.BUUT.abbrev() + '-DEFAULT';
  return course;
};

/**
 * @todo - document this
 **/
Pants.prototype.getTaxByBUAndZip = function(bu, zip) {
  var self = this;
  var taxhash = {};
  return Promise.try(function() {
    // find all foo taxrate_ids where zip_start >= '77084' AND zip_end <= '77084'
    // should only be one or zero for now, could be multiple in the future
    return self.fixtures.Models.eco.ZipcodeTaxrate.findAll(
      {where :
       {$and: [
         {zip_start: {gte: zip}},
         {zip_end: {lte: zip}}
       ]}
      });
  }).then(function(zts) {
    if (zts.length === 0) {
      return 0;
    } else {
      return Promise.try(function() {
        // pull out and return the ids with a map
        taxhash = _.map(zts, function(zt) {
          return {id: zt.dataValues.id, tax_rate: zt.dataValues.tax_rate};
        }, []);
        return taxhash;
      }).then(function(zts) {
        // so we're assuming we're only returned 1 result from above.
        // technically we should handle multiple, but we aren't using that currently, maybe ever, so we're not testing for it now.
        // but if the following is throw, the next query will need to be updated to account for the multiple results.
        if (zts.length > 1) { throw 'Gotta spruce this up now'}
        // find all the xrefs where buid = buid and taxrate id = foo[0] or foo[1] or etc
        // should always and forever return only one, throw exception otherwise
        // return the one xref id
        return self.fixtures.Models.eco.BUTaxXref.findAll(
          {where : {business_unit_id: bu, zipcode_taxrate_id: zts[0].id}});
      }).then(function(butx) {
        if (butx.length > 1) {
          throw 'There should never be more than one matching bu_tax_xref result here';
        }
        butx = butx[0].dataValues;
        // look up the above returned id in the list we had previously returned, and return its associated tax rate
        return _.find(taxhash, {id: butx.zipcode_taxrate_id}).tax_rate
      });
    }
  });
};

// unused?
// Pants.prototype.makeABasicAccessCode = function(gendata) {
//   var self = this;
//   return Promise.join(
//     gendata.accesscode.val.unshift('eco.AccessCode'),
//     self.fixtures.writeTemplates.apply(self, gendata.accesscode.val),
//     function(x, code) {
//       self.gd[gendata.accesscode.gdv] = code;
//     });
// };

/**
 * Creates an access code in ECO db
 * @param {Object} gendata
 * @param {String} gendata.gdv                 The variable in pants.gd to populate with the returned Access Code.
 * @param {String} [gendata.tag_name]          The name of the tag to lock this Access Code to.
 * @param {Integer}[gendata.tag_id]            The id of the tag to lock this Access Code to.
 * @param {Integer}[gendata.user_id]           The moodle user id to lock this Access Code to.
 * @param {Integer}[gendata.batch_id]          The id of the batch this access code was theoretically generated in. Note that this is the sole
    difference required to turn this Access Code into a Credit.  Without (NULL), it's a Credit, with, it's an Access Code.
 * Either tag_name or tag_id are necessary.
 * @todo - Remove the hardcoded bu id, make it an option, or read from cfg.BUUT, or both.
 * @todo - Add a spent date option to mark it used?
 * @todo - I don't think tag_id is working as an option?  Or that it's actually exclusive with tag_name?
**/
Pants.prototype.makeAccessCode = function(gendata) {
  var self = this;
  return Promise.try(function() {
    if (gendata.hasOwnProperty('tag_name')) {
      // lookup the tag id by tag_name
      //TODO: remove hard coded buid
      return self.fixtures.Models.eco.Tag.findOne({where: {tag_name: gendata.tag_name, business_unit_id: 2}});
      // } else if (gendata.hasOwnProperty('tag_id')) {
      // just assume what we're passed was a valid tag id and return it
      // return;
    } else { throw 'ACs created without a tag are no longer valid for usage.'}
  }).then(function(tag) {
    return self.fixtures.templates('eco.AccessCode', ['withTagID', tag.dataValues.id]);
  }).then(function(ac) {
    if (gendata.hasOwnProperty('user_id')) {
      _.merge(ac, {user_id: gendata.user_id});
    }
    return ac;
  }).then(function(ac) {
    if (gendata.hasOwnProperty('batch_id')) {
      _.merge(ac, {batch_id: gendata.batch_id});
    } else {
      // it needs one to be valid, we don't have any current test cases (so dont need the option) to have an invalid one,
      // and if we didn't already provide it, we don't care what it is.  set it to 1, there's no db constraint on it.
      ac.batch_id = 1;
    }
    return self.fixtures.write('eco.AccessCode', ac);
  }).then(function(ac) {
    self.gd[gendata.gdv] = ac.dataValues;
    return ac.dataValues;
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.makeTag = function(gendata) {
  var self = this;
  return Promise.join(
    gendata.val.unshift('eco.Tag'),
    self.fixtures.writeTemplates.apply(self, gendata.val),
    function(xx, tag) {
      self.gd[gendata.gdv] = tag.dataValues;
    });
};

/**
 * @todo - document this
 **/
Pants.prototype.makeTags = function(gendata) {
  // expect gendata to be an array of hashes.  each hash should contain the tag_name
  //   and optionally (realistically it should) the business_unit_id
  var self = this;
  return Promise.each(gendata, function(tag) {
    if (tag.hasOwnProperty('business_unit_id')) {
      return self.fixtures.write('eco.Tag', {
        tag_name: tag.tag_name,
        business_unit_id: tag.business_unit_id
      });
    } else {
      return self.fixtures.write('eco.Tag', {tag_name: tag.tag_name});
    }
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.selectOtherPaymentOptions = function() {
  var self = this;
  return Promise.try(function() {
    return self.bro.findElement({id : 'otherOptions'}).click();
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.chooseToPayWith = function(payby) {
  var self = this;
  return Promise.try(function() {
    return self.bro.findElement(payment.choose_payment(payby)).click();
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.markAccessCodeUsed = function(id, gendata) {
  // expects the id of the access code, and an optional hash with specific values to mark it used with.
  // if the hash is not provided, random values will be used.
  var defaults = {
    course_id: chance.d100(),
    user_id: chance.d100(),
    date_used: '2015-11-13 02:01:00'
  };
  if (gendata === undefined) {
    gendata = defaults;
  } else {
    gendata = _.merge({}, gendata, defaults);
  }
  //TODO: arguably, this should be calling the REST endpoint to mark it used instead of straight
  // mucking with the db
  var self = this;
  return Promise.try(function() {
    return self.fixtures.Models.eco.AccessCode.findOne({where: {id: id}});
  }).then(function(ac) {
    // as of RC-6, the only thing that actually marks it used is the date_used stamp
    return self.fixtures.upsert('eco.AccessCode', _.merge({}, ac.dataValues, gendata));
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.tagEcoCourse = function(gendata) {
  // expects the id of an already created course and the name of an already created tag
  //  if primary: true is not included, assumed to be false.
  var self = this;
  if (gendata.primary !== true) { gendata.primary = false;}
  return Promise.join(
    //TODO: this is problematic.  Functional, but shitty.
    //TODO: fix hardcoded bu name.  Use cfg.BUUT.
    self.fixtures.Models.eco.Tag.findOne({where: {tag_name: gendata.tag_name, business_unit_id: 2}}),
    self.fixtures.Models.eco.Course.findOne({where: {id: gendata.course_id}}),
    function(tag, course) {
      return self.fixtures.write('eco.CourseTag', {course_id: course.id, tag_id: tag.id, primary: gendata.primary});
    }
  );
};

/**
 * @todo - document this
 **/
Pants.prototype.tagAccessCode = function(gendata) {
  // expects an accessCode id and a tag name
  var self = this;
  return Promise.join(
    //TODO: fix hardcoded bu name.  Use cfg.BUUT.
    self.fixtures.Models.eco.Tag.findOne({where: {tag_name: gendata.tag_name, business_unit_id: 2}}),
    self.fixtures.Models.eco.AccessCode.findOne({where: {id: gendata.ac_id}}),
    function(tag, ac) {
      return self.fixtures.upsert('eco.AccessCode', {id: ac.id, tag_id: tag.id, access_code: ac.access_code, date_used: null});
    });
};

/**
 * @todo - document this
 **/
Pants.prototype.validateAssociationPage = function(options) {
  var self = this;
  return Promise.try(function() {
    return expect(self.bro.findElement(assoc.login_username).getText())
      .to.eventually.equal('');
  }).then(function() {
    return expect(self.bro.findElement(assoc.login_password).getText())
      .to.eventually.equal('');
  }).then(function() {
    return expect(self.bro.isElementPresent(assoc.login_username_label))
      .to.eventually.be.true;
  }).then(function() {
    return expect(self.bro.isElementPresent(assoc.login_password_label)).to.eventually.be.true;
  // }).then(function() {
  //   return expect(self.bro.isElementPresent(assoc.register_fields1)).to.eventually.be.true;
  // }).then(function() {
  //   return expect(self.bro.findElement(assoc.register_city).getText()).to.eventually.equal('');
  }).then(function() {
    return expect(self.bro.findElement(assoc.register_firstname).getAttribute('value'))
      .to.eventually.equal('');
  }).then(function() {
    return expect(self.bro.findElement(assoc.register_firstname).getAttribute('disabled'))
      .to.eventually.equal(null);
  }).then(function() {
    return expect(self.bro.findElement(assoc.register_lastname).getAttribute('value'))
      .to.eventually.equal('');
  }).then(function() {
    return expect(self.bro.findElement(assoc.register_lastname).getAttribute('disabled'))
      .to.eventually.equal(null);
  }).then(function() {
    return expect(self.bro.findElement(assoc.register_email).getAttribute('value'))
      .to.eventually.equal('');
  }).then(function() {
    return expect(self.bro.findElement(assoc.register_email).getAttribute('disabled'))
      .to.eventually.equal(null);
  }).then(function() {
    return expect(self.bro.findElement(assoc.register_email_confirm).getAttribute('value'))
      .to.eventually.equal('');
  }).then(function() {
    return expect(self.bro.findElement(assoc.register_email_confirm).getAttribute('disabled'))
      .to.eventually.equal(null);
  });
};

/**
 * Assuming we're at the moodle login page, enters the given username and
 * password and attempts to log in.  If password is not given,
 * cfg.BUUT.lms.realpassword is assumed.
 * @todo - document this
 **/
Pants.prototype.assocLoginToMoodleAs = function(username, password) {
  var self = this;
  return Promise.try(function() {
    return self.bro.findElement(assoc.login_username).sendKeys(username);
  }).then(function() {
    if (password === undefined) {password = cfg.BUUT.lms.realpassword; }
    return self.bro.findElement(assoc.login_password).sendKeys(password);
  }).then(function() {
    return self.bro.findElement(assoc.login_button).click();
  });
};

/**
 * Assuming we're at the moodle login page, enters the given username and
 * password and attempts to log in.  If password is not given,
 * cfg.BUUT.lms.realpassword is assumed.
 * @todo - square this with assocLoginToMoodleAs()?
 **/
Pants.prototype.loginToMoodleAs = function(username, password) {
  var self = this;
  return Promise.try(function() {
    return self.bro.findElement(login.username);
  }).then(function(x) {
    return x.sendKeys(username);
  }).then(function(x) {
    if (password === undefined) {password = cfg.BUUT.lms.realpassword; }
    return self.bro.findElement(login.password).sendKeys(password);
  }).then(function(x) {
    return self.bro.findElement(login.submit).click();
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.validatePaymentPageGeneric = function() {
  var self = this;
  return Promise.try(function() {
    return expect(self.bro.findElement(moo.header_username).getText()).to.eventually.equal(self.gd.newUser.dataValues.firstname + ' ' + self.gd.newUser.dataValues.lastname);
  }).then(function() {
    return expect(self.bro.findElement(moo.footer_username).getText()).to.eventually.equal(self.gd.newUser.dataValues.firstname + ' ' + self.gd.newUser.dataValues.lastname);
  }).then(function() {
    return expect(self.bro.isElementPresent(payment.header)).to.eventually.equal(true);
  }).then(function() {
    return expect(self.bro.findElement(payment.purchase_name).getText()).to.eventually.match(new RegExp("$"));
  }).then(function() {
    return expect(self.bro.findElement(payment.purchase_name).getText()).to.eventually.match(new RegExp(self.gd.course.dataValues.fullname));
  });
}

/**
 * @todo - document this
 **/
Pants.prototype.validatePaymentPageNoAccessCode = function() {
  //TODO
  broken;
};

/**
 * @todo - document this
 **/
Pants.prototype.validatePaymentPageAccessCode = function(course_longname) {
  var self = this;
  return Promise.try(function() {
    log.progress("Validating access code entry info is displayed.");
    return expect(self.bro.isElementPresent(payment.ac_full_header(course_longname)))
      .to.eventually.equal(true);
  }).then(function() {
    log.progress("Validating description of what access codes are is displayed");
    return expect(self.bro.isElementPresent(payment.ac_aside))
      .to.eventually.equal(true);
  }).then(function() {
    log.progress("Validating access code label is present");
    return expect(self.bro.isElementPresent(payment.access_code_label))
      .to.eventually.equal(true);
  }).then(function() {
    log.progress("Validating access code input field is empty");
    return expect(self.bro.findElement(payment.access_code_input).getText())
      .to.eventually.equal('');
  }).then(function() {
    // TODO
    log.progress("PENDING - Should validate the proper display of accepted ac tag types");
    return; // expect(self.bro.findElement(payment.access_code_input).getText()).to.eventually.equal('');
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.getStringsForBU = function(bux) {
  // return the strings associated a particular business unit
  var self = this;
  return Promise.try(function() {
    return self.fixtures.Models.eco.BusinessUnit.findById(bux);
  }).then(function(bu) {
    return self.fixtures.Models.eco.String.findAll({where: {group_id: bu.dataValues.string_group_id}});
  }).then(function(result) {
    return _.reduce(result, function(end, ob) {
      end[ob.dataValues.type] = ob.dataValues.string;
      return end;
    }, {});
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.validatePaymentPageBraintreeOptions = function(course_longname, type, price) {
  var self = this;
  var strings = {};
  return Promise.try(function() {
    return self.getBUID(cfg.BUUT.name);
  }).then(function(buid) {
    return self.getStringsForBU(buid);
  }).then(function(ss) {
    strings = ss;
    return;
  }).then(function() {
    log.progress('Validating purchase options headers exists and contains the full course name.');
    // check for purchase options header with full course name
    if (type === 'both') {
      //  check for select header 'select course option'
      //  check for radio buttons
      //  check which radio button is selected
      //  check for multi title
      //  check for multi price
      //  check for multi desc
      //  check for single title
      //  check for single price
      //  check for single desc
    } else if (type === 'single') {
      return Promise.try(function() {
        log.progress('Validating single term option and price are present with an accurate price.');
        return expect(self.bro.isElementPresent(payment_options.single_price(price)))
          .to.eventually.equal(true);
      }).then(function() {
        log.progress('Validating single term description is present and accurate.');
        return expect(self.bro.findElement(payment_options.single_price_desc).getText())
          .to.eventually.equal(strings.BT_PURCHASE_SINGLE);
      });
    } else if (type === 'multi') {
      //
    } else {
      throw('Unsupported payment options page type: ' + type);
    }
  }).then(function() {
    log.progress('Validating zipcode label is present and correct.');
    return expect(self.bro.findElement(payment_options.zip_label).getText())
      .to.eventually.equal('Zipcode:');
  }).then(function() {
    log.progress('Validating zipcode input is present and empty.');
    return expect(self.bro.findElement(payment_options.zip_input).getAttribute('value'))
      .to.eventually.equal('');
  }).then(function() {
    log.progress('Validating submit button is present and disabled.');
    return expect(self.bro.findElement(payment_options.submit).getAttribute('disabled'))
      .to.eventually.equal('true');
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.enterPaymentOptions = function(purchase_type, zip) {
  var self = this;
  return Promise.try(function() {
    log.progress('Choosing purchase type.');
    switch (purchase_type) {
    case null:
      return; // do nothing, but demarcate as a valid, separate option
    case 'multi':
      // select the multi radio
      return 'blabla';
    case 'single':
      // select the single radio
      return 'blabalalsc';
    default:
      throw('Invalid purchase option requested');
    };
  }).then(function() {
    return self.bro.findElement(payment_options.zip_input).sendKeys(self.gd.zip);
  }).then(function() {
    return self.bro.findElement(payment_options.submit).click();
  });
};

Pants.prototype.calcTotalPrice = function(bu, zip, price) {
  var res = {};
  var self = this;
  return Promise.try(function() {
    log.progress('Calculating correct tax rate and purchase total.');
    return self.getBUID(cfg.BUUT.name);
  }).then(function(buid) {
    return self.getTaxByBUAndZip(buid, zip);
  }).then(function(rate) {
    res.price = price
    res.taxrate = rate;
    res.tax = Math.round(rate * price * 100) / 100;
    res.total = price + res.tax;
    return res;
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.populateAndSubmitBTPurchase = function() {
  var self = this;
  return Promise.try(function() {
    return self.bro.switchTo().frame('braintree-dropin-frame');
  }).then(function() {
    return self.bro.findElement(bt_purchase.credit_card_number).sendKeys('4111111111111111');
  }).then(function() {
    return self.bro.findElement(bt_purchase.cvv).sendKeys('666');
  }).then(function() {
    return self.bro.findElement(bt_purchase.expiration).sendKeys('1218');
  }).then(function() {
    return self.bro.switchTo().defaultContent();
  }).then(function() {
    return self.bro.findElement(bt_purchase.submit).click();
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.calcTotalPrice = function(bu, zip, price) {
  var res = {};
  var self = this;
  return Promise.try(function() {
    log.progress('Calculating correct tax rate and purchase total.');
    return self.getBUID(cfg.BUUT.name);
  }).then(function(buid) {
    return self.getTaxByBUAndZip(buid, zip);
  }).then(function(rate) {
    res.price = price
    res.taxrate = rate;
    res.tax = Math.round(rate * price * 100) / 100;
    res.total = price + res.tax;
    return res;
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.validateBTPurchasePage = function(purchase, price, zip, tax, total) {
  var self = this;
  //var amounts = null;
  return Promise.try(function() {
    log.progress('Validating Braintree purchase page header exists and is correct.');
    return expect(self.bro.isElementPresent(bt_purchase.header))
      .to.eventually.equal(true);
  }).then(function() {
    log.progress('Validating Braintree purchase page shows proper purchase name');
    return expect(self.bro.isElementPresent(bt_purchase.purchase_name(purchase)))
      .to.eventually.equal(true);
  }).then(function() {
    log.progress('Validating Braintree purchase page shows proper purchase price');
    return expect(self.bro.isElementPresent(bt_purchase.price(price)))
      .to.eventually.equal(true);
  }).then(function() {
    log.progress('Validating Braintree purchase page shows proper tax amount');
    return expect(self.bro.isElementPresent(bt_purchase.tax(tax)))
      .to.eventually.equal(true);
  }).then(function() {
    log.progress('Validating Braintree purchase page shows proper total (with tax.)');
    return expect(self.bro.isElementPresent(bt_purchase.total(total)))
      .to.eventually.equal(true);
  }).then(function() {
    log.progress('Validating Braintree purchase page Payment button is labelled with the correct total.');
    return expect(self.bro.findElement(bt_purchase.submit_total(total)).isEnabled())
      .to.eventually.equal(true);
  }).then(function() {
    // FIXME: wait for the iframe to load.  could use an actual polling wait instead of a sleep here.
    return self.bro.sleep(2500);
  }).then(function() {
    // switch into the braintree iframe
    return self.bro.switchTo().frame('braintree-dropin-frame');
  }).then(function() {
    log.progress('Validating Braintree purchase page contains an enabled PayPal button.');
    return expect(self.bro.findElement(bt_purchase.paypal).isEnabled())
      .to.eventually.equal(true);
  }).then(function() {
    log.progress('Validating Braintree purchase page credit card input box exists and is blank.');
    return expect(self.bro.findElement(bt_purchase.credit_card_number).getAttribute('value'))
      .to.eventually.equal('');
  }).then(function() {
    log.progress('Validating Braintree purchase page CVV box exists and is blank.');
    return expect(self.bro.findElement(bt_purchase.cvv).getAttribute('value'))
      .to.eventually.equal('');
  }).then(function() {
    log.progress('Validating Braintree purchase page credit card expiration data input exists and is blank.');
    return expect(self.bro.findElement(bt_purchase.expiration).getAttribute('value'))
      .to.eventually.equal('');
  }).then(function() {
    // switch out of the braintree iframe
    return self.bro.switchTo().defaultContent();
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.populateAndSubmitBTPurchase = function() {
  var self = this;
  return Promise.try(function() {
    return self.bro.switchTo().frame('braintree-dropin-frame');
  }).then(function() {
    return self.bro.findElement(bt_purchase.credit_card_number).sendKeys('4111111111111111');
  }).then(function() {
    return self.bro.findElement(bt_purchase.cvv).sendKeys('666');
  }).then(function() {
    return self.bro.findElement(bt_purchase.expiration).sendKeys('1218');
  }).then(function() {
    return self.bro.switchTo().defaultContent();
  }).then(function() {
    return self.bro.findElement(bt_purchase.submit).click();
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.validatePaymentPageNoBraintree = function() {
  //TODO: make sure is gone bla
  //expect(bro.isElementPresent(payment.credit_card_label)).to.eventually.equal(true),
  // findElement should not be used to look for non-present elements, use findElements(By) and assert zero length response instead." Javadoc for WebElement#findElement
  var self = this;
  return expect(self.bro.findElements(payment.credit_card_label))
    .to.eventually.be.empty;
  //broken;
};

// FIXME: unused?
// Pants.prototype.validatePaymentPageBraintree = function() {
//   broken;
// }

/**
 * @todo - document this
 **/
Pants.prototype.payWithAccessCode = function(code) {
  var self = this;
  return Promise.try(function() {
    return self.bro.findElement(payment.access_code_input).sendKeys(code);
  }).then(function() {
    return self.bro.findElement(payment.access_code_submit).click();
  });
};

/**
 * @todo - document this
 * @note that this also validates the db records.  which maybe should be split out?
 **/
Pants.prototype.validatePaymentReceipt = function(options) {
  // options = {bu:null, name:null, method:null}
  var self = this;
  return Promise.try(function() {
    log.progress('Validating current user first name + last name are displayed in the Moodle header');
    return expect(self.bro.findElement(moo.header_username).getText()).to.eventually.equal(self.gd.newUser.firstname + ' ' + self.gd.newUser.lastname);
  }).then(function() {
    log.progress('Validating current user first name + last name are displayed in the Moodle footer');
    return expect(self.bro.findElement(moo.footer_username).getText()).to.eventually.equal(self.gd.newUser.firstname + ' ' + self.gd.newUser.lastname);
  }).then(function() {
    log.progress('Validating receipt Continue button is displayed');
    return expect(self.bro.findElement(receipt.continue_button));
  }).then(function() {
    log.progress('Validating receipt course name and label are displayed.');
    return expect(self.bro.isElementPresent(receipt.course_name(options.name)))
      .to.eventually.be.true;
  }).then(function() {
    log.progress('Validating support email and text on receipt page is displayed');
    return Promise.try(function() {
      return self.fixtures.Models.eco.BusinessUnit.find({where: {business_unit: options.bu}});
    }).then(function(bu) {
      var email = bu.dataValues.support_url;
      expect(email).not.to.be.null;
      return expect(self.bro.isElementPresent(receipt.support_blurb(email))).to.eventually.be.true;
    });
  }).then(function() {
    if (options.method === 'access_code') {
      return self.validatePaymentReceiptAC(options);
    } else if (options.method === 'braintree') {
      return self.validatePaymentReceiptBT(options);
    } else {
      throw 'Seems like you are trying to validate a thing that is not a thing.  Maybe dont do that.';
    }
  }).then(function() {
    if (options.method === 'access_code') {
      return self.validatePaymentInDBForAC(options);
    } else if (options.method === 'braintree') {
      return self.validatePaymentInDBForBT(options);
    } else {
      throw 'Seems like you are trying to validate a thing in the database that is not a thing.  Maybe dont do that.';
    }
  });
};


/**
 * @todo - document this
 * @todo - implement or remove this
 **/
Pants.prototype.validatePaymentInDBForAC = function(options){
  return;
};

/**
 * @todo - document this
 * @note - assumes product_type of 'course' unless otherwise specified
**/
Pants.prototype.validatePaymentInDBForBT = function(options){
  var self = this;
  var txrecord;
  var buid;
  return Promise.try(function() {
    return self.fixtures.Models.eco.BraintreeTransaction.findOne({where: {bt_transaction_id: options.txid}});
  }).then(function(txr) {
    txrecord = txr.dataValues;
    return;
  }).then(function() {
    return self.getBUID(cfg.BUUT.name);
  }).then(function(x) {
    buid = x;
    return expect(txrecord.business_unit).to.equal(buid);
  }).then(function() {
    if (options.hasOwnProperty('product_type')) {
      return expect(txrecord.product_type).to.equal(options.product_type);
    } else {
      return expect(txrecord.product_type).to.equal('course');
    }
  }).then(function() {
    return expect(self.gd.course.dataValues.id).to.equal(txrecord.product_id);
  }).then(function() {
    return expect(self.gd.newUser.id).to.equal(txrecord.user);
  }).then(function() {
    return expect(self.gd.price).to.equal(txrecord.cost);
  }).then(function() {
    return expect(self.gd.tax).to.equal(txrecord.tax);
  }).then(function() {
    return expect(self.gd.total).to.equal(txrecord.total);
  }).then(function() {
    return expect(self.gd.zip).to.equal(txrecord.zipcode);
  }).then(function() {
    log.progress('PENDING - other probably unimportant checks');
    // }).then(function() {
    // validate bt_status?
    // }).then(function() {
    // validate date?
    // }).then(function() {
    // validate multi?
    // }).then(function() {
    // validate txtype
  });
};

/**
 * @todo - document this
 * When making a braintree purchase, it's more reliable to read the txid from the receipt page
 * and compare that to the db entry, rather than try and guess the db entry and compare that
 * to the receipt, or txhist block, etc.
 **/
Pants.prototype.getTXidFromReceipt = function(options) {
  var self = this;
  return Promise.try(function() {
    return self.bro.findElement(receipt.tx_div).getText();
  }).then(function(txtext) {
    var id = txtext.match(/Transaction ID: (.*)/);
    if (id === null) {
      // as a test, we should really just throw here.  if we're looking for something that doesn't exist,
      // better to yell than quietly try and guess what to do.
      throw('Could not find a transaction id in this receipt!')
    } else {
      return id[1];
    }
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.validatePaymentReceiptBT = function(options) {
  var self = this;
  var strings = {};
  return Promise.try(function() {
    log.progress('Validating receipt header for braintree is displayed accurately.');
    return expect(self.bro.isElementPresent(receipt.bt_header))
      .to.eventually.be.true;
  }).then(function() {
    log.progress('Validating thanks message for braintree is displayed accurately.');
    return expect(self.bro.isElementPresent(receipt.bt_thanks_message))
      .to.eventually.be.true;
  }).then(function() {
    log.progress('Validating the correct purchase option message is displayed.');
    return Promise.try(function() {
      return self.getBUID(cfg.BUUT.name);
    }).then(function(buid) {
      return self.getStringsForBU(buid);
    }).then(function(ss) {
      strings = ss;
      return;
    }).then(function() {
      return expect(self.bro.isElementPresent(receipt.purchase_option(strings.BT_RECEIPT_SINGLE)))
        .to.eventually.be.true;
    });
  }).then(function() {
    log.progress('Validating Braintree receipt displays the correct price.');
    return expect(self.bro.isElementPresent(receipt.price(options.price)))
      .to.eventually.be.true;
  }).then(function() {
    log.progress('Validating Braintree receipt displays the correct tax.');
    return expect(self.bro.isElementPresent(receipt.tax(options.tax)))
      .to.eventually.be.true;
  }).then(function() {
    log.progress('Validating Braintree receipt displays the correct total.');
    return expect(self.bro.isElementPresent(receipt.total(options.total)))
      .to.eventually.be.true;
  }).then(function() {
    //log.progress('PENDING - Validating Braintree receipt displays the correct transaction id.');
    return; // expect(self.bro.isElementPresent(receipt.))
    // tx id
  }).then(function() {
    //TODO: validate the date?  still uses server time, so within a day either way?  just validate that it IS a date?
    log.progress('PENDING - Need to validate "Date" is accurate');
    return;
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.validatePaymentReceiptAC = function(options) {
  var self = this;
  return Promise.try(function() {
    log.progress('Validating AC receipt header is displayed');
    return expect(self.bro.isElementPresent(receipt.ac_header))
      .to.eventually.be.true;
  }).then(function() {
    log.progress('Validating receipt thanks message is displayed');
    return expect(self.bro.isElementPresent(receipt.ac_thanks_message))
      .to.eventually.be.true;
  }).then(function() {
    log.progress('Validating receipt payment method and label are displayed');
    return expect(self.bro.isElementPresent(receipt.payment_method))
      .to.eventually.be.true;
  }).then(function() {
    //TODO: validate the date?  still uses server time, so within a day either way?  just validate that it IS a date?
    log.progress('PENDING - Need to validate "Transaction date" is accurate');
    return;
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.validateCourseHome = function() {
  var self = this;
  return Promise.try(function() {
    log.progress('Validating course main page shows course full name in header');
    return expect(self.bro.findElement(moo.header_title).getText()).to.eventually.match(new RegExp(self.gd.course.dataValues.fullname));
  }).then(function() {
    log.progress('Validating course main page shows course short name in breadcrumbs');
    return expect(self.bro.findElement(moo.breadcrumbs).getText()).to.eventually.match(new RegExp(self.gd.course.dataValues.shortname));
  }).then(function() {
    log.progress('Validating header shows current username');
    return expect(self.bro.findElement(moo.header_username).getText()).to.eventually.equal(self.gd.newUser.firstname + ' ' + self.gd.newUser.lastname);
  }).then(function() {
    log.progress('Validating footer shows current username');
    return expect(self.bro.findElement(moo.footer_username).getText()).to.eventually.equal(self.gd.newUser.firstname + ' ' + self.gd.newUser.lastname);
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.gotoMoodleUserHome = function() {
  var self = this;
  log.progress('Navigating to user\'s moodle home page');
  return new wd.ActionSequence(self.bro)
    .click(self.bro.findElement(moo.user_menu))
    .click(self.bro.findElement(moo.user_menu_home))
    .perform();
};

/**
 * @todo - document this
 **/
Pants.prototype.gotoMoodleUserProfile = function() {
  var self = this;
  log.progress('Navigating to user\'s moodle home page');
  return new wd.ActionSequence(self.bro)
    .click(self.bro.findElement(moo.user_menu))
    .click(self.bro.findElement(moo.user_menu_profile))
    .perform();
};

/**
 * @todo - document this
 **/
Pants.prototype.validateUserHomeContainsCourse = function(or_not) {
  // if passed false, will verify gd.course is not listed there
  // if passed null, will verify the user has no courses listed on their home at all
  // if not passed anything, will verify gd.course is listed
  var self = this;
  // why all the nonsense here?  because moodle doesn't seem to immediately add courses that you're enrolled to,
  // (or we're adding them wrong), so we have to dance around and force it to refresh to verify the enrollment occurred.
  return Promise.try(function() {
    return self.bro.findElement(myhome.nav_my_courses).click();
  }).then(function() {
    if (or_not === false) {
      log.progress("Validating user's moodle home page does not contain particular course links");
      return expect(self.bro.isElementPresent(myhome.course_link(self.gd.course.dataValues.fullname))).to.eventually.be.false;
    } else if (or_not === null) {
      log.progress("Validating user's moodle home page contains NO enrolled course links");
      return expect(self.bro.isElementPresent(myhome.course_links)).to.eventually.be.false;
    } else {
      log.progress("Validating user's moodle home page contains particular course links");
      var mycourses = myhome.course_link(self.gd.course.dataValues.fullname);
      return Promise.try(function() {
        return self.bro.wait(until.elementLocated(mycourses, 3500, 'Waiting for my courses'));
      }).then(function() {
        return expect(self.bro.isElementPresent(mycourses)).to.eventually.be.true;
      });
    }
  });
};

/**
 * @todo - document this
 * @todo - implement this
**/
Pants.prototype.createInstitution = function(name) {
  return this.fixtures.writeTemplates('eco.Institution', ['basic', name]);
};

/**
 * @todo - document this
 * @todo - implement this
 **/
Pants.prototype.pickInstitution = function(inst) {
  var self = this;
  return self.bro.findElement(instpicker.selector).click()
    .then(function() {
      return self.bro.findElement(instpicker.institution(inst.id)).click();
    });
};

/**
 * @todo - document this
 **/
Pants.prototype.gotoCourseCatalog = function() {
  var self = this;
  log.progress('Looking for the course catalog link in its block to go to');
  return Promise.try(function() {
    log.debug(blocks.course_catalog_link);
    //return self.bro.findElement(blocks.course_catalog_link).click();
    return self.bro.findElement({css : 'div.block_mnv_courseenrollment > div.content > a'}).click();
  });
};

/**
 * jumpto is only for directly changing the url.  It does not verify one can actually
 * click any sort of link to get to the following page.  Only use when it would be
 * acceptable or intended for the user to manually type a new location in the url bar.
 * @todo move the locs out of here to some external constant, in helpers probably
**/
Pants.prototype.jumpto = function(loc) {
  var locs = {
    'login': cfg.BUUT.lms.baseurl + '/login/index.php'
  };
  return this.bro.get(locs[loc]);
};

/**
 * @todo - document this
 **/
Pants.prototype.waitToFind = function(locator, message, timeout) {
  var self = this;
  if (timeout === undefined) { timeout = cfg.default_element_wait_time};
  return self.bro.wait(until.elementLocated(locator), timeout, message);
};

/**
 * Validated certain courses for a particular institution are listed for sale
 * Does not do any checking as to IF those courses should be listed-- only validates
 * that the browser is displaying the same things that have been passed in here as arguments.
 * @param {Object} options
 * @param {Object} options.institution         A hash representing the eco.institution to check for
 * @param {Object[]} options.courses           An array of hashes representing rows of mdl_courses that should be listed
 * @todo - add validation for multiple courses
 **/
Pants.prototype.validateCourseSaleListing = function(options) {
  var self = this;
  return Promise.try(function() {
    log.progress('Validating presence of find-course-page header');
    return expect(self.bro.isElementPresent(instpicker.choose_course_header(options.institution.name)))
      .to.eventually.be.true;
  }).then(function() {
    log.progress('Validating presence of find-course-page course title');
    return expect(self.bro.findElement(instpicker.course_title(options.courses[0])).getText())
      .to.eventually.equal(options.courses[0].fullname);
  }).then(function() {
    log.progress('Validating presence of find-course-page course enrollment button');
    return expect(self.bro.isElementPresent(instpicker.course_enroll(options.courses[0].id)))
      .to.eventually.be.true;
  });
};

/**
 * @todo - document this
 **/
Pants.prototype.coursePickerSelectCourse = function(course_id) {
  var self = this;
  return self.bro.findElement(instpicker.course_enroll(course_id)).click();
};

module.exports = Pants;
