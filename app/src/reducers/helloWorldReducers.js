import { combineReducers } from 'redux';
import { HELLO_WORLD } from './../actions';

const helloWorldReducer = (state = { message: 'Hello' }, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      console.log("HANDLING MY ACTION TYPE!!!!");
      return Object.assign({}, state, { message: action.value });
    default:
      console.log("Unknown action type");
      return state;
  }
};

const allHelloWorldReducers = combineReducers({
  helloWorldReducer
});

export default allHelloWorldReducers;
