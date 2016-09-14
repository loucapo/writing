import { CALL_API } from 'redux-api-middleware';
import {config} from './../utilities/configValues';
export const REQUEST_HELLO = 'wk_frontend/hello/REQUEST_HELLO ';
export const SUCCESS_HELLO = 'wk_frontend/hello/SUCCESS_HELLO';
export const FAILURE_HELLO = 'wk_frontend/hello/FAILURE_HELLO';


export default (state = 'Hello', action) => {
  switch (action.type) {
    case REQUEST_HELLO: {
      return state;
    }
    case SUCCESS_HELLO: {
      return action.payload.data.Hello;
    }
    case FAILURE_HELLO: {
      // return Object.assign({}, state, { message: action.payload.data });
      break;
    }
    default: {
      return state;
    }
  }
};

export function helloAction() {
  return {
    [CALL_API]: {
      endpoint: config.apiUrl,
      method: 'GET',
      types: [
        REQUEST_HELLO,
        SUCCESS_HELLO,
        FAILURE_HELLO
      ]
    }
  };
}
