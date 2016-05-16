/**
 * Created by rharik on 5/11/16.
 */

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './../actions/index'
import Chapters from './../components/Chapters.js'



function mapStateToProps(state) {
    const currentCourse = state.courses.filter(x=>x.id === state.currentCourse)[0] || state.courses[0];
    return {
        chapters: currentCourse.chapters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onChapterClick:actions.expandChapter }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Chapters);
