const chai = require('chai');
const should = chai.should();
require('babel-polyfill');
require('babel-register');

describe('COMPILER TEST', function() {
  let mut;
  let path;

  before(function () {
    // set up DIC and get instance of mut
    mut = require('./../../../src/modules/swaggerMiddleware/mergeDistinct')();
  });

  beforeEach(() => {

  });

  describe('MERGE DISTINCT', function () {
    context('when merge with no params', function () {
      it('should return empty array', async function () {
        mut().should.eql([]);
      });
    });

    context('when merge with single param', function () {
      it('should convert to array and merge', async function () {
        mut(undefined, {some:"item"} ).should.eql([{some:"item"}]);
      });
    });

    context('when merge with two distinct arrays', function () {
      it('should return single array of all items', async function () {
        var result = mut([{id: "item1"}, {id: "item2"}], [{id: "item3"}, {id: "item4"}]);
        result.length.should.equal(4)
      });
    });

    context('when merge with two overlapping arrays', function () {
      it('should return array the new items not the old', async function () {
        var result = mut([{id: "item1", some:"other value"}, {id: "item2",some:"other value"}], [{id: "item2", some:"other NEW VALUE"}, {id: "item4", some:"other value"}]);
        result.length.should.equal(3);
        result.find(x=>x.id === "item2").some.should.equal("other NEW VALUE")
      });
    });
  });
});

