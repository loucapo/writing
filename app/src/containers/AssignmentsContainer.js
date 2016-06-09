import Assignments from './../components/Assignments';
import container from './containerFactory';

const transform = ({ chapters, assignments }, props) =>
    ({ assignments: chapters[props.id].assignments.map(assId => assignments[assId]) });

export { transform };
export default container(['chapters', 'assignments'], transform)(Assignments);
