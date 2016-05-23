/* global require, before, after, beforeEach, it, describe */
var selenium = require('selenium-webdriver');
var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

before(function() {
  this.driver = new selenium.Builder().withCapabilities(
    selenium.Capabilities.firefox()).build();
  return this.driver.getWindowHandle();
});

after(function() {
  return this.driver.quit();
});

describe('Webdriver tutorial', function() {

  beforeEach(function() {
    return this.driver.get(
      'http://bites.goodeggs.com/posts/selenium-webdriver-nodejs-tutorial/');
  });

  it('has the title of the post in the window\'s title', function() {
    expect(this.driver.getTitle()).to.eventually.contain(
      'Getting started with Selenium Webdriver for node.js');
    return;
  });

  it('has publication date', function() {
    var text;
    text = this.driver.findElement({
      css: '.post .meta time'
    }).getText();
    expect(text).to.eventually.equal('December 30th, 2014');
    return;
  });

  it('links back to the homepage', function() {
    this.driver.findElement({
      linkText: 'Bites'
    }).click();
    return expect(this.driver.getCurrentUrl()).to.eventually.equal(
      'http://bites.goodeggs.com/');
  });
});
