/* global require, it, describe, console, before, beforeEach, afterEach, expect */
var config = require('../../config/config');
var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var req = require('supertest');
var Promise = require('bluebird');
//var sets = require('simplesets');
var Set = require('set');

var fixtures = require('../fixtures/fixtures');
var dbc = require('../fixtures/db_control');
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

// As a valid API consumer
// Given I want all the users registered with a BU
// When I make a request ECO/api/businessunit/:buName/user with a BU
// Then I receive a list of users

describe('When I request a list of users from dynamicBooks', function() {
  // Left pending for future discussion, probably after supplanting moodle as
  // the supreme oracle of user management and profile storage, on whether we
  // should return guest and admin or any similar roles, or solely students.  and faculty?
  it('when there are no users, API returns an empty list: see source');

  it('when there are no users created, API returns only guest and admin users', function(done) {
    cbu = 'dynamicBooks';
    var uri = basePath() + '/user';
    dbc.dropDB('dynamicBooks', 'moodle')
      .then(function() {
        return dbc.loadSQL('dynamicBooks', './fixtures/sql_dumps/moodle-2.8-configured-and-with-plugin.sql');
      }).then(function() {
        req(server)
          .get(uri)
          .auth(username(), password())
          .end(function(err, res) {
            expect(res.body).to.have.length(2);
            expect(res.body[0]).to.have.all.keys(['id', 'username', 'firstname', 'lastname', 'email']);
            expect(res.body[0].id).to.equal(1);
            expect(res.body[0].username).to.equal('guest');
            expect(res.body[1]).to.have.all.keys(['id', 'username', 'firstname', 'lastname', 'email']);
            expect(res.body[1].id).to.equal(2);
            expect(res.body[1].username).to.equal('admin');
            done();
          });
      });
  });

  it('when there are a mix of special, normal, suspended, and deleted users, API returns all', function(done) {
    cbu = 'dynamicBooks';
    var uri = basePath() + '/user';
    dbc.dropDB('dynamicBooks', 'moodle')
      .then(function() {
        return dbc.loadSQL('dynamicBooks', './fixtures/sql_dumps/moodle-2.8-configured-and-with-plugin.sql');
      }).then(function() {
        gd.basicUsers = [];
        gd.deletedUsers = [];
        gd.suspendedUsers = [];
        for (i = 0; i < 35; i++) {
          gd.basicUsers.push(fixtures.writeFixtureData('User', 'basic'));
          gd.deletedUsers.push(fixtures.writeFixtureData('User', 'basic', 'deleted'));
          gd.suspendedUsers.push(fixtures.writeFixtureData('User', 'basic', 'suspended'));
        }
      }).then(function() {
        var users = _.flatten([gd.basicUsers, gd.suspendedUsers, gd.deletedUsers], true);
        Promise.all(users)
          .then(function(users) {
            req(server)
              .get(uri)
              .auth(username(), password())
              .end(function(err, res) {
                expect(res.body).to.have.length(107);
                users = _.map(users, function(user) {
                  return {
                    id: user.dataValues.id,
                    username: user.dataValues.username,
                    firstname: user.dataValues.firstname,
                    lastname: user.dataValues.lastname,
                    email: user.dataValues.email};
                });

                var created = new Set(users);
                var returned = new Set(res.body);
                var ks = Object.keys(created.difference(returned)._set);
                var setDiff = _.map(ks, function(o) {return JSON.parse(o);});

                //TODO: this stanza can be factored out, will/does happen repeatedly.
                expect(setDiff).to.have.length(2);
                expect(setDiff[0]).to.have.all.keys(['id', 'username', 'firstname', 'lastname', 'email']);
                expect(setDiff[0].id).to.equal(1);
                expect(setDiff[0].username).to.equal('guest');
                expect(setDiff[1]).to.have.all.keys(['id', 'username', 'firstname', 'lastname', 'email']);
                expect(setDiff[1].id).to.equal(2);
                expect(setDiff[1].username).to.equal('admin');
                done();
              });
          });
      });
  });

  // describe('When I request a list of users from haydenMcNeil', function() {

});
