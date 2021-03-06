// let demand = require('must');
let chai = require('chai');
let should = chai.should();
const registry = require('./../../registry-test');
const uuid = require('uuid');
const repository = require('./../../src/repositories/repository');

let td = require('testdouble');

describe('RUBRIC TEST', function() {
  let mut;
  let repositoryStub;
  let ctx;
  let sqlLibrary;
  let _userId;
  let rubric1;
  let rubric2;
  let rubricCrit1;
  let rubricCrit2;
  let rubricCrit3;
  let rubricCrit4;
  let critId1 = uuid.v4();
  let critId2 = uuid.v4();
  let critId3 = uuid.v4();
  let critId4 = uuid.v4();
  before(function () {
    // set up mock for repo
    repositoryStub = td.object(repository);

    // set up DIC and get instance of mut
    const container = registry({repositoryStub});
    sqlLibrary = container.getInstanceOf('sqlLibrary');
    mut = container.getInstanceOf('rubricController');

  });

  beforeEach(() => {
    td.reset();
    rubric1 = {
      rubricId: "f775f8e2-069f-4c6d-b5cd-999e75b63bfc",
      title: "hello",
      description: "This is a rubric description.",
    };
    rubric2 = {
      rubricId: "fff5f8e2-069f-4c6d-b5cd-999e75b63bfc",
      title: "hello2",
      description: "This is a rubric description2.",
    };
    rubricCrit1 =  {rubricId:'f775f8e2-069f-4c6d-b5cd-999e75b63bfc', criterionId:critId1};
    rubricCrit2 =  {rubricId:'f775f8e2-069f-4c6d-b5cd-999e75b63bfc', criterionId:critId2};
    rubricCrit3 =  {rubricId:'fff5f8e2-069f-4c6d-b5cd-999e75b63bfc', criterionId:critId3};
    rubricCrit4 =  {rubricId:'fff5f8e2-069f-4c6d-b5cd-999e75b63bfc', criterionId:critId4};
  });

  describe('#RUBRIC CONTROLLER', () => {
    describe('RUBRIC (GET) ALL', () => {
      context('when calling rubric with proper input', () => {
        it('should return proper body properties', async () => {
          ctx = {};

          let rubrics = [rubric1, rubric2];
          td.when(repositoryStub.query(sqlLibrary.rubric, 'getRubrics', {})).thenReturn(rubrics);
          td.when(repositoryStub.query(sqlLibrary.rubric, 'getRubricCriteria', {})).thenReturn([
            rubricCrit1,
            rubricCrit2,
            rubricCrit3,
            rubricCrit4
          ]);
          let result = await mut.getRubrics(ctx);
          const rub1 = result.body.find(x=>x.rubricId === 'f775f8e2-069f-4c6d-b5cd-999e75b63bfc');
          const rub2 = result.body.find(x=>x.rubricId === 'fff5f8e2-069f-4c6d-b5cd-999e75b63bfc');
          rub1.criteria.find(x=>x === critId1).should.not.be.null;
          rub1.criteria.find(x=>x === critId2).should.not.be.null;
          rub2.criteria.find(x=>x === critId3).should.not.be.null;
          rub2.criteria.find(x=>x === critId4).should.not.be.null;
        });
      });
    });

    describe('RUBRIC (GET)', () => {
      context('when calling rubric with proper input', () => {
        it('should return proper body properties', async () => {
          ctx = {params: {rubricId:rubric1.id}};

          td.when(repositoryStub.query(sqlLibrary.rubric, 'getRubricById', {rubricId: ctx.params.rubricId})).thenReturn(rubric1);

          let result = await mut.getRubricById(ctx);
          result.body.should.equal(rubric1);
        });
      });
    });
  });
});
