var wd = require('selenium-webdriver');
var fs = require('fs');

wd.WebDriver.prototype.isThereANewTab = function(oldcount) {
  return this.getAllWindowHandles()
    .then(function(handles) {
      if (handles.length == (oldcount + 1)) {
        return true;
      } else { return false; }
    });
};

wd.WebDriver.prototype.saveScreenshot = function(filename) {
  var driver = this;
  return driver.takeScreenshot().then(function(data) {
    fs.writeFile(filename, data.replace(/^data:image\/png;base64,/, ''), 'base64', function(err) {
      if (err) {throw err;}
    });
  });
};

wd.WebDriver.prototype.switchToNewWindow = function(wh_arr) {
  var driver = this;
  var count = wh_arr.length;
  return driver.wait(function() {
    return driver.isThereANewTab(count, driver);
  }, 5000, 'Couldn\'t find a new tab?')
    .then(function() {
      return driver.getAllWindowHandles();
    }).then(function(el) {
      return driver.switchTo().window(el[(el.length - 1)]);
    }).then(function() {
      return driver.getWindowHandle();
    });
};

wd.WebDriver.prototype.switchToLatestTab = function() {
  var driver = this;
  //var count = wh_arr.length;
  //Promise.try(function() {
  return driver.wait(function() {
    return true;
  }, 100, 'never here')
    .then(function() {
      return driver.getAllWindowHandles();
    }).then(function(el) {
      return driver.switchTo().window(el[(el.length - 1)]);
    }).then(function() {
      return driver.getWindowHandle();
    });
};
