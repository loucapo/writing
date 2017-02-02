// var demand = require('must');
var chai = require('chai');
var should = chai.should();
const registry = require('./../../registry-test');
require('babel-polyfill');
require('babel-register');
var td = require('testdouble');

describe('Container Test', function() {
  var mut;
  var repositoryStub;
  var activitySql;
  var draftSql;
  var activity;
  var drafts;
  var ctx;

  before(function () {
    // set up mock for repo
    var repo = {
      row(sql) {
      },
      rows(sql) {
      },
      query(sql) {
      }
    };
    repositoryStub = td.object(repo);

    // set up DIC and get instance of mut
    const container = registry({repositoryStub});
    mut = container.getInstanceOf('activityController');

  });

  beforeEach(() => {
    ctx = {params: {id: 1}};
    activitySql = `select * from "activity" where "id" = '1'`;
    draftSql = `select * from "draft" where "id" IN ('1','2','3')`;
    activity = {
      document: {
        id: 123,
        drafts: [1, 2, 3]
      }
    };
    drafts = [
      {document: {id: 1}},
      {document: {id: 2}},
      {document: {id: 3}}
    ];
  });

  describe('#ACTIVITY CONTROLLER', () => {
    describe('ACTIVITY', function () {
      context('when calling activity with proper input', function () {
        it('should return proper body properties', async function () {
          td.when(repositoryStub.row(activitySql)).thenReturn(activity);
          td.when(repositoryStub.rows(draftSql)).thenReturn(drafts);

          var result = await mut.activity(ctx);
          result.body.status.should.equal(200);
          result.body.success.should.be.true;
          result.body.data.drafts.should.eql([{id: 1}, {id: 2}, {id: 3}])
        });
      });
    });
  });
});
