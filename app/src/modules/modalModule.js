// Reducer
export default (state = null, action) => {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return action.modalName;
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
export const openModal = (modalName) => {
  return {
    type: 'OPEN_MODAL',
    modalName
  };
};

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  };
};
