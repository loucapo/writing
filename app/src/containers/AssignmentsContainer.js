import Assignments from './../components/Assignments';
import assignmentSelector from './selectors/assignmentsSelector';
import { connect } from 'react-redux';

export default connect(assignmentSelector)(Assignments);
