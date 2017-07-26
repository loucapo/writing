import { SUBMIT_DRAFT, UPDATE_DRAFT_PAPER } from '../modules/studentDraftModule';
import { SET_REFLECTION_ANSWERS } from '../modules/reflectionAnswersModule';
import moment from 'moment';

// Reducer
export default (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_DRAFT.SUCCESS: {
      state = {
        ...state,
        draftMessage: {
          status: 'success',
          modified: moment(new Date()).format('MMMM Do, YYYY'),
          draftName: action.action.draftName
        }
      };
      return state;
    }
    case UPDATE_DRAFT_PAPER.SUCCESS: {
      state = {
        ...state,
        saveDraft: {
          status: 'success',
          modified: moment(new Date()).format('MMMM Do, YYYY')
        }
      };
      return state;
    }
    case UPDATE_DRAFT_PAPER.FAILURE: {
      state = {
        ...state,
        saveDraft: {
          status: 'error'
        }
      };
      return state;
    }
    case SET_REFLECTION_ANSWERS.SUCCESS: {
      state = {
        ...state,
        saveReflection: {
          status: 'success',
          modified: moment(new Date()).format('MMMM Do, YYYY')
        }
      };
      return state;
    }
    case SET_REFLECTION_ANSWERS.FAILURE: {
      state = {
        ...state,
        saveReflection: {
          status: 'error'
        }
      };
      return state;
    }
  }
  return state;
};
