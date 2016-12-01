export const CREATE_FEEDBACK_TOOL_CONTENT_ITEM = 'wk_frontend/feedbackTool/CREATE_FEEDBACK_TOOL_CONTENT_ITEM';

const feedbackToolContentItem = [{
  type: 'integrationOfResearch',
  instructorContent: {
    comment: `You do a nice job presenting these two sides; however, you're not staking a claim in this argument.
  Your thesis is buried and unclear.
  I would begin here with your revisions to clarify your thesis statement.`
  },
  publisherContent: {
    resources: [
      {
        title: 'What is a Thesis',
        url: 'http://www.google.com'
      },
      {
        title: 'Examples of a good Thesis',
        url: 'http://www.facebook.com'
      },
      {
        title: 'Where should I put my Thesis',
        url: 'http://www.yahoo.com'
      }
    ]
  },
  position: {
    top: '400',
    left: '0'
  }
}];

// Reducer
export default (state = feedbackToolContentItem, action) => {
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
