import Assignments from './../components/Assignments';
import upComingAssignmentsSelector from './selectors/upcomingAssignmentsSelector';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export default withRouter(connect(upComingAssignmentsSelector)(Assignments));
