import Assignments from './../components/Assignments';
import container from './containerFactory';
import upComingAssignmentsSelector from './selectors/upcomingAssignmentsSelector';

export default container(['courses', 'currentCourse', 'chapters', 'assignments'],
    upComingAssignmentsSelector)(Assignments);
