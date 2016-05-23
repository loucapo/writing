/* global require, it, describe, console, before, expect */
var config = require('../../config/config');
var chai = require('chai');
var expect = chai.expect;
var req = require('supertest');

var server = config.stemAPI.url;

var cbu = null; //current business unit
var emptyUserId = 950;

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
// Given I want all the courses registered with a BU
// When I make a request ECO/api/:buName/course with a BU
// Then I receive a list of courses

describe('When I request a list of courses from dynamicBooks', function() {
  // it('for a nonexistent user the api returns a 404 error', function(done) {
  //   cbu = 'dynamicBooks';
  //   var uri = basePath() + '/user/' + emptyUserId;
  //   req(server)
  //     .get(uri)
  //     .auth(username(), password())
  //     .expect(404, done);
  // });

  // //currently just id, username, first, last, email
  // it('the data retrieved for a user should match the data used to generate the user');
  // it('the data retrieved for a suspended user should match the data used to generate the user');
});

describe('When I request a user profile from haydenMcNeil', function() {
  it('for a nonexistent user the api returns a 404 error', function(done) {
    cbu = 'haydenMcNeil';
    var uri = basePath() + '/user/' + emptyUserId;
    req(server)
      .get(uri)
      .auth(username(), password())
      .expect(404, done);
  });

  //currently just id, username, first, last, email
  it('the data retrieved for a user should match the data used to generate the user');
  it('the data retrieved for a suspended user should match the data used to generate the user');
});
