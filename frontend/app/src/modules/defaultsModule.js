export const DEFAULTS_LOAD_ACTION = `wk_frontend/defaultLoadAction/DEFAULTS_LOAD_ACTION`;

// Reducer
export default (state = {}, action) => {
  if (action.type === DEFAULTS_LOAD_ACTION) {
    return action.defaultValues;
  }
  return state;
};

export function loadDefaults(defaultValues) {
  return {type: DEFAULTS_LOAD_ACTION, defaultValues};
}
