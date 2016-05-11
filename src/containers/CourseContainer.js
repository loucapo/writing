/**
 * Created by rharik on 5/11/16.
 */

import { connect } from 'react-redux'
import Course from './../components/Course.js'

function mapStateToProps(state) {
    return {
        courseName: state.course.courseName
    }
}

export default connect(mapStateToProps)(Course);

