const chai = require('chai');
const should = chai.should();
const registry = require('./../../../../registry-test');

describe('COMPILER TEST', function() {
  let mut;
  let curriedValidator;
  let curriedVal;
  let swaggerDoc;
  let path;

  before(function () {
    // set up DIC and get instance of mut
    const container = registry();
    mut = container.getInstanceOf('addValidatorsToParameters');
    curriedValidator = container.getInstanceOf('curriedValidator');
    swaggerDoc = require('./test_swagger_spec.json');
    curriedVal = curriedValidator(swaggerDoc);
    path = swaggerDoc.paths["/activity/getActivity/{id}"];
  });

  beforeEach(() => {

  });

  describe('ADD VALIDATORS TO PARAMETERS', function () {
    context('when calling function with no verb', function () {
      it('should throw propper error', async function () {
        let error;
        try {
          const result = mut();
        }catch(err) {
          error = err;
        }
        error.should.not.be.null;
        error.message.should.equal(`Must provide verb to 'addValidatorsToParamerters'`)
      });
    });

    context('when calling function with param in query', function () {
      it('should return validator even though curriedVal not provided', async function () {
        let verb = {
          resolvedParameters: [{
            name: 'id',
            in: 'query',
            description: 'Theidoftheactivityyouwishtoretrieve',
            required: true,
            type: 'string'
          }]
        };
        mut(verb);
        verb.resolvedParameters[0].validator.should.not.be.null;
      });
    });

    context('when calling function with param in header', function () {
      it('should return validator even though curriedVal not provided', async function () {
        let verb = {
          resolvedParameters: [{
            name: 'id',
            in: 'header',
            description: 'Theidoftheactivityyouwishtoretrieve',
            required: true,
            type: 'string'
          }]
        };
        mut(verb);
        verb.resolvedParameters[0].validator.should.not.be.null;
      });
    });

    context('when calling function with param in body', function () {
      it('should return validator provided by curried Val', async function () {
        let verb = {
          resolvedParameters: [{
            name: 'id',
            in: 'body',
            description: 'Theidoftheactivityyouwishtoretrieve',
            required: true,
            type: 'string'
          }]
        };
        mut(verb, curriedVal);
        verb.resolvedParameters[0].validator.should.not.be.null;
      });
    });


  });
});
