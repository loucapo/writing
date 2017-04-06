// Reducer
export default (state = null, action) => {
  switch (action.type) {
    case 'DRAFT_FOCUS_MODAL': {
      return 'draftFocus';
    }
    default: {
      return state;
    }
  }
};

// Action
export const openDraftFocusModal = () => {
  return {
    type: 'DRAFT_FOCUS_MODAL'
  };
};
