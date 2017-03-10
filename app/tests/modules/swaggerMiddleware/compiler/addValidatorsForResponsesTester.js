const chai = require('chai');
const should = chai.should();
const registry = require('./../../../../registry-test');

require('babel-polyfill');
require('babel-register');

describe('COMPILER TEST', function() {
  let mut;
  let curriedValidator;
  let curriedVal;
  let swaggerDoc;
  let path;

  before(function () {
    // set up DIC and get instance of mut
    const container = registry();
    mut = container.getInstanceOf('addValidatorsForResponses');
    curriedValidator = container.getInstanceOf('curriedValidator');
    swaggerDoc = require('./test_swagger_spec.json');
    curriedVal = curriedValidator(swaggerDoc);
    path = swaggerDoc.paths["/activity/getActivity/{id}"];
  });

  beforeEach(() => {

  });

  describe('ADD VALIDATORS FOR RESPONSES', function () {
    context('when calling function with no verb', function () {
      it('should throw propper error', async function () {
        let error;
        try {
          const result = mut();
        }catch(err) {
          error = err;
        }
        error.should.not.be.null;
        error.message.should.equal(`Must provide verb to 'addValidatorsForResponses'`)
      });
    });

    context('when calling function with no schema in response', function () {
      it('should provide validator even if curried val not provided', async function () {
        let verb = {
          responses: {
            "200" :{
              description: "Success"
            }
          }
        };
        mut(verb);
        verb.responses["200"].validator.should.not.be.null;
      });
    });

    context('when calling function with schema in response', function () {
      it('should return validator provided by curried Val', async function () {
        let verb = {
          responses: {
            "200": {
              description: "Success",
              schema: {
                title: 'standardResponse',
                properties: {success: {type: 'boolean'}, payload: {type: 'object'}}
              }
            }
          }
        };
        mut(verb, curriedVal);
        verb.responses["200"].validator.should.not.be.null;
      });
    });


  });
});
