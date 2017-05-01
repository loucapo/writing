import uuid from 'uuid'
import mut from './../../src/utilities/reducerMerge';

import chai from 'chai';
var expect = chai.expect;
chai.should();

describe('REDUCER MERGE', () => {
  var activity1Id;
  var activity2Id;
  var activity1;
  var activity2;
  var activity3;

  beforeEach(() => {
    activity1Id = uuid.v4();
    activity2Id = uuid.v4();
    activity1 = {
      activityId: activity1Id,
      title:'Instructor Review'
    };

    activity2 = {
      activityId:activity1Id,
      title:'Peer Review'
    };

    activity3 = {
      activityId:activity2Id,
      title:'Peer Review'
    };
  });

  describe('When currentItems is empty and newItems is empty', () => {
    it('should return empty array', () => {
      let result = mut(undefined, []);
      result.length.should.equal(0);
    });
  });

  describe('When currentItems is empty and newItems is a singleItem', () => {
    it('should return array of that newItem', () => {

      let result = mut(undefined, activity1);
      result[0].title.should.equal('Instructor Review');
    });
  });

  describe('When currentItems is empty and newItems is an array', () => {
    it('should return that array of newItems', () => {

      let result = mut(undefined, [activity1, activity3], 'activityId');
      result[0].title.should.equal('Instructor Review');
    });
  });

  describe('When currentItems is NOT empty and newItems is an array of items with different ids', () => {
    it('should add new item to current items', () => {

      let result = mut([activity1], [activity3], 'activityId');
      result.length.should.equal(2);
    });
  });

  describe('When currentItems is NOT empty and newItems is an array of items with the same ids', () => {
    it('should replace current item with new', () => {

      let result = mut([activity1], [activity2]);
      result[0].title.should.equal('Peer Review');
    });
  });

});
