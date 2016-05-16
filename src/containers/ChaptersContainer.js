/**
 * Created by rharik on 5/11/16.
 */

import { connect } from 'react-redux'
import Chapters from './../components/Chapters.js'



function mapStateToProps(state) {
    const currentCourse = state.courses.filter(x=>x.id === state.currentCourse)[0] || state.courses[0];
    return {
        chapters: currentCourse.chapters
    }
}

export default connect(mapStateToProps)(Chapters);
