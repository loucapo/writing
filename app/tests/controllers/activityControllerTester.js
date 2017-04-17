// let demand = require('must');
let chai = require('chai');
let should = chai.should();
const registry = require('./../../registry-test');
const uuid = require('uuid');

let td = require('testdouble');

describe('Activity Test', function() {
  let mut;
  let repositoryStub;
  let activity;
  let ctx;
  let sqlLibrary;
  let updatedActivity;
  let _body;
  let _userId;
  let rubricId = uuid.v4();


  before(function () {
    // set up mock for repo
    repositoryStub = td.function('repository');

    // set up DIC and get instance of mut
    const container = registry({repositoryStub});
    sqlLibrary = container.getInstanceOf('sqlLibrary');
    mut = container.getInstanceOf('activityController');
  });

  beforeEach(() => {
    td.reset();
    activity = {
      id: "f775f8e2-069f-4c6d-b5cd-999e75b63bfc",
      title: "hello",
      prompt: "This is an activity prompt for this activity.",
      rubricId
    };
  });

  describe('#ACTIVITY CONTROLLER', () => {
    describe('ACTIVITY (GET)', () => {
      context('when calling activity with proper input', () => {
        it('should return proper body properties', async () => {
          ctx = {params: {id: 1}};

          td.when(repositoryStub(sqlLibrary.activity, 'getActivityById', ctx.params)).thenReturn([activity]);

          let result = await mut.getActivity(ctx);
          result.body.status.should.equal(200);
          result.body.payload.should.equal(activity);
          result.body.success.should.be.true;
        });
      });
    });

    describe('ACTIVITY (PUT)', () => {
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
          params: {id: updatedActivity.id},
          request: {
            body: updatedActivity
          }
        };
        _body = ctx.request.body;
        _userId = ctx.state.user.user_data.id;
      });


      context('when updating activity', () => {
        it('should call repository to get activity', async () => {
          td.when(repositoryStub(sqlLibrary.activity, 'getActivityById', {id: ctx.params.id})).thenReturn([activity]);
          await mut.updateActivityPrompt(ctx);
        });
      });

      context('when updating activity with bad id', () => {
        it('should return 500', async () => {
          ctx.params.id=666;
          td.when(repositoryStub(sqlLibrary.activity, 'getActivityById', {id: 666})).thenReturn(undefined);
          let result;
          try {
            result = await mut.updateActivityPrompt(ctx);
          }catch(ex){
            result = ex.message;
          }
          result.should.equal(`No activity found with id: ${ctx.params.id}`);
        })
      });

      context('when updating activity', () => {
        it('should return 200', async () => {
          let payload = _body;
          payload.modifiedById = _userId;
          td.when(repositoryStub(sqlLibrary.activity, 'getActivityById', {id: ctx.params.id})).thenReturn([activity]);
          td.when(repositoryStub(sqlLibrary.activity, 'updateActivityPrompt', payload)).thenReturn(activity);
          let result = await mut.updateActivityPrompt(ctx);
          result.status.should.equal(200);
        })
      });

      context('when updating activity', () => {
        it('should put new values on activity', async () => {
          td.when(repositoryStub(sqlLibrary.activity, 'getActivityById', {id: ctx.params.id})).thenReturn([activity]);
          let captor = td.matchers.captor();
          td.when(repositoryStub(sqlLibrary.activity, 'updateActivityPrompt', _body));
          let result = await mut.updateActivityPrompt(ctx);
          td.verify(repositoryStub(sqlLibrary.activity, 'updateActivityPrompt', captor.capture()));
          captor.values[0].prompt.should.equal(updatedActivity.prompt);
        })
      })
    });

    describe('ACTIVITY (PUT) RUBRIC', () => {
      beforeEach(() => {
        updatedActivity = {
          id: "f775f8e2-069f-4c6d-b5cd-999e75b63bfc",
          rubricId: uuid.v4()
        };

        ctx = {
          state: {
            user: {
              user_data: {
                id: 123
              }
            }
          },
          params: {id: updatedActivity.id},
          request: {
            body: updatedActivity
          }
        };
        _body = ctx.request.body;
        _userId = ctx.state.user.user_data.id;
      });

      context('when updating activity', () => {
        it('should call repository to get activity', async () => {
          td.when(repositoryStub(sqlLibrary.activity, 'getActivityById', {id: ctx.params.id})).thenReturn([activity]);
          await mut.updateActivityPrompt(ctx);
          td.verify(repositoryStub(sqlLibrary.activity, 'getActivityById', {id: ctx.params.id}));
        });
      });

      context('when updating activity with bad id', () => {
        it('should return 500', async () => {

          ctx.params.id=666;
          td.when(repositoryStub(sqlLibrary.activity, 'getActivityById', {id: 666})).thenReturn(undefined);
          let result;
          try {
            result = await mut.updateActivityPrompt(ctx);
          }catch(ex){
            result = ex.message;
          }
          result.should.equal(`No activity found with id: ${ctx.params.id}`);

        })
      });

      context('when updating activity', () => {
        it('should return 200', async () => {
          let payload = _body;
          payload.modifiedById = _userId;
          td.when(repositoryStub(sqlLibrary.activity, 'getActivityById', {id: ctx.params.id})).thenReturn(activity);
          td.when(repositoryStub(sqlLibrary.activity, 'updateActivityRubric', payload)).thenReturn(activity);
          let result = await mut.updateActivityRubric(ctx);
          result.status.should.equal(200);
        })
      });

      context('when updating activity', () => {
        it('should put new values on activity', async () => {
          td.when(repositoryStub(sqlLibrary.activity, 'getActivityById', {id: ctx.params.id})).thenReturn(activity);
          let captor = td.matchers.captor();
          let result = await mut.updateActivityRubric(ctx);
          td.verify(repositoryStub(sqlLibrary.activity, 'updateActivityRubric', captor.capture()));
          captor.values[0].rubricId.should.equal(updatedActivity.rubricId);
        })
      })
    });
  });
});
