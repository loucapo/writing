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
// Given I want to delete a specific book
// When I make a DELETE at ECO/api/book/:id with the book id of the book i want to destroy
// Then I receive a message that that book is no longer available

describe('When I delete a specific book', function() {
  it('BACKLOG: need to reprovision to get mongo up and working');
  it('return 404 if the book did not initially exist'); //requesting an unused book id
});
