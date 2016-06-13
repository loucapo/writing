export default ({ chapters, assignments }, props) =>
    ({ assignments: chapters[props.id].assignments.map(assId => assignments[assId]) });
