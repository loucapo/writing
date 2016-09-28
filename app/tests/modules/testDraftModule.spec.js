import { expect } from 'chai';
import assert from 'assert';

import draftReducer from './../../src/modules/DraftModule';
import {SUCCESS_ACTIVITY} from './../../src/modules/DraftModule';
import {draft1, draft2, draft3, draft4, draft5, draft6} from '../mockData';

const originalState = [draft1, draft2, draft3];

const newAction = {
  type: SUCCESS_ACTIVITY,
  payload: {
    data: {
      drafts: [draft4, draft5, draft6]
    }
  }
};

describe('DRAFT MODULE REDUCER', () => {
  describe('When initial state and action are empty objects', () => {
    it('should return the initial state - an empty object', () => {
      let result = draftReducer(undefined, {});
      expect(Array.isArray(result) && result.length === 0).to.equal(true);
    });
  });

  describe('When inital state is empty, valid action is passed in', () => {
    it('should return the new state', () => {
      let result = draftReducer(undefined, newAction);
      expect(result === newAction.payload.data);
    });
  });

  describe('When inital state is full object (not empty), action contains full object', () => {
    const expectedState = [draft1, draft2, draft3, draft4, draft5, draft6 ];
    it('should return the combined state', () => {
      let result = draftReducer(originalState, newAction);
      assert.deepEqual(result, expectedState);
    });
  });
});
