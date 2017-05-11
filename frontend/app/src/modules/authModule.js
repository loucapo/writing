export const AUTH_LOAD_ACTION = `wk_frontend/authLoadAction/AUTH_LOAD_ACTION`;

// Reducer
export default (state = {}, action) => {
  if (action.type === AUTH_LOAD_ACTION) {
    return action.authValues;
  }
  return state;
};

export function loadAuth(authValues) {
  return {type: AUTH_LOAD_ACTION, authValues};
}
