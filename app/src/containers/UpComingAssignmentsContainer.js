import Assignments from './../components/Assignments';
import upComingAssignmentsSelector from './selectors/upcomingAssignmentsSelector';
import { connect } from 'react-redux';

export default connect(upComingAssignmentsSelector)(Assignments);

