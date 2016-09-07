require('colors');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

var wd;
try {
    wd = require('wd');
} catch( err ) {
    wd = require('../../lib/main');
}

// enables chai assertion chaining
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var browser = wd.promiseChainRemote();

// optional extra logging
browser.on('status', function(info) {
    console.log(info.cyan);
});
browser.on('command', function(eventType, command, response) {
    console.log(' > ' + eventType.cyan, command, (response || '').grey);
});
browser.on('http', function(meth, path, data) {
    console.log(' > ' + meth.magenta, path, (data || '').grey);
});

browser
    .init({browserName:'chrome'})
    .get('http://localhost:8080')
    .title()
    .should.become('Course Title Goes Here')

    .elementById('nav-courses')
    .moveTo()

    .elementByXPath("//li[@id='nav-courses']/ul/li/a[1]")
    .click()

    .eval("window.location.href")
    .should.eventually.include('course/1')

    .elementByCss('h1')
    .text()
    .should.become('General Chemistry Laboratory - 1331')

    .fin(function() { return browser.sleep(2500).quit(); })
    .done();