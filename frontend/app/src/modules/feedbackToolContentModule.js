export const CREATE_FEEDBACK_TOOL_CONTENT_ITEM = 'wk_frontend/feedbackTool/CREATE_FEEDBACK_TOOL_CONTENT_ITEM';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case CREATE_FEEDBACK_TOOL_CONTENT_ITEM: {

      let m = new Map();
      for (let obj of state) {
        if (obj && obj.id) {
          m.set(obj.id, obj);
        }
      }
      m.set(action.value.id, action.value);
      return [...m.values()];
    }
    default: {
      return state;
    }
  }
};

// Action
export function submitFeedbackToolContentItem(value) {
  return {
    type: CREATE_FEEDBACK_TOOL_CONTENT_ITEM,
    value
  };
}
