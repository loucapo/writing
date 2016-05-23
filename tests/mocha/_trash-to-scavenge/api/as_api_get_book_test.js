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
// Given I want a specific book
// When I make a request at ECO/api/book/:id with a book id
// Then I receive a specific book

describe('When I request a specific book', function() {
  it('BACKLOG: need to reprovision to get mongo up and working');
});
