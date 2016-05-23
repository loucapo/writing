/*global console*/
var _ = require('lodash');
var wd = require('selenium-webdriver');
var until = wd.until;
var Promise = require('bluebird');

//function Blackboard(user, driver) {
var Blackboard = function(driver, user) {
  //until such time as we need two separate blackboard uses in the same test
  //  (probably never), this is totally sufficient.
  //_.assign(this, blackboardUsers[user]);
  _.assign(this, Blackboard.users[user]);
  this.driver = driver;
  return this;
};

//var blackboardUsers = {
Blackboard.baseURL = 'https://iclicker.blackboard.com';

Blackboard.users = {
  test1: {
    username: 'stemeco',
    password: 'Password123!',
    first:    'Stemmish',
    last:     'MacEcotron',
    email:    'gabrielwilkins+iclkbb-1@saplinglearning.com',
    baseURL:  Blackboard.baseURL
  },
  test2: {
    username: 'stemeco2',
    password: 'Password123!',
    first:    'Stemathen',
    last:     'Ecoecoeco',
    email:    '',
    baseURL:  'https://iclicker.blackboard.com'
  },
  test74: {
    username: 'stemeco-qa',
    password: 'Password123!',
    first:    'Testy',
    last:     'McTesterson',
    baseURL:  'https://iclicker.blackboard.com'
  },
  admin: {
    username: 'gabriel',
    password: 'gabriel',
    first:    'Gabriel',
    last:     'Wilkins',
    baseURL:  'https://iclicker.blackboard.com'
  },
  qa0000: {
    username: 'qa_gs_0000',
    password: 'Password123!',
    first:    'Louis',
    last:     'Guzman',
    baseURL:  'https://iclicker.blackboard.com'
  },
  qa0001: {
    username: 'qa_gs_0001',
    password: 'Password123!',
    first:    'Larry',
    last:     'Wilkins',
    baseURL:  'https://iclicker.blackboard.com'
  }
};


Blackboard.prototype.jumpBase = function() {
  var self = this;
  return self.driver.getWindowHandle()
    .then(function() {
      return self.driver.get(self.baseURL);
    }).then(function() {
      // wait for whatever shit to indicate the page has loaded
    });
};

Blackboard.prototype.logOut = function() {
  var self = this;
  return Promise.try(function() {
    return self.driver.wait(until.elementLocated({css : '.nav-link.logout-link'}), 4000, 'Couldnt find blackboard logout button');
  }).then(function() {
    return new wd.ActionSequence(self.driver).
      mouseMove(self.driver.findElement({css : '.nav-link.logout-link'}))
      .click(self.driver.findElement({css : '.nav-link.logout-link'}))
      .perform();
  }).then(function() {
    // wait for whatever shit to indicate logout was successfully completed
    return self.driver.wait(until.elementLocated({xpath : '//input[@id="user_id"]'}), 8000, 'Timed out waiting for the Blackboard login page to appear.');
  });
  // return self.driver.wait(function() {
  //   return self.driver.isElementPresent({css : '.nav-link.logout-link'});
  // }, 5000, 'didnt find the thing')
  //   .then(function() {
  //     // QQQ uncomment?
  //     // return self.driver.wait(function() {
  //     //   return self.driver.isElementPresent({partialLinkText: (self.first + ' ' + self.last)});
  //     // }, timeout = 5000, 'Couldn\'t find test user name after ' + (timeout/1000) + ' seconds');
  //   }).then(function() {
  //     return new wd.ActionSequence(self.driver).
  //       mouseMove(self.driver.findElement({css : '.nav-link.logout-link'})).
  //       click(self.driver.findElement({css : '.nav-link.logout-link'})).
  //       perform();
  //   });
};

Blackboard.prototype.login = function(options) {
  // this is the test context, this.driver will be the selenium-webdriver instance
  var self = this;
  return self.driver.getWindowHandle()
    .then(function() {
      return self.driver.get(self.baseURL);
    }).then(function() {
      return self.driver.wait(function() {
        return self.driver.isElementPresent({id: 'user_id'});
      });
    }).then(function() {
      return self.driver.findElement({id: 'user_id'}).sendKeys(options.username);
    }).then(function() {
      return self.driver.findElement({id: 'password'}).sendKeys(options.password);
    }).then(function() {
      return self.driver.findElement({xpath: '//input[@value="Login"]'}).click();
    }).then(function() {
      return self.driver.sleep(2500);
    }).then(function() {
      return self.driver.findElements({id : 'finishLater'});  // dismiss the new user tour overlay
    }).then(function(els) {
      if (els.length != 0) {
        return (els[0]).click();
      }
      return;
      //qqq uncomment?
      // }).then(function() {
      //   return self.driver.wait(function() {
      //     return self.driver.isElementPresent({partialLinkText: (self.first + ' ' + self.last)});
      //   }, timeout = 5000, 'Couldn\'t find test user name after ' + (timeout/1000) + ' seconds');
    });
};

Blackboard.prototype.gotoCourses = function() {
  // this is the test context, this.driver will be the selenium-webdriver instance
  var self = this;
  return self.driver.getWindowHandle()
    .then(function() {
      return self.driver.wait(function() {
        return self.driver.isElementPresent({id: 'Courses.label'});
      });
    }).then(function() {
      return self.driver.findElement({xpath: '//td[@id="Courses.label"]/a'}).click();
    }).then(function() {
      return self.driver.wait(function() {
        return self.driver.isElementPresent({xpath: '//span[text()="Course List"]'});
      });
    });
};

// assumes we're on the Courses page
Blackboard.prototype.listCourses = function() {
  return [];
};

// assume we're on the Courses page
Blackboard.prototype.gotoCourse = function(course) {
  // this is the test context, this.driver will be the selenium-webdriver instance
  var self = this;
  return self.driver.getWindowHandle()
    .then(function() {
      return self.driver.wait(function() {
        return self.driver.isElementPresent({xpath: '//a[text()="' + course + '"]'});
      });
    }).then(function() {
      return self.driver.findElement({xpath: '//a[text()="' + course + '"]'}).click();
    }).then(function() {
      return self.driver.wait(function() {
        return self.driver.isElementPresent({xpath: '//span[@id="pageTitleText"][contains(text(), "Home Page")]'});
      });
    });
};

// assume we're on a Course page
Blackboard.prototype.gotoCourseContents = function() {
  // this is the test context, this.driver will be the selenium-webdriver instance
  var self = this;
  return self.driver.getWindowHandle()
    .then(function() {
      return self.driver.findElement({xpath: '//span[@title="Content"][text()="Content"]/..'}).click();
    }).then(function() {
      return self.driver.wait(function() {
        return self.driver.isElementPresent({xpath: '//span[@id="pageTitleText"]/span[text()="Content"]'});
      }, 17000, "Couldn't find the Course Contents title");
    });
};

//TODO: add helpful error messages to ALL the wait calls that can potentially fali.

// assume we're on a Course Contents page
Blackboard.prototype.listCourseContents = function() {
  //
};

// assume we're on a Course Contents page
Blackboard.prototype.gotoCourseContent = function(content) {
  // this is the test context, this.driver will be the selenium-webdriver instance
  var self = this;
  return self.driver.getWindowHandle()
    .then(function() {
      return self.driver.findElement({xpath: '//a/span[text()="' + content + '"]'}).click();
    });
};

Blackboard.prototype.loginAndGoToContent  = function(options) {
  var self = this;
  return self.login(options)
    .then(self.gotoCourses.bind(self))
    .then(self.gotoCourse.bind(self, options.course))
    .then(self.gotoCourseContents.bind(self))
    .then(function() {
      return Promise.join(
        self.driver.getAllWindowHandles(),
        self.gotoCourseContent(options.link),
        function(wh, xx) {
          return self.driver.switchToNewWindow(wh);
          /// TODO: Next section should be switched on or off with a function param
          // Some Blackboard LTI links are spawned in the 2nd window (which needs the next section off),
          // others in yet a 3rd tab.
        }).then(function(ugg) {
          return self.driver.wait(until.elementLocated({xpath: "//form[text()='The LTI Link has been launched.']"}));
        }).then(function(ugg) {
          return self.driver.getAllWindowHandles();
        }).then(function(wh) {
          return self.driver.switchToLatestTab();
          ///
        });
    });
};

module.exports = Blackboard;
