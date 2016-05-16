/**
 * Created by rharik on 5/11/16.
 */

import { connect } from 'react-redux'
import Course from './../components/Course.js'

function mapStateToProps(state) {
    const currentCourse = state.courses.filter(x=>x.id === state.currentCourse) || state.courses[0];
    return {
        courseTitle: currentCourse.courseTitle
    }
}

export default connect(mapStateToProps)(Course);

