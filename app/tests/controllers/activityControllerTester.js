// let demand = require('must');
let chai = require('chai');
let should = chai.should();
const registry = require('./../../registry-test');
const path = require('path');

require('babel-polyfill');
require('babel-register');
let td = require('testdouble');

describe('Container Test', function() {
  let mut;
  let repositoryStub;
  let activity;
  let ctx;

  before(function () {
    // set up mock for repo
    repositoryStub = td.function('repository');

    // set up DIC and get instance of mut
    const container = registry({repositoryStub});
    mut = container.getInstanceOf('activityController');

  });

  beforeEach(() => {
    ctx = {params: {id: 1}};

    activity = {
        id: 123,
        title: "hello"
    };
  });

  describe('#ACTIVITY CONTROLLER', () => {
    describe('ACTIVITY', function () {
      context('when calling activity with proper input', function () {
        it('should return proper body properties', async function () {
          let activitySql = path.join(__dirname,`./../../src/repositories/sql/activity.sql`);

          td.when(repositoryStub(activitySql, 'get_activity_by_id', ctx.params)).thenReturn(activity);

          let result = await mut.activity(ctx);
          result.body.status.should.equal(200);
          result.body.payload.should.equal(activity);
          result.body.success.should.be.true;
        });
      });
    });
  });
});
