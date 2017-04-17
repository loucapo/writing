// let demand = require('must');
let chai = require('chai');
let should = chai.should();
const registry = require('./../../registry-test');
const uuid = require('uuid');

let td = require('testdouble');

describe('CRITERIA TEST', function() {
  let mut;
  let repositoryStub;
  let ctx;
  let sqlLibrary;
  let _userId;
  let criteria1;
  let criteria2;

  before(function () {
    // set up mock for repo
    repositoryStub = td.function('repository');

    // set up DIC and get instance of mut
    const container = registry({repositoryStub});
    sqlLibrary = container.getInstanceOf('sqlLibrary');
    mut = container.getInstanceOf('criteriaController');

  });

  beforeEach(() => {
    td.reset();
    criteria1 = {
      id: "f775f8e2-069f-4c6d-b5cd-999e75b63bfc",
      title: "hello",
      description: "This is a criteria description.",
    };
    criteria2 = {
      id: "fff5f8e2-069f-4c6d-b5cd-999e75b63bfc",
      title: "hello2",
      description: "This is a criteria description2.",
    };
  });

  describe('#CRITERIA CONTROLLER', () => {
    describe('CRITERIA (GET)', () => {
      context('when calling criteria with proper input', () => {
        it('should return proper body properties', async () => {
          ctx = {};
          let _criteria = [criteria1, criteria2];
          td.when(repositoryStub(sqlLibrary.criteria, 'getCriteria', {})).thenReturn(_criteria);

          let result = await mut.getCriteria(ctx);
          result.body.status.should.equal(200);
          result.body.payload.should.equal(_criteria);
          result.body.success.should.be.true;
        });
      });
    });
  });
});
