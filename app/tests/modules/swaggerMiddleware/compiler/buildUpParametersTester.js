const chai = require('chai');
const should = chai.should();
const registry = require('./../../../../registry-test');

describe('COMPILER TEST', function() {
  let mut;
  let path;

  before(function () {
    // set up DIC and get instance of mut
    const container = registry();
    mut = container.getInstanceOf('buildUpParameters');
  });

  let defaultPath = {
    "get": {
      "x-name": "activity",
      "description": "Returns specified activity to the caller",
      "operationId": "activity",
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "The id of the activity you wish to retrieve",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "schema": {
            "$ref": "#/definitions/standardSuccessResponse"
          }
        }
      }
    },
    "post": {
      "x-name": "activity",
      "description": "Returns specified activity to the caller",
      "operationId": "activity",
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "The id of the activity you wish to retrieve",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "schema": {
            "$ref": "#/definitions/standardSuccessResponse"
          }
        }
      }
    }
  };

  beforeEach(() => {

  });

  describe('BUILD UP PARAMETERS', function () {
    context('when calling function with no path', function () {
      it('should throw propper error', async function () {
        let error;
        try {
          const result = mut();
        }catch(err) {
          error = err;
        }
        error.should.not.be.null;
        error.message.should.equal(`There must be a path passed into 'buildUpParamters'`)
      });
    });
  });

  describe('BUILD UP PARAMETERS', function () {
    context('when calling function with no verbName', function () {
      it('should throw propper error', async function () {
        let error;
        try {
          const result = mut(defaultPath);
        }catch(err) {
          error = err;
        }
        error.should.not.be.null;
        error.message.should.equal(`There must be a verbName passed into 'buildUpParamters'`)
      });
    });
  });

  describe('BUILD UP PARAMETERS', function () {
    context('when calling function with no pathparamters and no verbParamters', function () {
      it('should set resolvedParams to empty array', async function () {
        let path = {
          "get": {
            "x-name": "activity",
            "description": "Returns specified activity to the caller",
            "operationId": "activity",
            "responses": {
              "200": {
                "description": "Success",
                "schema": {
                  "$ref": "#/definitions/standardSuccessResponse"
                }
              }
            }
          }
        };
        const result = mut(path, "get");
        result.resolvedParameters.should.eql([]);
      });
    });
  });

  describe('BUILD UP PARAMETERS', function () {
    context('when calling function with no pathparamters', function () {
      it('should set resolvedParams to empty array', async function () {
        let path = {
          "get": {
            "x-name": "activity",
            "description": "Returns specified activity to the caller",
            "operationId": "activity",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "The id of the activity you wish to retrieve",
                "required": true,
                "type": "string"
              }
            ], "responses": {
              "200": {
                "description": "Success",
                "schema": {
                  "$ref": "#/definitions/standardSuccessResponse"
                }
              }
            }
          }
        };
        const result = mut(path, "get");
        result.resolvedParameters[0].should.eql( {
          "name": "id",
          "in": "path",
          "description": "The id of the activity you wish to retrieve",
          "required": true,
          "type": "string"
        });
      });
    });
  });

  //XXX most of the stuff after here is basically testing the mergeDistinct function, which should have it's own
  // tests and furthermore, we don't really use path parameters, and I don't really know what they look like
});
