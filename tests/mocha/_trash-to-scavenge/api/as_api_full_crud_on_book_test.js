/* global require, it, describe, console, before, expect */
var config = require('../../config/config');
var chai = require('chai');
var expect = chai.expect;
var req = require('supertest');

var server = config.stemAPI.url;

var cbu = null; //current business unit

var username = function() {
  return cbu;
};
var password = function() {
  return config.toolProviders[cbu].password;
};
var basePath = function() {
  return '/v1/api/' + cbu;
};

// As a valid API consumer
// Given I want a to exercise the CRUD of a book
// Then like everything just works brah

// remember, these are not segmented since order is not guaranteed.
// to execute in a particular order, you basically must cram the ful
// sequence into a single 'it'.
describe('When I request a specific book', function() {
  it('BACKLOG: need to reprovision to get mongo up and working');
  // get a list
  // create a thing
  // get a list and verify the difference
  // get the details of the creation and verify
  // go to the book?
  // update the book and reverify details and listing?
  // delete book
  // verify book is deleted
  // attempt to recreate identical book
  // verify book can be created
});
