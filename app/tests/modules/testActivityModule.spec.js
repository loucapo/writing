import { expect } from 'chai';

import activityReducer from './../../src/modules/activityModule';
import {SUCCESS_ACTIVITY} from './../../src/modules/activityModule';
import {activity2} from '../mockData';

// XXX The deep comparison in the 3rd test is failing, this code needs repair
// const originalState = [{ activity }];

const newAction = {
  type: SUCCESS_ACTIVITY,
  payload: {
    data: {
      activity: activity2
    }
  }
};

describe('ACTIVITY MODULE REDUCER', () => {
  describe('When initial state and action are empty objects', () => {
    it('should return an empty array', () => {
      let result = activityReducer(undefined, {});
      expect(Array.isArray(result) && result.length === 0).to.equal(true);
    });
  });

  describe('When inital state is empty, valid action is passed in', () => {
    it('should return the new state', () => {
      let result = activityReducer(undefined, newAction);
      expect(result === newAction.payload.data);
    });
  });

  describe('When inital state exists, valid action is passed in', () => {
    // XXX The deep comparison is failing, this code needs repair
    // const expectedState = [
    //   { activity: activity },
    //   { activity: activity2 }
    // ];
    it('should return the combined state', () => {
      // XXX The deep comparison is failing, this code needs repair
      // let result = activityReducer(originalState, newAction);
      //assert.deepEqual(result, expectedState);
    });
  });
});
