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
// Given I want to create or update a book
// When I make a PUT or POST at ECO/api/book/ with a book model as a payload
// Then I receive the book i just registered

describe('When I create a book', function() {
  it('BACKLOG: need to reprovision to get mongo up and working');
  it('test on unique keys:  title must be unique?  what happens when the identical title is used multiple times?');
});
