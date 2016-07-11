export default (state, props) => {
  let result = { assignments: [] };
  let assignments;


  if (!state.sections || !props.id) {
    return result;
  }

  assignments = state.sections[props.id].assignments;
  result.assignments = assignments.map(assId => state.assignments[assId]);

  return result;
};

