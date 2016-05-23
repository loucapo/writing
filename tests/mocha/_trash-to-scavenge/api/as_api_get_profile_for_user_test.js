/* global require, it, describe, console, before, expect */
var config = require('../../config/config');
var chai = require('chai');
var expect = chai.expect;
var req = require('supertest');
var fixtures = require('../fixtures/fixtures');
//var recipes = require('../fixtures/recipes');
//var c4t = require('../config4test');

var server = config.stemAPI.url;
// Generated Data, declared here for scope, assigned in before, used during tests
var gd = {};
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

before(function() {
  gd.emptyUserId = 950;
  // generate a normal user in moodle
  gd.newUser = fixtures.writeFixtureData('User', 'basic');
  // generate a suspended user in moodle
  gd.suspendedUser = fixtures.writeFixtureData('User', 'basic', 'suspended');
  gd.deletedUser = fixtures.writeFixtureData('User', 'basic', 'deleted');
});

// As a valid API consumer
// Given I want a user profile at a specific business unit
// When I make a request to ECO/api/businessunit/:buName/user/:id with a BU and user id
// Then I receive a the user profile of that user

describe('When I request a user profile from dynamicBooks', function() {
  it('for a nonexistent user the api returns a proper error message', function(done) {
    cbu = 'dynamicBooks';
    var uri = basePath() + '/user/' + gd.emptyUserId;
    var expected = {error: 'User not found'};
    req(server)
      .get(uri)
      .auth(username(), password())
      .expect(expected, done);
  });

  it('PLACEHOLDER: decide if we want a 404, current error message, or a better error message for getting a nonexistent user');

  //currently just id, username, first, last, email
  it('the data retrieved for a user should match the data used to generate the user', function(done) {
    cbu = 'dynamicBooks';
    gd.newUser
      .then(function(user) {
        var uri = basePath() + '/user/' + user.dataValues.id;
        var expected = {
          id: user.dataValues.id,
          username: user.dataValues.username,
          firstname: user.dataValues.firstname,
          lastname: user.dataValues.lastname,
          email: user.dataValues.email};
        req(server)
          .get(uri)
          .auth(username(), password())
        //TODO: go ahead and test it out, but when this fails (from not matching), the error is totally
        // not helpful.  this pattern needs to be redone.
          .expect(expected, done);
      });
  });

  it('the data retrieved for a suspended user should match the data used to generate the user', function(done) {
    cbu = 'dynamicBooks';
    gd.suspendedUser
      .then(function(user) {
        var uri = basePath() + '/user/' + user.dataValues.id;
        var expected = {
          id: user.dataValues.id,
          username: user.dataValues.username,
          firstname: user.dataValues.firstname,
          lastname: user.dataValues.lastname,
          email: user.dataValues.email};
        req(server)
          .get(uri)
          .auth(username(), password())
        //TODO: go ahead and test it out, but when this fails (from not matching), the error is totally
        // not helpful.  this pattern needs to be redone.
          .expect(expected, done);
      });
  });

  it('the data retrieved for a suspended user should match the data used to generate the user', function(done) {
    cbu = 'dynamicBooks';
    gd.suspendedUser
      .then(function(user) {
        var uri = basePath() + '/user/' + user.dataValues.id;
        var expected = {
          id: user.dataValues.id,
          username: user.dataValues.username,
          firstname: user.dataValues.firstname,
          lastname: user.dataValues.lastname,
          email: user.dataValues.email};
        req(server)
          .get(uri)
          .auth(username(), password())
        //TODO: go ahead and test it out, but when this fails (from not matching), the error is totally
        // not helpful.  this pattern needs to be redone.
          .expect(expected, done);
      });
  });
});

// describe('When I request a user profile from haydenMcNeil', function() {
//   it('for a nonexistent user the api returns a 404 error', function(done) {
//     cbu = 'haydenMcNeil';
//     var uri = basePath() + '/user/' + emptyUserId;
//     req(server)
//       .get(uri)
//       .auth(username(), password())
//       .expect(404, done);
//   });

//   //currently just id, username, first, last, email
//   it('the data retrieved for a user should match the data used to generate the user');
//   it('the data retrieved for a suspended user should match the data used to generate the user');
// });
