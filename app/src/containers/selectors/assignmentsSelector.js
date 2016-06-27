
export default (state, props) => {
    const result = { assignments: [] };

    result.assignments = state.sections[props.id].assignments.map(assId => state.assignments[assId]);

    return result;
};
