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

//Test Steps
browser
    .init({browserName:'chrome'})
    .get('http://localhost:8080/course/1')
    .title()
        .should.become('Course Title Goes Here')

    //Is there a course title?
    .elementByClassName('inside').textPresent('General Chemistry Laboratory').should.become(true)

    //Is there an assignments section?
    .elementById('assignments').textPresent('Assignments').should.become(true)

    //Make sure course-nav and items are visible - As of right now Home and Ebook...
    .elementById('main-nav').textPresent('HOME').should.become(true)
    .elementById('main-nav').textPresent('EBOOK').should.become(true)

    //Is there an chapters section?
    .elementById('chapters').textPresent('Chapters').should.become(true)

    //Does the drop down work? If so, go ahead and click the assignement
    .elementByClassName("accord-title")
    .click()
    .elementByLinkText("Chemical Reactions Pre-Lab Assignment")
    .click() //should probably close the new tab instead of the whole window

    //close the browser
    .fin(function() { return browser.sleep(2500).quit(); })
    .done();