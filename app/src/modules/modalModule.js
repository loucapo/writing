// Reducer
export default (state = null, action) => {
  switch (action.type) {
    case 'DRAFT_FOCUS_MODAL': {
      return 'draftFocus';
    }
    case 'CLOSE_MODAL': {
      return null;
    }
    default: {
      return state;
    }
  }
};

// Actions
export const openDraftFocusModal = () => {
  return {
    type: 'DRAFT_FOCUS_MODAL'
  };
};

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  };
};
