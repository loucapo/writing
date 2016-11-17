import uuid from 'uuid';
export const CREATE_OTHER_COMMENT = 'wk_frontend/feedbackTool/CREATE_OTHER_COMMENT';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case CREATE_OTHER_COMMENT: {

    let m = new Map();
      for(let obj of state) {
        if (obj && obj.id) {
          m.set(obj.id, obj);
        }
      }
      m.set(action.comment.id, action.comment);
      return [...m.values()];
    }
    default: {
      return state;
    }
  }
};

// Action
export function submitOtherComment(value) {
  return {
    type: CREATE_OTHER_COMMENT,
    comment: {
      id: uuid.v4(),
      comment: value
    }
  }
}

