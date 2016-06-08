/**
 * Created by rharik on 5/11/16.
 */

import Assignments from './../components/Assignments';
import container from './containerFactory';

var transform = ({chapters, assignments}, props) => {
    return {assignments: chapters[props.id].assignments.map(assId => assignments[assId])};
};

export {transform};
export default container(['chapters', 'assignments'], transform)(Assignments);



