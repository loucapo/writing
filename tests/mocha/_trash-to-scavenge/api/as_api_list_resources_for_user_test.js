/* global require, it, describe, console, before, expect*/
var config = require('../../config/config');
var chai = require('chai');
var expect = chai.expect;
var req = require('supertest');

var server = config.stemAPI.url;

var cbu = null; //current business unit
var emptyUserId = null;

var username = function() {
  return cbu;
};
var password = function() {
  return config.toolProviders[cbu].password;
};
var basePath = function() {
  return '/v1/api/' + cbu;
};

// APIDOC: currently, all resources listed associated with a user
//   (/api/businessunit/:buName/user/:userid/resource) must be connected to a course.  This request
//   will actually return a list of visible (active?) courses in which the user is enrolled,
//   and each of those courses 'resources', if any.

before(function() {
  emptyUserId = '950'; //should be high enough to never be trampled on?  the point is that it mustn't exist.
});

// As a valid API consumer
// Given I want a list of available resources for a user at a specifc BU
// When I request that list at ECO/api/businessunit/:buName/user/:id/resource with a BU and user id
// Then I receive a list of courses and the resources with each course

describe('When I request a list of resources from dynamicBooks', function() {
  it('for a nonexistent user the api returns a 404 error', function(done) {
    cbu = 'dynamicBooks';
    var uri = basePath() + '/user/' + emptyUserId + '/resource';
    req(server)
      .get(uri)
      .auth(username(), password())
      .expect(404, done);
  });

  it('for a user enrolled in 1 invisible class');
  it('for a user enrolled in 1 visible class');
  it('for a user enrolled in 1 visible and 1 invisible class');
  it('for a user enrolled in a class with an LTI link');
  it('for a user enrolled in a class with a moodle quiz');
  it('for a user enrolled in a class with an LTI link and a moodle quiz');
  it('for a user enrolled in a class with 14 LTI links and 14 moodle quizzes');
  it('for a user enrolled in a class with no LTI links and no moodle quizzes');
  it('?? does what for a suspended user?');
});

describe('When I request a list of resources from haydenMcNeil', function() {
  it('for a nonexistent user the api returns a 404 error', function(done) {
    cbu = 'haydenMcNeil';
    var uri = basePath() + '/user/' + emptyUserId + '/resource';
    req(server)
      .get(uri)
      .auth(username(), password())
      .expect(404, done);
  });

  it('for a user enrolled in 1 invisible class');
  it('for a user enrolled in 1 visible class');
  it('for a user enrolled in 1 visible and 1 invisible class');
  it('for a user enrolled in a class with an LTI link');
  it('for a user enrolled in a class with a moodle quiz');
  it('for a user enrolled in a class with an LTI link and a moodle quiz');
  it('for a user enrolled in a class with 14 LTI links and 14 moodle quizzes');
  it('for a user enrolled in a class with no LTI links and no moodle quizzes');
  it('?? does what for a suspended user?');
});

describe('BACKLOG: ', function() {
  it('quizzes should be listed as a primary key in the resource hash, not just ' +
     'as children of a course');
  it('LTIlinks should be listed as a primary key in the resource hash, not just ' +
     'as children of a course');
  it('any other pertinent resources should be listed as a primary key in the resource hash, ' +
     'not just as children of a course');
  it('?? resources that are associated with a course, while displayed in the resources response ' +
     'in their own key, should contain some indicator of their containing course(s) ');
  it('requesting anything after an invalid :bu should return a 404')
});
