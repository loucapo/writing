/**
 * Created by rharik on 5/11/16.
 */

import { connect } from 'react-redux'
import Assignments from './../components/Assignments'

function mapStateToProps(state) {
    return {
        assignments: state.course.assignments
    }
}

export default connect(mapStateToProps)(Assignments);

