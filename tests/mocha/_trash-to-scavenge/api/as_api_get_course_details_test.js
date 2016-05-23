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
// Given I want a specific course registered at a BU
// When I make a request ECO/api/businessunit/:buName/course/:id with a BU and course id
// Then I receive a course's details and registered lti links, and quizzes

describe('When I request a courses details from dynamicBooks', function() {
  it('for a nonexistent course');
  it('for a normal course');
  it('for a disabled course');
  it('for an expired course');
  it('for a course with enrolment disabled');
  it('for a course with enrolment enabled only in the future');
});

describe('When I request a courses details from haydenMcNeil', function() {
  it('for a nonexistent course');
  it('for a normal course');
  it('for a disabled course');
  it('for an expired course');
  it('for a course with enrolment disabled');
  it('for a course with enrolment enabled only in the future');
});
