const helloWorldReducer = (state = { message: 'Hello' }, action) => {
  switch (action.type) {
    case 'REQUEST':
      return state;
    case 'SUCCESS':
      return Object.assign({}, state, { message: action.payload });
    case 'FAILURE':
      return Object.assign({}, state, { message: action.payload });
    default:
      console.log('Unknown action type');
      return state;
  }
};

export default helloWorldReducer;
