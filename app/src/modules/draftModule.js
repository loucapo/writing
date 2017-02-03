import reducerMerge from './../utilities/reducerMerge';

export const SUCCESS_ACTIVITY = 'wk_frontend/activity/SUCCESS_ACTIVITY';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case SUCCESS_ACTIVITY: {
      let drafts = action.result.data.drafts;
      if (!drafts) {
        return state;
      }
      return reducerMerge(state, drafts);
    }
    default: {
      return state;
    }
  }
};
