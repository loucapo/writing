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
    mut = container.getInstanceOf('buildUpPathsForEndPoint');
    curriedValidator = container.getInstanceOf('curriedValidator');
    swaggerDoc = require('./test_swagger_spec.json');
    curriedVal = curriedValidator(swaggerDoc);
    path = swaggerDoc.paths["/activity/getActivity/{id}"];
  });

  beforeEach(() => {

  });

  describe('BUILD UP PATH FOR ENDPOINT', function () {
    context('when calling function with no path', function () {
      it('should throw propper error', async function () {
        let error;
        try {
          const result = mut();
        }catch(err) {
          error = err;
        }
        error.should.not.be.null;
        error.message.should.equal(`There must be a path passed into 'buildUpPathsForEndPoint'`)
      });
    });
  });

  describe('BUILD UP PATH FOR ENDPOINT', function () {
    context('when calling function with no curriedValidator', function () {
      it('should throw propper error', async function () {
        let error;
        try {
          const result = mut(path);
        }catch(err) {
          error = err;
        }
        error.should.not.be.null;
        error.message.should.equal(`There must be a curriedValidator passed into 'buildUpParamters'`)
      });
    });
  });

  describe('BUILD UP PATH FOR ENDPOINT', function () {
    context('when calling function', function () {
      it('should return object with key for all verbs', async function () {
        const result = mut(path, curriedVal);
        result.get.should.not.be.null;
        result.post.should.not.be.null;
      });
    });
  });

  describe('BUILD UP PATH FOR ENDPOINT', function () {
    context('when calling function', function () {
      it('should put validators on all parameters', async function () {
        const result = mut(path, curriedVal);
        result.get.resolvedParameters.length.should.be.above(0);
        result.get.resolvedParameters.forEach(x=>{
          x.validator.should.not.be.null;
        });
        result.post.resolvedParameters.length.should.be.above(0);
        result.post.resolvedParameters.forEach(x=>{
          x.validator.should.not.be.null;
        });
      });
    });
  });

  describe('BUILD UP PATH FOR ENDPOINT', function () {
    context('when calling function', function () {
      it('should put validators on all responses', async function () {
        const result = mut(path, curriedVal);
        result.get.responses["200"].validator.should.not.be.null;
        result.get.responses["422"].validator.should.not.be.null;
      });
    });
  });

});
