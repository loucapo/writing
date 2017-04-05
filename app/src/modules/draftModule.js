export const SUCCESS_ACTIVITY = 'wk_frontend/activity/SUCCESS_ACTIVITY';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case 'DRAFT_FOCUS_MODAL': {
      console.log('SUCCESS!!!!!!!')
      // dispatch(openDraftFocusModal)
      // return Object.assign([], state, {
      //   currentModal: 'draftFocus'
      // })
    }
    default: {
      return state;
    }
  }
};

// Action
export const openDraftFocusModal = (click) => {
  return {
    type: 'DRAFT_FOCUS_MODAL',
    currentModal: 'draftFocus'
    // click : click,
  };
};
