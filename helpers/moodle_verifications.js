var Promise = require('bluebird');

function verifyAssociationPage_registerSection_populatedFullyByBlackboard(bro, assoc, gd, doc, expect, test) {
  // var self = {};
  // crap.forEach(function(x,y,z) {
  //   self[x] = x;
  // });
  return Promise.all([
    // verify all the points on the association / login page
    // console.log('==========='),
    // console.log(self.doc),
    console.log('==========='),
    console.log(bro),
    // // console.log('==========='),
    // self.doc.expected(self.test, 'Username and password fields (under register new account) should be empty'),
    // expect(self.bro.findElement(self.assoc.register_username).getText()).to.eventually.equal(''),
    expect(bro.findElement(assoc.register_password).getText()).to.eventually.equal(''),
    doc.expected(test, 'Username and password fields (under register new account) should have appropriate labels'),
    expect(bro.isElementPresent(assoc.register_username_label)).to.eventually.be.true,
    expect(bro.isElementPresent(assoc.register_password_label)).to.eventually.be.true,
    expect(bro.isElementPresent(assoc.register_fields1)).to.eventually.be.true,
    expect(bro.findElement(assoc.register_city).getText()).to.eventually.equal(''),
    doc.expected(test, 'The firstname field should contain the firstname registered to the used blackboard user'),
    expect(bro.findElement(assoc.register_firstname).getAttribute('value')).to.eventually.equal(bro.bb.first),
    doc.expected(test, 'The firstname field should be disabled, preventing the name from being changed'),
    expect(bro.findElement(assoc.register_firstname).getAttribute('disabled')).to.eventually.equal('true'),
    doc.expected(test, 'The lastname field should contain the lastname registered to the used blackboard user'),
    expect(bro.findElement(assoc.register_lastname).getAttribute('value')).to.eventually.equal(bro.bb.last),
    doc.expected(test, 'The lastname field should be disabled, preventing the name from being changed'),
    expect(bro.findElement(assoc.register_lastname).getAttribute('disabled')).to.eventually.equal('true'),
    doc.expected(test, 'The email and email confirmation inputs should contain the email address registered to' +
                 ' the blackboard user and be disabled, preventing the email from being changed.'),
    expect(bro.findElement(assoc.register_email).getAttribute('value')).to.eventually.equal(bro.bb.email),
    expect(bro.findElement(assoc.register_email).getAttribute('disabled')).to.eventually.equal('true'),
    expect(bro.findElement(assoc.register_email_confirm).getAttribute('value')).to.eventually.equal(bro.bb.email),
    expect(bro.findElement(assoc.register_email_confirm).getAttribute('disabled')).to.eventually.equal('true'),
  ]);
}

module.exports.vap = verifyAssociationPage_registerSection_populatedFullyByBlackboard;
