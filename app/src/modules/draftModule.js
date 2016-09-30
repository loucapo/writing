export const SUCCESS_ACTIVITY = 'wk_frontend/activity/SUCCESS_ACTIVITY';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case SUCCESS_ACTIVITY: {
      let drafts = action.payload.data.drafts;
      if (!drafts) {
        return state;
      }
      let newState = state.map(x=> {
        let draft = drafts.filter(d => d.id === x.id);
        return draft[0] || x;
      });
      drafts.forEach(x => {
        if (state.every(d => d.id !== x.id)) {
          newState.push(x);
        }
      });
      return newState;
    }
    default: {
      return state;
    }
  }
};
