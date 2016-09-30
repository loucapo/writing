import uuid from 'uuid'
import activityReducer from './../../src/modules/activityModule';
import {SUCCESS_ACTIVITY} from './../../src/modules/activityModule';

import chai from 'chai';
var expect = chai.expect;
chai.should();

describe('ACTIVITY MODULE REDUCER', () => {
  let action;
  var activity1Id;
  var activity1;
  var activity2;

  beforeEach(() => {
    activity1Id = uuid.v4();
    activity1 = {
      id: activity1Id,
      title:'Instructor Review'
    };

    activity2 = {
      id:activity1Id,
      title:'Peer Review'
    };

    action = {
      type: SUCCESS_ACTIVITY,
      payload: {
        data: {
          activity: activity1
        }
      }
    };
  });

  describe('When initial state and action are empty objects', () => {
    it('should return the initial state - an empty object', () => {
      let result = activityReducer(undefined, {});
      result.length.should.equal(0);
    });
  });

  describe('When inital state is empty and valid action is passed in', () => {
    it('should put new values in state', () => {

      let result = activityReducer(undefined, action);
      result[0].title.should.equal('Instructor Review');
    });
  });

  describe('When inital state contains object with same id as the one in the action', () => {
    it('should replace the old with the new', () => {
      let result = activityReducer([activity2], action);
      result[0].title.should.equal('Instructor Review');
    });
  });
});
