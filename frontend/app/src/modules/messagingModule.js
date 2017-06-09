import { SUBMIT_DRAFT } from '../modules/studentDraftModule';
import moment from 'moment';

// Reducer
export default (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_DRAFT.SUCCESS: {
      state = {
        ...state,
        submitDraft: {
          status: 'success',
          modified: moment(new Date()).format('MMMM Do, YYYY'),
          draftName: action.action.draftName
        }
      };
    }
  }
  return state;
};
