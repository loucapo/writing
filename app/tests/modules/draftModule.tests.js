import uuid from 'uuid';
import draftReducer from './../../src/modules/draftModule';
import {SUCCESS_ACTIVITY} from './../../src/modules/draftModule';

import chai from 'chai';
var expect = chai.expect;
chai.should();

describe('DRAFT MODULE REDUCER', () => {
  let action;
  var draft1Id;
  var draft2Id;
  var draft1;
  var draft2;

  beforeEach(() => {
    draft1Id = uuid.v4();
    draft2Id = uuid.v4();
    draft1 = {
      id: draft1Id,
      type:'Instructor Review'
    };

    draft2 = {
      id:draft2Id,
      type:'Peer Review'
    };

    action = {
      type: SUCCESS_ACTIVITY,
      result: {
        data: {
          drafts: [draft1, draft2]
        }
      }
    };
  });

  describe('When initial state and action are empty objects', () => {
    it('should return the initial state - an empty object', () => {
      let result = draftReducer(undefined, {});
      result.length.should.equal(0);
    });
  });

  describe('When inital state is empty and valid action is passed in', () => {
    xit('should put new values in state', () => {

      let result = draftReducer(undefined, action);
      result[0].type.should.equal('Instructor Review');
      result[1].type.should.equal('Peer Review');
    });
  });

  describe('When inital state contains object with same id as the one in the action', () => {
    xit('should replace the old with the new', () => {
      let result = draftReducer([{id:draft1Id,type:"owens type"}], action);
      result[0].type.should.equal('Instructor Review');
    });
  });
});
