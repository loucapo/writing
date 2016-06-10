import Assignments from './../components/Assignments';
import container from './containerFactory';
import assignmentSelector from './selectors/assignmentsSelector';

export default container(['chapters', 'assignments'], assignmentSelector)(Assignments);
