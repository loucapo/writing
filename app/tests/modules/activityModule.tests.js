import uuid from 'uuid'
import mut from './../../src/modules/activityModule';
import { requestStates } from '../../src/sagas/requestSaga';

const ACTIVITY = requestStates('activity');

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
      type: ACTIVITY.SUCCESS,
      result: {
        data: {
            activity: activity1
          }
      }
    };
  });

  context('When initial state and action are empty objects', () => {
    it('should return the initial state - an empty object', () => {
      let result = mut(undefined, {});
      result.length.should.equal(0);
    });
  });

  context('When inital state is empty and valid SUCCESS_ACTIVITY is passed in', () => {
    it('should put new activity in state', () => {

      let result = mut(undefined, action);
      result[0].title.should.equal('Instructor Review');
    });
  });

  context('When inital state contains object with same id as the one in the action', () => {
    it('should replace the old with the new', () => {
      let result = mut([activity2], action);
      result[0].title.should.equal('Instructor Review');
    });
  });
});
