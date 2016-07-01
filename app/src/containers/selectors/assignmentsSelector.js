
export default (state, props) => {
    const result = { assignments: [] };
    if (!state.sections || !props.id) { return result; }
    result.assignments = state.sections[props.id].assignments.map(assId => state.assignments[assId]);

    return result;
};
