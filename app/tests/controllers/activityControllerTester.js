// let demand = require('must');
let chai = require('chai');
let should = chai.should();
const registry = require('./../../registry-test');
const path = require('path');

let td = require('testdouble');

describe('Container Test', function() {
  let mut;
  let repositoryStub;
  let activity;
  let ctx;
  let activitySql;
  let updatedActivity;
  let _body;
  let _userId;

  before(function () {
    // set up mock for repo
    repositoryStub = td.function('repository');

    activitySql = path.join(__dirname,`./../../src/repositories/sql/activity.sql`);

    // set up DIC and get instance of mut
    const container = registry({repositoryStub});
    mut = container.getInstanceOf('activityController');
  });

  beforeEach(() => {
    activity = {
      id: "f775f8e2-069f-4c6d-b5cd-999e75b63bfc",
      title: "hello",
      prompt: "This is an activity prompt for this activity."
    };
  });

  describe('#ACTIVITY CONTROLLER', () => {
    describe('ACTIVITY (GET)', () => {
      context('when calling activity with proper input', () => {
        it('should return proper body properties', async () => {
          ctx = {params: {id: 1}};

          td.when(repositoryStub(activitySql, 'getActivityById', ctx.params)).thenReturn(activity);

          let result = await mut.getActivity(ctx);
          result.body.status.should.equal(200);
          result.body.payload.should.equal(activity);
          result.body.success.should.be.true;
        });
      });
    });

    describe('ACTIVITY (POST)', () => {
      beforeEach(() => {
        updatedActivity = {
          id: "f775f8e2-069f-4c6d-b5cd-999e75b63bfc",
          prompt: "This is a new activity prompt."
        };

        ctx = {
          state: {
            user: {
              user_data: {
                id: 123
              }
            }
          },
          request: {
          body: updatedActivity
          }
        };
        _body = ctx.request.body;
        _userId = ctx.state.user.user_data.id;
      });


      context('when updating activity', () => {
        it('should call repository to get activity', async () => {
          td.when(repositoryStub(activitySql, 'getActivityById', {id: _body.id})).thenReturn(activity);
          await mut.updateActivity(ctx);
          td.verify(repositoryStub(activitySql, 'getActivityById', {id: _body.id}));
        });
      })

      context('when updating activity with bad id', () => {
        it('should return 500', async () => {
          ctx.request.body.id=666;
          td.when(repositoryStub(activitySql, 'getActivityById', {id: 666})).thenReturn(undefined);
          let result = await mut.updateActivity(ctx);
          result.status.should.equal(500);
          result.errors[0].should.equal(`No activity found with id ${_body.id}`);
        })
      })

      context('when updating activity', () => {
        it('should return 200', async () => {
          let payload = _body;
          payload.modifiedById = _userId;
          td.when(repositoryStub(activitySql, 'updateActivityPrompt', payload)).thenReturn(activity);
          let result = await mut.updateActivity(ctx);
          result.status.should.equal(200);
        })
      })

      context.only('when updating activity', () => {
        it('should put new values on activity', async () => {
          td.when(repositoryStub(activitySql, 'getActivityById', {id: _body.id})).thenReturn(activity);
          let captor = td.matchers.captor();
          td.when(repositoryStub(activitySql, 'updateActivityPrompt', _body));
          let result = await mut.updateActivity(ctx);
          td.verify(repositoryStub(activitySql, 'updateActivityPrompt', captor.capture()));
          captor.values[0].prompt.should.equal(updatedActivity.prompt);
        })
      })
    });
  });
});
